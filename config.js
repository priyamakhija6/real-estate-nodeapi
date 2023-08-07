const dotenv = require("dotenv");
let result = dotenv.config();

const config = {
    maxAge : 2021-parseInt(process.env.MIN_YEAR_BUILT),
    minBath : parseInt(process.env.MIN_BATH),
    minBed : parseInt(process.env.MIN_BED),
    maxPrice : parseInt(process.env.MAX_PRICE),
    offset : parseInt(process.env.OFFSET),
    limit : parseInt(process.env.LIMIT),
    minYearBuilt : parseInt(process.env.MIN_YEAR_BUILT),
    maxHoa : parseInt(process.env.MAX_HOA),

    weightPrice : parseInt(process.env.WEIGHT_PRICE),
    weightSchoolRating : parseInt(process.env.WEIGHT_SCHOOL_RATING),
    weightAge : parseInt(process.env.WEIGHT_AGE),
    weightHoa : parseInt(process.env.WEIGHT_HOA),
    weightLotSize : parseInt(process.env.WEIGHT_LOTSIZE),

    cityList : process.env.CITY_LIST.split(","),

    apiKey : process.env.API_KEY,
    apiHost : process.env.API_HOST
};


module.exports = config;