const fs = require('fs');
const propertyDetailsTransArr =
    [
        {
            "PropertyID": "M5635250180",
            "ListingActivity": "pending",
            "URL": "https://www.realtor.com/realestateandhomes-detail/27-Mount-Pleasant-Pkwy_Livingston_NJ_07039_M56352-50180",
            "City": "Livingston",
            "PropertyType": "single_family",
            "Price": 519000,
            "Beds": 3,
            "BathsFull": 2,
            "Baths": 2,
            "ListDate": "2021-06-15",
            "HoAFee": 0,
            "YearBuilt": 1938,
            "Garage": "1",
            "SchoolDistrict": "undefined",
            "AverageSchoolRating": "7.20",
            "MonthlyPayment": 2667,
            "BuildingSizeSqft": 0,
            "LotSizeSqft": 5663,
            "LikeScore": "21.52"
        },
        {
            "PropertyID": "M6583328987",
            "ListingActivity": "pending",
            "URL": "https://www.realtor.com/realestateandhomes-detail/47-Burnet-St_Livingston_NJ_07039_M65833-28987",
            "City": "Livingston",
            "PropertyType": "single_family",
            "Price": 525000,
            "Beds": 3,
            "BathsFull": 2,
            "Baths": 2,
            "ListDate": "2021-06-23",
            "HoAFee": 0,
            "YearBuilt": 1941,
            "Garage": "1",
            "SchoolDistrict": "undefined",
            "AverageSchoolRating": "8.25",
            "MonthlyPayment": 2763,
            "BuildingSizeSqft": 1270,
            "LotSizeSqft": 12197,
            "LikeScore": "21.38"
        },
        {
            "PropertyID": "M6918067091",
            "ListingActivity": "pending",
            "URL": "https://www.realtor.com/realestateandhomes-detail/31-Congressional-Pkwy_Livingston_NJ_07039_M69180-67091",
            "City": "Livingston",
            "PropertyType": "single_family",
            "Price": 525000,
            "Beds": 3,
            "BathsFull": 2,
            "Baths": 2,
            "ListDate": "2021-06-10",
            "HoAFee": 0,
            "YearBuilt": 1927,
            "Garage": "2",
            "SchoolDistrict": "undefined",
            "AverageSchoolRating": "7.00",
            "MonthlyPayment": 2704,
            "BuildingSizeSqft": 0,
            "LotSizeSqft": 4792,
            "LikeScore": "21.08"
        },
        {
            "PropertyID": "M5152928275",
            "ListingActivity": "active",
            "URL": "https://www.realtor.com/realestateandhomes-detail/21-Tower-Rd_Livingston_NJ_07039_M51529-28275",
            "City": "Livingston",
            "PropertyType": "single_family",
            "Price": 539000,
            "Beds": 3,
            "BathsFull": 2,
            "Baths": 2,
            "ListDate": "2021-08-03",
            "HoAFee": 0,
            "YearBuilt": 1951,
            "SchoolDistrict": "undefined",
            "AverageSchoolRating": "8.00",
            "MonthlyPayment": 2888,
            "BuildingSizeSqft": 0,
            "LotSizeSqft": 18295,
            "LikeScore": "20.83"
        },
        {
            "PropertyID": "M6042003907",
            "ListingActivity": "active",
            "URL": "https://www.realtor.com/realestateandhomes-detail/63-Hillside-Ter_Livingston_NJ_07039_M60420-03907",
            "City": "Livingston",
            "PropertyType": "single_family",
            "Price": 540000,
            "Beds": 3,
            "BathsFull": 2,
            "Baths": 2,
            "ListDate": "2021-08-12",
            "HoAFee": 0,
            "YearBuilt": 1939,
            "Garage": "1",
            "SchoolDistrict": "undefined",
            "AverageSchoolRating": "7.20",
            "MonthlyPayment": 2849,
            "BuildingSizeSqft": 0,
            "LotSizeSqft": 6970,
            "LikeScore": "20.55"
        },
        {
            "PropertyID": "M6069938843",
            "ListingActivity": "pending",
            "URL": "https://www.realtor.com/realestateandhomes-detail/10-Swan-Rd_Livingston_NJ_07039_M60699-38843",
            "City": "Livingston",
            "PropertyType": "single_family",
            "Price": 565000,
            "Beds": 3,
            "BathsFull": 2,
            "Baths": 2,
            "ListDate": "2021-06-21",
            "HoAFee": 0,
            "YearBuilt": 1926,
            "Garage": "2",
            "SchoolDistrict": "undefined",
            "AverageSchoolRating": "8.25",
            "MonthlyPayment": 2838,
            "BuildingSizeSqft": 0,
            "LotSizeSqft": 12632,
            "LikeScore": "19.32"
        },
        {
            "PropertyID": "M5631407753",
            "ListingActivity": "pending",
            "URL": "https://www.realtor.com/realestateandhomes-detail/37-N-Baums-Ct_Livingston_NJ_07039_M56314-07753",
            "City": "Livingston",
            "PropertyType": "single_family",
            "Price": 575000,
            "Beds": 3,
            "BathsFull": 2,
            "Baths": 2,
            "ListDate": "2021-06-04",
            "HoAFee": 0,
            "YearBuilt": 1952,
            "Garage": "2",
            "SchoolDistrict": "undefined",
            "AverageSchoolRating": "7.80",
            "MonthlyPayment": 3061,
            "BuildingSizeSqft": 0,
            "LotSizeSqft": 9583,
            "LikeScore": "19.14"
        },
        {
            "PropertyID": "M6071843258",
            "ListingActivity": "active",
            "URL": "https://www.realtor.com/realestateandhomes-detail/45-Fellswood-Dr_Livingston_NJ_07039_M60718-43258",
            "City": "Livingston",
            "PropertyType": "single_family",
            "Price": 575000,
            "Beds": 3,
            "BathsFull": 2,
            "Baths": 2,
            "ListDate": "2021-08-18",
            "HoAFee": 0,
            "YearBuilt": 1951,
            "Garage": "1",
            "SchoolDistrict": "undefined",
            "AverageSchoolRating": "7.80",
            "MonthlyPayment": 3006,
            "BuildingSizeSqft": 0,
            "LotSizeSqft": 8712,
            "LikeScore": "19.13"
        },
        {
            "PropertyID": "M5567053505",
            "ListingActivity": "active",
            "URL": "https://www.realtor.com/realestateandhomes-detail/155-E-Cedar-St_Livingston_NJ_07039_M55670-53505",
            "City": "Livingston",
            "PropertyType": "single_family",
            "Price": 589000,
            "Beds": 3,
            "BathsFull": 2,
            "Baths": 3,
            "ListDate": "2021-08-08",
            "HoAFee": "undefined",
            "YearBuilt": 1925,
            "Garage": "yes",
            "SchoolDistrict": "undefined",
            "AverageSchoolRating": "7.60",
            "MonthlyPayment": 2942,
            "BuildingSizeSqft": 0,
            "LotSizeSqft": 0,
            "LikeScore": "NaN"
        },
        {
            "PropertyID": "M6180096969",
            "ListingActivity": "active",
            "URL": "https://www.realtor.com/realestateandhomes-detail/6-Consul-Rd_Livingston_NJ_07039_M61800-96969",
            "City": "Livingston",
            "PropertyType": "single_family",
            "Price": 599000,
            "Beds": 4,
            "BathsFull": 2,
            "Baths": 3,
            "ListDate": "2021-08-13",
            "HoAFee": 0,
            "YearBuilt": 1968,
            "Garage": "2",
            "SchoolDistrict": "undefined",
            "AverageSchoolRating": "7.80",
            "MonthlyPayment": 3445,
            "BuildingSizeSqft": 0,
            "LotSizeSqft": 14810,
            "LikeScore": "18.23"
        },
        {
            "PropertyID": "M5711322380",
            "ListingActivity": "active,price-reduced",
            "URL": "https://www.realtor.com/realestateandhomes-detail/51-Elmwood-Dr_Livingston_NJ_07039_M57113-22380",
            "City": "Livingston",
            "PropertyType": "single_family",
            "Price": 595000,
            "Beds": 4,
            "BathsFull": 2,
            "Baths": 2,
            "ListDate": "2021-07-07",
            "HoAFee": 0,
            "YearBuilt": 1950,
            "Garage": "1",
            "SchoolDistrict": "undefined",
            "AverageSchoolRating": "7.40",
            "MonthlyPayment": 3055,
            "BuildingSizeSqft": 0,
            "LotSizeSqft": 9148,
            "LikeScore": "18.15"
        },
        {
            "PropertyID": "M6807500079",
            "ListingActivity": "pending",
            "URL": "https://www.realtor.com/realestateandhomes-detail/45-Coddington-Ter_Livingston_NJ_07039_M68075-00079",
            "City": "Livingston",
            "PropertyType": "single_family",
            "Price": 619000,
            "Beds": 4,
            "BathsFull": 4,
            "Baths": 4,
            "ListDate": "2021-07-01",
            "HoAFee": 0,
            "YearBuilt": 1962,
            "Garage": "2",
            "SchoolDistrict": "undefined",
            "AverageSchoolRating": "8.50",
            "MonthlyPayment": 3609,
            "BuildingSizeSqft": 2798,
            "LotSizeSqft": 35719,
            "LikeScore": "17.29"
        },
        {
            "PropertyID": "M5519402777",
            "ListingActivity": "active",
            "URL": "https://www.realtor.com/realestateandhomes-detail/2-Countryside-Dr_Livingston_NJ_07039_M55194-02777",
            "City": "Livingston",
            "PropertyType": "single_family",
            "Price": 617500,
            "Beds": 3,
            "BathsFull": 2,
            "Baths": 2,
            "ListDate": "2021-07-23",
            "HoAFee": 0,
            "YearBuilt": 1953,
            "SchoolDistrict": "undefined",
            "AverageSchoolRating": "7.20",
            "MonthlyPayment": 3190,
            "BuildingSizeSqft": 1632,
            "LotSizeSqft": 9583,
            "LikeScore": "17.11"
        },
        {
            "PropertyID": "M6576947065",
            "ListingActivity": "active",
            "URL": "https://www.realtor.com/realestateandhomes-detail/231-Hillside-Ave_Livingston_NJ_07039_M65769-47065",
            "City": "Livingston",
            "PropertyType": "single_family",
            "Price": 615000,
            "Beds": 4,
            "BathsFull": 2,
            "Baths": 2,
            "ListDate": "2021-08-13",
            "HoAFee": 0,
            "YearBuilt": 1925,
            "Garage": "2",
            "SchoolDistrict": "undefined",
            "AverageSchoolRating": "8.50",
            "MonthlyPayment": 3205,
            "BuildingSizeSqft": 0,
            "LotSizeSqft": 11326,
            "LikeScore": "17.00"
        },
        {
            "PropertyID": "M6710955394",
            "ListingActivity": "active",
            "URL": "https://www.realtor.com/realestateandhomes-detail/2-Country-Club-Ct_Livingston_NJ_07039_M67109-55394",
            "City": "Livingston",
            "PropertyType": "single_family",
            "Price": 629000,
            "Beds": 4,
            "BathsFull": 3,
            "Baths": 3,
            "ListDate": "2021-08-16",
            "HoAFee": "undefined",
            "YearBuilt": 1965,
            "Garage": "yes",
            "SchoolDistrict": "undefined",
            "AverageSchoolRating": "8.00",
            "MonthlyPayment": 3410,
            "BuildingSizeSqft": 0,
            "LotSizeSqft": 0,
            "LikeScore": "NaN"
        },
        {
            "PropertyID": "M6611748380",
            "ListingActivity": "active",
            "URL": "https://www.realtor.com/realestateandhomes-detail/13-Crescent-Rd_Livingston_NJ_07039_M66117-48380",
            "City": "Livingston",
            "PropertyType": "single_family",
            "Price": 629900,
            "Beds": 3,
            "BathsFull": 2,
            "Baths": 3,
            "ListDate": "2021-08-18",
            "HoAFee": 0,
            "YearBuilt": 1939,
            "Garage": "1",
            "SchoolDistrict": "undefined",
            "AverageSchoolRating": "8.25",
            "MonthlyPayment": 3219,
            "BuildingSizeSqft": 0,
            "LotSizeSqft": 8712,
            "LikeScore": "16.46"
        },
        {
            "PropertyID": "M5934545376",
            "ListingActivity": "pending",
            "URL": "https://www.realtor.com/realestateandhomes-detail/236-Laurel-Ave_Livingston_NJ_07039_M59345-45376",
            "City": "Livingston",
            "PropertyType": "single_family",
            "Price": 635000,
            "Beds": 3,
            "BathsFull": 2,
            "Baths": 2,
            "ListDate": "2021-02-18",
            "HoAFee": 0,
            "YearBuilt": 1961,
            "Garage": "2",
            "SchoolDistrict": "undefined",
            "AverageSchoolRating": "7.80",
            "MonthlyPayment": 3264,
            "BuildingSizeSqft": 0,
            "LotSizeSqft": 40946,
            "LikeScore": "16.46"
        },
        {
            "PropertyID": "M6781610398",
            "ListingActivity": "active,price-reduced",
            "URL": "https://www.realtor.com/realestateandhomes-detail/62-Belmont-Dr_Livingston_NJ_07039_M67816-10398",
            "City": "Livingston",
            "PropertyType": "single_family",
            "Price": 639000,
            "Beds": 3,
            "BathsFull": 2,
            "Baths": 2,
            "ListDate": "2021-08-06",
            "HoAFee": 0,
            "YearBuilt": 1953,
            "Garage": "1",
            "SchoolDistrict": "undefined",
            "AverageSchoolRating": "7.40",
            "MonthlyPayment": 3324,
            "BuildingSizeSqft": 0,
            "LotSizeSqft": 13068,
            "LikeScore": "16.13"
        },
        {
            "PropertyID": "M6267634668",
            "ListingActivity": "active",
            "URL": "https://www.realtor.com/realestateandhomes-detail/13-Grand-Ter_Livingston_NJ_07039_M62676-34668",
            "City": "Livingston",
            "PropertyType": "single_family",
            "Price": 639000,
            "Beds": 4,
            "BathsFull": 3,
            "Baths": 3,
            "ListDate": "2021-08-17",
            "HoAFee": 0,
            "YearBuilt": 1933,
            "Garage": "1",
            "SchoolDistrict": "undefined",
            "AverageSchoolRating": "7.40",
            "MonthlyPayment": 3396,
            "BuildingSizeSqft": 0,
            "LotSizeSqft": 5663,
            "LikeScore": "15.88"
        },
        {
            "PropertyID": "M6385208717",
            "ListingActivity": "active",
            "URL": "https://www.realtor.com/realestateandhomes-detail/8-Mounthaven-Dr_Livingston_NJ_07039_M63852-08717",
            "City": "Livingston",
            "PropertyType": "single_family",
            "Price": 650000,
            "Beds": 3,
            "BathsFull": 2,
            "Baths": 2,
            "ListDate": "2021-08-04",
            "HoAFee": 0,
            "YearBuilt": 1951,
            "Garage": "1",
            "SchoolDistrict": "undefined",
            "AverageSchoolRating": "7.20",
            "MonthlyPayment": 3291,
            "BuildingSizeSqft": 0,
            "LotSizeSqft": 8680,
            "LikeScore": "15.57"
        },
        {
            "PropertyID": "M6823709724",
            "ListingActivity": "pending",
            "URL": "https://www.realtor.com/realestateandhomes-detail/4-Blackstone-Dr_Livingston_NJ_07039_M68237-09724",
            "City": "Livingston",
            "PropertyType": "single_family",
            "Price": 659000,
            "Beds": 4,
            "BathsFull": 2,
            "Baths": 2,
            "ListDate": "2021-07-08",
            "HoAFee": 0,
            "YearBuilt": 1955,
            "Garage": "2",
            "SchoolDistrict": "undefined",
            "AverageSchoolRating": "7.20",
            "MonthlyPayment": 3478,
            "BuildingSizeSqft": 0,
            "LotSizeSqft": 12632,
            "LikeScore": "15.20"
        },
        {
            "PropertyID": "M6547555608",
            "ListingActivity": "pending",
            "URL": "https://www.realtor.com/realestateandhomes-detail/24-Glendale-Ave_Livingston_NJ_07039_M65475-55608",
            "City": "Livingston",
            "PropertyType": "single_family",
            "Price": 650000,
            "Beds": 3,
            "BathsFull": 2,
            "Baths": 3,
            "ListDate": "2021-08-04",
            "HoAFee": 0,
            "YearBuilt": 1909,
            "Garage": "1",
            "SchoolDistrict": "undefined",
            "AverageSchoolRating": "7.80",
            "MonthlyPayment": 3361,
            "BuildingSizeSqft": 0,
            "LotSizeSqft": 15682,
            "LikeScore": "15.10"
        },
        {
            "PropertyID": "M5030211526",
            "ListingActivity": "pending",
            "URL": "https://www.realtor.com/realestateandhomes-detail/22-Byron-Pl_Livingston_NJ_07039_M50302-11526",
            "City": "Livingston",
            "PropertyType": "single_family",
            "Price": 675000,
            "Beds": 3,
            "BathsFull": 3,
            "Baths": 3,
            "ListDate": "2021-07-14",
            "HoAFee": 0,
            "YearBuilt": 1957,
            "Garage": "1",
            "SchoolDistrict": "undefined",
            "AverageSchoolRating": "8.50",
            "MonthlyPayment": 3428,
            "BuildingSizeSqft": 2053,
            "LotSizeSqft": 11326,
            "LikeScore": "14.61"
        },
        {
            "PropertyID": "M6218145496",
            "ListingActivity": "pending",
            "URL": "https://www.realtor.com/realestateandhomes-detail/79-Springbrook-Rd_Livingston_NJ_07039_M62181-45496",
            "City": "Livingston",
            "PropertyType": "single_family",
            "Price": 699000,
            "Beds": 3,
            "BathsFull": 2,
            "Baths": 3,
            "ListDate": "2021-07-21",
            "HoAFee": 0,
            "YearBuilt": 1994,
            "Garage": "2",
            "SchoolDistrict": "undefined",
            "AverageSchoolRating": "7.80",
            "MonthlyPayment": 3691,
            "BuildingSizeSqft": 0,
            "LotSizeSqft": 16117,
            "LikeScore": "13.89"
        },
        {
            "PropertyID": "M6676185047",
            "ListingActivity": "pending",
            "URL": "https://www.realtor.com/realestateandhomes-detail/21-Mount-Pleasant-Pkwy_Livingston_NJ_07039_M66761-85047",
            "City": "Livingston",
            "PropertyType": "single_family",
            "Price": 699000,
            "Beds": 3,
            "BathsFull": 3,
            "Baths": 4,
            "ListDate": "2021-07-20",
            "HoAFee": 0,
            "YearBuilt": 1965,
            "SchoolDistrict": "undefined",
            "AverageSchoolRating": "7.20",
            "MonthlyPayment": 3661,
            "BuildingSizeSqft": 0,
            "LotSizeSqft": 5663,
            "LikeScore": "13.46"
        },
        {
            "PropertyID": "M6817981958",
            "ListingActivity": "pending",
            "URL": "https://www.realtor.com/realestateandhomes-detail/45-Belmont-Dr_Livingston_NJ_07039_M68179-81958",
            "City": "Livingston",
            "PropertyType": "single_family",
            "Price": 699000,
            "Beds": 4,
            "BathsFull": 2,
            "Baths": 2,
            "ListDate": "2021-07-06",
            "HoAFee": 0,
            "YearBuilt": 1960,
            "Garage": "1",
            "SchoolDistrict": "undefined",
            "AverageSchoolRating": "7.40",
            "MonthlyPayment": 3515,
            "BuildingSizeSqft": 0,
            "LotSizeSqft": 10454,
            "LikeScore": "13.42"
        },
        {
            "PropertyID": "M6356284048",
            "ListingActivity": "pending",
            "URL": "https://www.realtor.com/realestateandhomes-detail/25-Broadlawn-Dr_Livingston_NJ_07039_M63562-84048",
            "City": "Livingston",
            "PropertyType": "single_family",
            "Price": 699000,
            "Beds": 3,
            "BathsFull": 2,
            "Baths": 3,
            "ListDate": "2021-07-14",
            "HoAFee": 0,
            "YearBuilt": 1955,
            "Garage": "2",
            "SchoolDistrict": "undefined",
            "AverageSchoolRating": "7.80",
            "MonthlyPayment": 3585,
            "BuildingSizeSqft": 0,
            "LotSizeSqft": 16117,
            "LikeScore": "13.40"
        },
        {
            "PropertyID": "M6359159823",
            "ListingActivity": "active",
            "URL": "https://www.realtor.com/realestateandhomes-detail/19-Claremont-Ave_Livingston_NJ_07039_M63591-59823",
            "City": "Livingston",
            "PropertyType": "single_family",
            "Price": 699000,
            "Beds": 3,
            "BathsFull": 3,
            "Baths": 3,
            "ListDate": "2021-07-08",
            "HoAFee": 0,
            "YearBuilt": 1953,
            "Garage": "1",
            "SchoolDistrict": "undefined",
            "AverageSchoolRating": "7.20",
            "MonthlyPayment": 3695,
            "BuildingSizeSqft": 0,
            "LotSizeSqft": 9583,
            "LikeScore": "13.31"
        },
        {
            "PropertyID": "M6792519170",
            "ListingActivity": "active,price-reduced",
            "URL": "https://www.realtor.com/realestateandhomes-detail/95-W-Northfield-Rd_Livingston_NJ_07039_M67925-19170",
            "City": "Livingston",
            "PropertyType": "single_family",
            "Price": 715000,
            "Beds": 5,
            "BathsFull": 3,
            "Baths": 4,
            "ListDate": "2021-07-01",
            "HoAFee": 0,
            "YearBuilt": 1936,
            "Garage": "1",
            "SchoolDistrict": "undefined",
            "AverageSchoolRating": "8.25",
            "MonthlyPayment": 3668,
            "BuildingSizeSqft": 0,
            "LotSizeSqft": 10454,
            "LikeScore": "12.45"
        },
        {
            "PropertyID": "M6549698813",
            "ListingActivity": "active",
            "URL": "https://www.realtor.com/realestateandhomes-detail/2-Carillon-Cir_Livingston_NJ_07039_M65496-98813",
            "City": "Livingston",
            "PropertyType": "single_family",
            "Price": 749900,
            "Beds": 3,
            "BathsFull": 3,
            "Baths": 5,
            "ListDate": "2021-07-27",
            "HoAFee": null,
            "YearBuilt": 2008,
            "Garage": "yes",
            "SchoolDistrict": "undefined",
            "AverageSchoolRating": "7.40",
            "MonthlyPayment": 4035,
            "BuildingSizeSqft": 0,
            "LotSizeSqft": 0,
            "LikeScore": "11.66"
        },
        {
            "PropertyID": "M5105957963",
            "ListingActivity": "active",
            "URL": "https://www.realtor.com/realestateandhomes-detail/28-Scarsdale-Dr_Livingston_NJ_07039_M51059-57963",
            "City": "Livingston",
            "PropertyType": "single_family",
            "Price": 749900,
            "Beds": 5,
            "BathsFull": 4,
            "Baths": 4,
            "ListDate": "2021-06-29",
            "HoAFee": 0,
            "YearBuilt": 1978,
            "Garage": "2",
            "SchoolDistrict": "undefined",
            "AverageSchoolRating": "7.40",
            "MonthlyPayment": 3826,
            "BuildingSizeSqft": 2880,
            "LotSizeSqft": 15246,
            "LikeScore": "11.27"
        },
        {
            "PropertyID": "M6217095752",
            "ListingActivity": "pending",
            "URL": "https://www.realtor.com/realestateandhomes-detail/6-Boynton-Dr_Livingston_NJ_07039_M62170-95752",
            "City": "Livingston",
            "PropertyType": "single_family",
            "Price": 750000,
            "Beds": 3,
            "BathsFull": 2,
            "Baths": 2,
            "ListDate": "2021-07-14",
            "HoAFee": 0,
            "YearBuilt": 1959,
            "Garage": "1",
            "SchoolDistrict": "undefined",
            "AverageSchoolRating": "8.25",
            "MonthlyPayment": 3805,
            "BuildingSizeSqft": 0,
            "LotSizeSqft": 16988,
            "LikeScore": "11.11"
        },
        {
            "PropertyID": "M6096956651",
            "ListingActivity": "pending",
            "URL": "https://www.realtor.com/realestateandhomes-detail/39-Heron-Rd_Livingston_NJ_07039_M60969-56651",
            "City": "Livingston",
            "PropertyType": "single_family",
            "Price": 750000,
            "Beds": 3,
            "BathsFull": 2,
            "Baths": 4,
            "ListDate": "2021-04-15",
            "HoAFee": 0,
            "YearBuilt": 1958,
            "Garage": "2",
            "SchoolDistrict": "undefined",
            "AverageSchoolRating": "8.25",
            "MonthlyPayment": 3950,
            "BuildingSizeSqft": 0,
            "LotSizeSqft": 15246,
            "LikeScore": "11.10"
        },
        {
            "PropertyID": "M5541526335",
            "ListingActivity": "pending",
            "URL": "https://www.realtor.com/realestateandhomes-detail/3-Deal-Ln_Livingston_NJ_07039_M55415-26335",
            "City": "Livingston",
            "PropertyType": "single_family",
            "Price": 749000,
            "Beds": 4,
            "BathsFull": 2,
            "Baths": 3,
            "ListDate": "2021-07-14",
            "HoAFee": 0,
            "YearBuilt": 1956,
            "Garage": "2",
            "SchoolDistrict": "undefined",
            "AverageSchoolRating": "7.80",
            "MonthlyPayment": 3941,
            "BuildingSizeSqft": 2468,
            "LotSizeSqft": 14810,
            "LikeScore": "11.08"
        },
        {
            "PropertyID": "M9022218556",
            "ListingActivity": "active",
            "URL": "https://www.realtor.com/realestateandhomes-detail/28-Gala-Ct_Livingston_NJ_07039_M90222-18556",
            "City": "Livingston",
            "PropertyType": "condo",
            "Price": 639990,
            "Beds": 3,
            "BathsFull": 2,
            "Baths": 3,
            "ListDate": "2021-06-28",
            "HoAFee": 228,
            "YearBuilt": 2021,
            "Garage": "2",
            "SchoolDistrict": "undefined",
            "AverageSchoolRating": "8.50",
            "MonthlyPayment": 3857,
            "BuildingSizeSqft": 1935,
            "LotSizeSqft": 452153,
            "LikeScore": "-5.74"
        },
        {
            "PropertyID": "M5442846119",
            "ListingActivity": "active",
            "URL": "https://www.realtor.com/realestateandhomes-detail/12-Wardell-Rd_Livingston_NJ_07039_M54428-46119",
            "City": "Livingston",
            "PropertyType": "single_family",
            "Price": 649000,
            "Beds": 3,
            "BathsFull": 3,
            "Baths": 3,
            "ListDate": "2021-08-02",
            "HoAFee": "undefined",
            "YearBuilt": 1938,
            "Garage": "yes",
            "SchoolDistrict": "undefined",
            "AverageSchoolRating": "8.25",
            "MonthlyPayment": 3276,
            "BuildingSizeSqft": 0,
            "LotSizeSqft": 0,
            "LikeScore": "NaN"
        },
        {
            "PropertyID": "M5835614448",
            "ListingActivity": "active",
            "URL": "https://www.realtor.com/realestateandhomes-detail/156-Beaufort-Ave_Livingston_NJ_07039_M58356-14448",
            "City": "Livingston",
            "PropertyType": "single_family",
            "Price": 650000,
            "Beds": 3,
            "BathsFull": 3,
            "Baths": 3,
            "ListDate": "2021-07-26",
            "HoAFee": "undefined",
            "YearBuilt": 1972,
            "Garage": "yes",
            "SchoolDistrict": "undefined",
            "AverageSchoolRating": "7.20",
            "MonthlyPayment": 3340,
            "BuildingSizeSqft": 0,
            "LotSizeSqft": 0,
            "LikeScore": "NaN"
        },
        {
            "PropertyID": "M5317852112",
            "ListingActivity": "active",
            "URL": "https://www.realtor.com/realestateandhomes-detail/10-Alpine-Way_Livingston_NJ_07039_M53178-52112",
            "City": "Livingston",
            "PropertyType": "single_family",
            "Price": 699999,
            "Beds": 4,
            "BathsFull": 2,
            "Baths": 3,
            "ListDate": "2021-08-11",
            "HoAFee": "undefined",
            "YearBuilt": 1961,
            "Garage": "yes",
            "SchoolDistrict": "undefined",
            "AverageSchoolRating": "8.25",
            "MonthlyPayment": 3655,
            "BuildingSizeSqft": 0,
            "LotSizeSqft": 0,
            "LikeScore": "NaN"
        },
        {
            "PropertyID": "M6228248419",
            "ListingActivity": "pending",
            "URL": "https://www.realtor.com/realestateandhomes-detail/11-Tiffany-Dr_Livingston_NJ_07039_M62282-48419",
            "City": "Livingston",
            "PropertyType": "single_family",
            "Price": 725000,
            "Beds": 3,
            "BathsFull": 2,
            "Baths": 3,
            "ListDate": "2021-06-24",
            "HoAFee": 0,
            "YearBuilt": 1958,
            "Garage": "2",
            "SchoolDistrict": "undefined",
            "AverageSchoolRating": "7.80",
            "MonthlyPayment": 3833,
            "BuildingSizeSqft": 0,
            "LotSizeSqft": 15682,
            "LikeScore": "12.22"
        },
        {
            "PropertyID": "M5875298825",
            "ListingActivity": "active",
            "URL": "https://www.realtor.com/realestateandhomes-detail/3-Tabor-Ct_Livingston_NJ_07039_M58752-98825",
            "City": "Livingston",
            "PropertyType": "single_family",
            "Price": 734000,
            "Beds": 4,
            "BathsFull": 3,
            "Baths": 3,
            "ListDate": "2021-08-13",
            "HoAFee": 0,
            "YearBuilt": 1965,
            "Garage": "1",
            "SchoolDistrict": "undefined",
            "AverageSchoolRating": "7.80",
            "MonthlyPayment": 3787,
            "BuildingSizeSqft": 0,
            "LotSizeSqft": 12632,
            "LikeScore": "11.89"
        },
        {
            "PropertyID": "M6070614705",
            "ListingActivity": "active",
            "URL": "https://www.realtor.com/realestateandhomes-detail/75-Mounthaven-Dr_Livingston_NJ_07039_M60706-14705",
            "City": "Livingston",
            "PropertyType": "single_family",
            "Price": 729900,
            "Beds": 3,
            "BathsFull": 2,
            "Baths": 4,
            "ListDate": "2021-08-13",
            "HoAFee": 0,
            "YearBuilt": 1928,
            "Garage": "1",
            "SchoolDistrict": "undefined",
            "AverageSchoolRating": "7.20",
            "MonthlyPayment": 3383,
            "BuildingSizeSqft": 0,
            "LotSizeSqft": 4792,
            "LikeScore": "11.55"
        },
        {
            "PropertyID": "M9002866053",
            "ListingActivity": "active",
            "URL": "https://www.realtor.com/realestateandhomes-detail/11-Willow-Ln_Livingston_NJ_07039_M90028-66053",
            "City": "Livingston",
            "PropertyType": "condo",
            "Price": 725000,
            "Beds": 3,
            "BathsFull": 3,
            "Baths": 4,
            "ListDate": "2021-04-30",
            "HoAFee": 501,
            "YearBuilt": 2008,
            "Garage": "2",
            "SchoolDistrict": "undefined",
            "AverageSchoolRating": "8.25",
            "MonthlyPayment": 4470,
            "BuildingSizeSqft": 0,
            "LotSizeSqft": 364597,
            "LikeScore": "-37.20"
        },
        {
            "PropertyID": "M9559038986",
            "ListingActivity": "pending",
            "URL": "https://www.realtor.com/realestateandhomes-detail/40-Winged-Foot-Dr_Livingston_NJ_07039_M95590-38986",
            "City": "Livingston",
            "PropertyType": "condo",
            "Price": 729000,
            "Beds": 3,
            "BathsFull": 2,
            "Baths": 3,
            "ListDate": "2021-06-29",
            "HoAFee": 691,
            "YearBuilt": 2000,
            "Garage": "2",
            "SchoolDistrict": "undefined",
            "AverageSchoolRating": "8.00",
            "MonthlyPayment": 4488,
            "BuildingSizeSqft": 0,
            "LotSizeSqft": 2041657,
            "LikeScore": "-56.51"
        }
    ]

const jsonToHtml = (propertyDetailsTransArr) => {
    let keys = (["Rank","PropertyType","LikeScore","ListingActivity","URL","City","YearBuilt","Price",
        "HoAFee","MonthlyPayment","AverageSchoolRating","BuildingSizeSqft",
        "LotSizeSqft","Beds","BathsFull","Baths","Garage","PropertyID"]);

    let header = keys.map((key)=> {
        return (`<th style="border-collapse:collapse; border:1px solid #999;">
                ${key}
            </th>`);
    }).join('\n');

    let table = `<div style="font-family: Arial,Helvetica,sans-serif; font-size:8px; overflow-x: auto; width:100vw;">
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
    let outHtmlFile = 'list-for-sale.html'
    writeInFile(outHtmlFile, table);
}

const writeInFile = (outFileName, jsonResponseContent) => {
    fs.writeFile(outFileName, jsonResponseContent, err => {
        if (err) {
            console.error(err);
            return;
        }
    });
};


jsonToHtml(propertyDetailsTransArr);