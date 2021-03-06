//mongoose model

module.exports = exports = function (kabam) {
  var CollegeSchema = new kabam.mongoose.Schema({
    'creatorId': kabam.mongoose.Schema.Types.ObjectId, // id of User, who created this document
    'creatorUsername': String, // login of User, who created this document
    'isApproved': Boolean,//if document is approved, it can be edited only by administrators of moderators
    'INSTNM': String, //Institution (entity) name
    'ADDR': String, //Street address or post office box
    'CITY': String, //City location of institution
    'STABBR': String,//State abbreviation
    'ZIP': String, //Postal Zip Code
    'OBEREG': { //geographical region
      'index': Number,
      'name': String,
      'selected': Boolean
    },
    'CHFNM': String,//Name of chief administrator
    'CHFTITLE': String,//Title of chief administrator
    'GENTELE': String,//General information telephone number
    'EIN': String, //Cont,Employer Identification Number - "The number assigned to an institution by the Internal Revenue Service for tax purposes.
    'OPEID': String, //Cont,Office of Postsecondary Education (OPE) ID Number
    'OPEFLAG': String, //OPE Title IV eligibility indicator code
    'WEBADDR': String, //Institution's internet website address
    'ADMINURL': String, //Admissions office web address
    'FAIDURL': String, //Financial aid office web address
    'APPLURL': String, //Online application web address
    'NPRICURL': String, //Net price calculator web address
    'SECTOR': String, //Sector of institution
    'ICLEVEL': String, //Level of institution
    'CONTROL': String, //Control of institution
    'HLOFFER': {
      'index': String,
      'value': String
    }, //Highest level of offering
    'UGOFFER': String, //Undergraduate offering
    'GROFFER': String, //Graduate offering
    'HDEGOFR1': String, //Highest degree offered
    'DEGGRANT': String, //Degree-granting status
    'HBCU': String, //Historically Black College or University
    'HOSPITAL': String, //Institution has hospital
    'MEDICAL': String, //Institution grants a medical degree
    'TRIBAL': String, //Tribal college
    'LOCALE': String, //Degree of urbanization (Urban-centric locale)
    'OPENPUBL': String, //Institution open to the general public
    'ACT': String, //Status of institution
    'NEWID': String, //Cont,UNITID for merged schools
    'DEATHYR': String, //Year institution was deleted from IPEDS
    'CLOSEDAT': String, //Date institution closed
    'CYACTIVE': String, //Institution is active in current year
    'POSTSEC': String, //Primarily postsecondary indicator
    'PSEFLAG': String, //Postsecondary institution indicator
    'PSET4FLG': String, //Postsecondary and Title IV institution indicator
    'RPTMTH': String, //"Reporting method for student charges, graduation rates, retention rates and student financial aid"
    'IALIAS': String, //Institution name alias
    'INSTCAT': String, //Institutional category
    'CCBASIC': String, //Carnegie Classification 2010: Basic
    'CCIPUG': String, //Carnegie Classification 2010: Undergraduate Instructional Program
    'CCIPGRAD': String, //Carnegie Classification 2010: Graduate Instructional Program
    'CCUGPROF': String, //Carnegie Classification 2010: Undergraduate Profile
    'CCENRPRF': String, //Carnegie Classification 2010: Enrollment Profile
    'CCSIZSET': String, //Carnegie Classification 2010: Size and Setting
    'CARNEGIE': String, //Carnegie Classification 2000
    'LANDGRNT': String, //Land Grant Institution
    'INSTSIZE': String, //Institution size category
    'CBSA': String, //Core Based Statistical Area (CBSA)
    'CBSATYPE': String, //CBSA Type Metropolitan or Micropolitan
    'CSA': String, //Combined Statistical Area (CSA)
    'NECTA': String, //New England City and Town Area (NECTA)
    'F1SYSTYP': String, //"System, Governing Board or Corporate Structure"
    'F1SYSNAM': String, //"Name of system, governing board or corporate entity."
    'FAXTELE': String //Fax number
  });

  CollegeSchema.index({
    INSTNM: 1,
    CITY: 1,
    ZIP: 1,
    WEBADDR: 1
  });

  CollegeSchema.statics.getGeographicalLocations = function () {
    return [
      {
        'index': 0,
        'name': 'US Service schools'
      },
      {
        'index': 1,
        'name': 'New England CT ME MA NH RI VT'
      },
      {
        'index': 2,
        'name': 'Mid East DE DC MD NJ NY PA'
      },
      {
        'index': 3,
        'name': 'Great Lakes IL IN MI OH WI'
      },
      {
        'index': 4,
        'name': 'Plains IA KS MN MO NE ND SD'
      },
      {
        'index': 5,
        'name': 'Southeast AL AR FL GA KY LA MS NC SC TN VA WV'
      },
      {
        'index': 6,
        'name': 'Southwest AZ NM OK TX'
      },
      {
        'index': 7,
        'name': 'Plains IA KS MN MO NE ND SD'
      },
      {
        'index': 8,
        'name': 'Rocky Mountains CO ID MT UT WY'
      },
      {
        'index': 9,
        'name': 'Far West AK CA HI NV OR WA'
      },
      {
        'index': 10,
        'name': 'Outlying areas AS FM GU MH MP PR PW VI'
      },
      {
        'index': -3,
        'name': 'N/A'
      }
    ];
  };
  CollegeSchema.statics.getHighestLevelOfferings = function () {
    return [
      {
        'index': 0,
        'value': 'Other'
      },
      {
        'index': 1,
        'value': 'Postsecondary award, certificate or diploma of less than one academic year'
      },
      {
        'index': 2,
        'value': 'Postsecondary award, certificate or diploma of at least one but less than two academic years'
      },
      {
        'index': 3,
        'value': 'Associate\'s degree'
      },
      {
        'index': 4,
        'value': 'Postsecondary award, certificate or diploma of at least two but less than four academic years'
      },
      {
        'index': 5,
        'value': 'Bachelor\'s degree'
      },
      {
        'index': 6,
        'value': 'Postbaccalaureate certificate'
      },
      {
        'index': 7,
        'value': 'Master\'s degree'
      },
      {
        'index': 8,
        'value': 'Post-master\'s certificate'
      },
      {
        'index': 9,
        'value': 'Doctor\'s degree'
      },
      {
        'index': 'b',
        'value': 'None of the above or no answer'
      },
      {
        'index': -2,
        'value': 'Not applicable, first-professional only'
      },
      {
        'index': -3,
        'value': 'Not Available'
      }
    ];
  };
  CollegeSchema.statics.getLocal = function () {
    return [
      {
        'index': 11,
        'value': 'City: Large: Territory inside an urbanized area and inside a principal city with population of 250,000 or more.'
      },
      {
        'index': 12,
        'value': 'City: Midsize: Territory inside an urbanized area and inside a principal city with population less than 250,000 and greater than or equal to 100,000.'
      },
      {
        'index': 13,
        'value': 'Territory inside an urbanized area and inside a principal city with population less than 100,000.'
      },
      {
        'index': 21,
        'value': 'Suburb: Large: Territory outside a principal city and inside an urbanized area with population of 250,000 or more..'
      },
      {
        'index': 22,
        'value': 'Suburb: Midsize: Territory outside a principal city and inside an urbanized area with population less than 250,000 and greater than or equal to 100,000.'
      },
      {
        'index': 23,
        'value': 'Suburb: Small: Territory outside a principal city and inside an urbanized area with population less than 100,000.'
      },
      {
        'index': 31,
        'value': 'Town: Fringe: Territory inside an urban cluster that is less than or equal to 10 miles from an urbanized area.'
      },
      {
        'index': 32,
        'value': 'Town: Distant: Territory inside an urban cluster that is more than 10 miles and less than or equal to 35 miles from an urbanized area.'
      },
      {
        'index': 33,
        'value': 'Town: Remote: Territory inside an urban cluster that is more than 35 miles of an urbanized area.'
      },
      {
        'index': 41,
        'value': 'Rural: Fringe: Census-defined rural territory that is less than or equal to 5 miles from an urbanized area, as well as rural territory that is less than or equal to 2.5 miles from an urban cluster.'
      },
      {
        'index': 42,
        'value': 'Rural: Distant: Census-defined rural territory that is more than 5 miles but less than or equal to 25 miles from an urbanized area, as well as rural territory that is more than 2.5 miles but less than or equal to 10 miles from an urban cluster.'
      },
      {
        'index': 43,
        'value': 'Rural: Remote: Census-defined rural territory that is more than 25 miles from an urbanized area and is also more than 10 miles from an urban cluster.'
      }
    ];
  };


  //acl

  //every worker can create new entries
  CollegeSchema.statics.canCreate = function (user) {
    return (user && user.hasRole('worker')) ? true : false;
  };

  //worker can read his entries
  //supervisor can read all entries
  CollegeSchema.methods.canRead = function (user) {
    if (user.hasRole('supervisor')) {
      return true;
    } else {
      return (user._id === this.creatorId  && user.hasRole('worker'));
    }
  };

  //worker can edit entry, if it is not approved
  //supervisor can edit every entry
  CollegeSchema.methods.canWrite = function (user) {
    if (user.hasRole('supervisor')) {
      return true;
    } else {
      return (user._id === this.creatorId  && user.hasRole('worker') && !this.isApproved);
    }
  };

  //worker fetch only his entries, supervisor - fetch all entries!
  CollegeSchema.statics.getForUser = function (user, parameters, callback) {
    if(!parameters){
      parameters={};
    }
    if (user && user._id) {
      if (user.hasRole('supervisor')) {
        parameters.creatorId = user._id;
        this.find(parameters,callback);
      } else {
        if(user.hasRole('worker')){
          parameters.creatorId = user._id;
          this.find(parameters,callback);
        } else {
          callback(null,[]);
        }
      }
    } else {
      callback(null,[]);
    }
  };

  //user without permission can do nothing!

  return kabam.mongoConnection.model('Colleges', CollegeSchema);
};