const axios = require('axios').default;
const fs = require('fs');
const config = require('./config.js');
// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region
AWS.config.update({region: 'us-east-1'});

const main = async () => {
    const optionsGetList = {
        method: 'GET',
        url: 'https://realty-in-us.p.rapidapi.com/properties/v2/list-for-sale',
        params: {
            state_code: 'NJ',
            age_max: config.maxAge,
            baths_min: config.minBath,
            beds_min: config.minBed,
            //city: config.cityList,
            //features: 'garage_2_or_more',
            price_max: config.maxPrice,
            is_pending: false,
            is_contingent: false,
            offset: config.offset,
            limit: config.limit,
            sort: 'price_low',
            //prop_type : 'single_family',
            //prop_sub_type: 'townhouse'
        },
        headers: {
            'x-rapidapi-key': config.apiKey,
            'x-rapidapi-host': config.apiHost
        }
    };
    let propertyDetailsArr = [];
    let propertyDetailsTransArr = [];
    let maxHoa=0;
    //let maxLotSize = 0;
    //let maxAge = 0;
    for(let cityName of config.cityList) {
        optionsGetList.params.city = cityName;
        let propertiesForSale = await getPropertyForSale(optionsGetList);
        let outFileListForSale = './data/list-for-sale-' + optionsGetList.params.city + '.json';
        writeInFile(outFileListForSale, JSON.stringify(propertiesForSale, null, 4));

        for (let property of propertiesForSale.properties) {
            let propertyId = property.property_id;
            let propertyDetails = await getPropertyDetails(propertyId);
            propertyDetailsArr.push(propertyDetails);
            let transformedJSON = transformToNewJSON(propertyDetails);
            maxHoa = Math.max(maxHoa, transformedJSON.HoAFee);
            propertyDetailsTransArr.push(transformedJSON);
        }
    }
    for (let newPropertyObject of propertyDetailsTransArr) {
        newPropertyObject["LikeScore"]  = getWeightedAverageOfProperties(newPropertyObject,config.maxPrice,maxHoa,config.maxAge);
    }
    propertyDetailsTransArr.sort((a,b)=>b.LikeScore-a.LikeScore);
    let outFileNameDetails = `./data/list-for-sale-details-${optionsGetList.params.city}.json`;
    let outFileNameTransformed = `./data/list-for-sale-transformed.json`;
    writeInFile(outFileNameDetails, JSON.stringify(propertyDetailsArr, null, 4));
    writeInFile(outFileNameTransformed, JSON.stringify(propertyDetailsTransArr, null, 4));
    let htmlTable = jsonToHtml(propertyDetailsTransArr);
    sendEmail(htmlTable);
};

function getPropertyForSale(optionsGetList) {
    return axios.request(optionsGetList).then((response) => {
        return response.data;
    }).catch((error) => {
        console.error(error);
    });
};

const getPropertyDetails =  (propertyId) => {
    console.log(propertyId);
    const optionsGetDetails = {
        method: 'GET',
        url: 'https://realty-in-us.p.rapidapi.com/properties/v2/detail',
        params: {property_id: propertyId},
        headers: {
            'x-rapidapi-key': config.apiKey,
            'x-rapidapi-host': config.apiHost
        }
    };

    return axios.request(optionsGetDetails).then((response) => {
        return response.data;
    }).catch((error) => {
        console.error(error);
    });

};

const writeInFile = (outFileName, jsonResponseContent) => {
    fs.writeFile(outFileName, jsonResponseContent, err => {
        if (err) {
            console.error(err);
            return;
        }
    });
};

