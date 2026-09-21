const SHEET_ID = '1plC3GqhrRPrIFClW9ewcDpaJ0ixEGG2OQPVVxWP050U'
const SHEET_NAME = 'Sheet1'

function doGet() {
  return ContentService
    .createTextOutput('Google Sheets API is working!')
    .setMimeType(ContentService.MimeType.TEXT)
}

function doPost(e) {
  try {
    console.log(JSON.stringify(e.parameter));
    
    const spreadsheet = SpreadsheetApp.openById(SHEET_ID)
    const sheet = spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.getSheets()[0]

    const destination = (e && e.parameter && e.parameter.destination) || ''
    const name = (e && e.parameter && e.parameter.name) || ''
    const email = (e && e.parameter && e.parameter.email) || ''
    const phone = (e && e.parameter && e.parameter.phone) || ''

    if (!destination || !name || !email || !phone) {
      return createResponse(false, 'Please fill all required fields.')
    }

    // Columns: Destinations | Name | Email ID | Phone
    sheet.appendRow([destination, name, email, phone])

    return createResponse(true, 'Form submitted successfully.')
  } catch (error) {
    return createResponse(false, error.message)
  }
}

function createResponse(success, message) {
  return ContentService
    .createTextOutput(JSON.stringify({
      success: success,
      message: message
    }))
    .setMimeType(ContentService.MimeType.JSON)
}
