const request = require('request')
const cheerio = require('cheerio')

Array.prototype.unique = function() {
  return Array.from(new Set(this));
}

const options = {
  url: `https://www.zocdoc.com/doctor/michael-raffinan-md-7115`,
}

request(options, (err, res, data) => {
  if (err) return console.log('Something\'s wrong: ', err)

  var doctor = {
    photo : '',
    prefix : '',
    name : '',
    degree : '',
    fullName : '',
    rating : '',
    title : '',
    details: {
      education : '',
      hospitalAffiliation : '',
      languages : '',
      awardsAndPublications : '',
      boardCertifications : '',
      networkInsurance : '',
      specialty : '',
      professionalStatement : ''
    },
    reasonVisit : '',
    officeLocations : '',
    sex : ''
  }
  const $ = cheerio.load(data)

  doctor.photo = $('.profile-photo').attr('src')
  var nameField = $('.profile-doctor-name h1').find("span")
  var title = $('.profile-doctor-name h2').text().trim()
  doctor.title = title
  var first = nameField.first().text().trim();
  var first_split = first.split(". ")
  var prefix = first_split[0] + '.'
  var name = first_split[1]
  var degree = nameField.last().text().trim().substring(2);
  //Full Name
  var fullName = `${prefix} ${name} ${degree}`
  doctor.prefix = prefix
  doctor.name = name
  doctor.degree = degree
  doctor.fullName = fullName

  //get rating
  var rating_string = $('.profile-header-rating').attr('class')
  var rating_split = rating_string.split('-')
  var rating = rating_split[rating_split.length-1].replace('_','.')
  doctor.rating = rating

  //get Sections
  var sections = []
  $('.section-set').each(function(i, elem) {
    var items = []
    $(this).find("li").each(function() {
      items.push($(this).text().trim())
    })
    let category = $(this).parent().parent().parent().find("p").first().text()
    switch(category) {
        case 'Education' :
            doctor.details.education = items
            break
        case 'Hospital Affiliations' :
            doctor.details.hospitalAffiliation = items
            break
        case 'Languages Spoken' :
            doctor.details.languages = items
            break
        case 'In-Network Insurances' :
            doctor.details.networkInsurance = items
            break
        case 'Specialties' :
            doctor.details.specialty = items
            break
        case 'Board Certifications' :
            doctor.details.boardCertifications = items
            break
        case 'Awards and Publications' :
            doctor.details.awardsAndPublications= items
            break
        default:
            break
    }
  });

   var professionalStatement = $('.profile-professional-statement').text().trim();
   doctor.details.professionalStatement = professionalStatement
//   //Office Locations
  var officeLocations = []
  $('.js-locations').find(".profile-location").each(function() {
    var address = $(this).text().trim().replace(/\s+/g,' ').trim()
    officeLocations.push(address)
  })
  doctor.officeLocations = officeLocations
  //reason vist
  $('.js-procedure-dropdown').find('option').each(function() {
      if($(this).attr('selected') == "selected") {
          doctor.reasonVisit = $(this).text().trim()
      }
  })
  //get gender
  let pos_gender = data.indexOf("gender")
  var string_gender = data.substring(pos_gender+9, pos_gender+14)
  var sex = string_gender.substring(0,string_gender.indexOf('"')) == "he" ? "Male" : "Female"//gender

  doctor.sex = sex

  console.log(doctor)

})