const transformToNewJSON = (propertyDetails) => {

    let newPropertyObject = {};
    //console.log(propertyDetails.properties[0])
    //if(propertyDetails.properties[0] !== undefined) {
        let property = propertyDetails.properties[0];


        //newPropertyObject["ID"] = id+1;
        newPropertyObject["PropertyID"] = property.property_id;
        newPropertyObject["ListingActivity"] = propertyDetails.meta.tracking_params.listingActivity;
        newPropertyObject["URL"] = property.rdc_web_url;
        newPropertyObject["City"] = property.address.city;
        newPropertyObject["PropertyType"] = property.prop_type;
        newPropertyObject["Price"] = property.price;
        newPropertyObject["Beds"] = property.beds;
        newPropertyObject["BathsFull"] = property.baths_full;
        newPropertyObject["Baths"] = property.baths;
        newPropertyObject["ListDate"] = property.list_date.substr(0, 10);

        newPropertyObject["HoAFee"] = 0;
        if (property.hasOwnProperty("hoa_fee")) {
            newPropertyObject["HoAFee"] = property.hoa_fee;
        }
        newPropertyObject["YearBuilt"] = property.year_built;

        newPropertyObject["Garage"] = "undefined";
        if (property.hasOwnProperty("garage")) {
            newPropertyObject["Garage"] = property.garage;
        }

        newPropertyObject["SchoolDistrict"] = "undefined";
        //Get school district
        let schoolDistrictInfoObj = property.features.filter(getSchoolDistrict);
        if (schoolDistrictInfoObj.length > 0) {
            let index = schoolDistrictInfoObj[0].text.findIndex(text => text.includes("School District"))
            newPropertyObject["SchoolDistrict"] = schoolDistrictInfoObj[0].text[index].split(":")[1]
        }

        //Get average school rating
        let schoolRatingInfoArr = property.schools.map(getSchoolsRating);
        let arrLength = 0;
        let sum = 0;
        for (let schoolRatingInfo of schoolRatingInfoArr) {
            if (schoolRatingInfo !== 0) {
                arrLength += 1;
                sum = sum + schoolRatingInfo;
            }
        }
        newPropertyObject["AverageSchoolRating"] = (sum / arrLength).toFixed(2);

        //Get monthly payments
        if ((property.hasOwnProperty("mortgage")) &&
            (property.mortgage.hasOwnProperty("estimate")) &&
            (property.mortgage.estimate.hasOwnProperty("monthly_payment"))) {
            newPropertyObject["MonthlyPayment"] = property.mortgage.estimate.monthly_payment;
        } else {
            newPropertyObject["MonthlyPayment"] = 0;
        }

        if (property.hasOwnProperty('building_size')) {
            if (property.building_size.units === 'acres') {
                property.building_size.size = property.building_size.size / 43560 || 0;
            }
            newPropertyObject["BuildingSizeSqft"] = property.building_size.size;
        } else {
            newPropertyObject["BuildingSizeSqft"] = 0;
        }

        if (property.hasOwnProperty('lot_size')) {
            if (property.lot_size.units === 'acres') {
                property.lot_size.size = property.lot_size.size / 43560 || 0;
            }
            newPropertyObject["LotSizeSqft"] = property.lot_size.size;
        } else {
            newPropertyObject["LotSizeSqft"] = 0;
        }

        //newPropertyObject["LikeScore"]  = getWeightedAverageOfProperties(newPropertyObject);
        return newPropertyObject;
    //}
};

const jsonToHtml = (propertyDetailsTransArr) => {
    let keys = (["Rank","Type","Score","Activity","URL","City","Built","Price",
        "HoA","MonthlyPay","SchoolRating","BuildingSize",
        "LotSize","Beds","BathsFull","Baths","Garage","PropertyID"]);

    let header = keys.map((key)=> {
        return (`<th style="border-collapse:collapse; border:1px solid #999;">
                ${key}
            </th>`);
    }).join('\n');

    let table = `<div style="font-family: Arial,Helvetica,sans-serif; font-size:10px; overflow-x: auto; width:100vw;">
                    <table style="border-collapse:collapse; border:1px solid #999;" >
                        <tr style="border-collapse:collapse; border:1px solid #999;">
                        ${header}
                       </tr>`

    let values = propertyDetailsTransArr.map((propertyObject,idx)=> {
        //return Object.values(JSON.parse(JSON.stringify(propertyObject)));
        return [idx+1,propertyObject.PropertyType,propertyObject.LikeScore,propertyObject.ListingActivity,propertyObject.URL,
            propertyObject.City,propertyObject.YearBuilt,
            propertyObject.Price,propertyObject.HoAFee,propertyObject.MonthlyPayment,propertyObject.AverageSchoolRating,
            propertyObject.BuildingSizeSqft,propertyObject.LotSizeSqft,propertyObject.Beds,
            propertyObject.BathsFull,propertyObject.Baths,propertyObject.Garage,
            propertyObject.PropertyID]

    });
    let column = values.map((value,i)=> {
        let columnVal = value.map((col) => {
            if(col !== undefined && col!== null) {
                if (col.toString().startsWith("https:")) {
                    return (`<td><a href=${col} target="_blank" style="border-collapse:collapse; border:1px solid #999;">
                    ${col}
                    </a>
                         </td>`);
                }
            }
            return (`<td style="border-collapse:collapse; border:1px solid #999;">
                ${col}
                     </td>`);

        }).join('\n')
        let row = `<tr style="border-collapse:collapse; border:1px solid #999;">
                        ${columnVal}
                   </tr>`
        table += row;
    });
    table += `</table></div>`
    let outHtmlFile = './data/list-for-sale.html'
    writeInFile(outHtmlFile, table);
    return table;
}

const getSchoolDistrict = (feature) => {
    if((feature.hasOwnProperty("category")) &&
        (feature.category === "School Information") &&
        (feature.text.some(text=>text.includes("School District")))) {
        return true;
    } else {
        return false;
    }
}

const getSchoolsRating = (school) => {
    if((school.hasOwnProperty("ratings")) &&
        (school.ratings.hasOwnProperty("great_schools_rating")) &&
        (school.ratings.great_schools_rating !== null)) {
        return school.ratings.great_schools_rating;
    } else {
        return 0;
    }
}

const sendEmail = (htmlTable) => {
    // Create sendEmail params
    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let params = {
        Destination: { /* required */

            ToAddresses: [
                'prishululla@gmail.com'
                /* more items */
            ]
        },
        Message: { /* required */
            Body: { /* required */
                Html: {
                    Charset: "UTF-8",
                    Data: htmlTable
                }
            },
            Subject: {
                Charset: 'UTF-8',
                Data: `Realtor Properties For Sale(NJ)-${date}`
            }
        },
        Source: 'prishululla@gmail.com' /* required */
    };

// Create the promise and SES service object
    let sendPromise = new AWS.SES({apiVersion: '2010-12-01'}).sendEmail(params).promise();

// Handle promise's fulfilled/rejected states
    sendPromise.then(
        function(data) {
            console.log(data.MessageId);
        }).catch(
        function(err) {
            console.error(err, err.stack);
        });
}

const getPublicSewerDetails = (feature) => {
    if((feature.hasOwnProperty("category")) &&
        (feature.category === "Utilities") &&
        (feature.text.some(text=>text.includes("Public Sewer")))) {
        return true;
    } else {
        return false;
    }
}

const getWeightedAverageOfProperties = (outPropertyObject,maxPrice,maxHoa,maxAge) => {
    //console.log(outPropertyObject.PropertyID,maxHoa,maxLotSize)
    //Define scale for every element to be considered for weighted average - Price, school rating, year built, hoa

    let scaledPrice = ((maxPrice-outPropertyObject.Price))/maxPrice;
    let propertyAge= 2021-outPropertyObject.YearBuilt;
    let scaledAge = (maxAge-propertyAge)/maxAge;
    let scaledSchoolRating = outPropertyObject.AverageSchoolRating/10;
    let scaledHoaFee = ((maxHoa-outPropertyObject.HoAFee))/maxHoa;
    //let scaledLotSize = ((maxLotSize-outPropertyObject.LotSizeSqft))/maxLotSize;


    //Calculate weighted average as (scale*weight)/weight_total
    let weightTotal = config.weightPrice + config.weightAge + config.weightSchoolRating + config.weightHoa;

    let weightedAverage = ((((scaledPrice*config.weightPrice) + (scaledAge*config.weightAge) +
        (scaledSchoolRating*config.weightSchoolRating) +
        //(scaledLotSize*config.weightLotSize) +
        (scaledHoaFee*config.weightHoa))/weightTotal)*100).toFixed(2);

    console.log(weightedAverage);
    return weightedAverage;
}


main();


