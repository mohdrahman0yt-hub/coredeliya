// Paste your deployed Google Apps Script Web App URL here.
// It must look like: https://script.google.com/macros/s/XXXX/exec
// Do NOT paste the Google Sheet edit link.
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzOodYiUSK1XDGsnlW9AxelxkCrwFBiohT3nePHr_ylhzKRvR4l_sZK0SC6GWFCZXwo/exec'

export async function submitLead({ destination, name, email,phone }) {
  if (
    !GOOGLE_SCRIPT_URL ||
    GOOGLE_SCRIPT_URL.includes('https://script.google.com/macros/s/AKfycbzpnQA3s5nHb5yUBrGGOipGPF7AErHYxJu5cog0CxxvZ8g9ATxl5MjgHZeipZ5u8uUt/exec')
  ) {
    throw new Error('Google Apps Script Web App URL is not configured yet.')
  }

  if (GOOGLE_SCRIPT_URL.includes('docs.google.com/spreadsheets')) {
    throw new Error('Paste the Apps Script Web App URL, not the Google Sheet link.')
  }

  const formData = new URLSearchParams()
  formData.append('destination', destination)
  formData.append('name', name)
  formData.append('email', email)
  formData.append('phone', phone)

  await fetch(GOOGLE_SCRIPT_URL, {
    method: 'POST',
    body: formData,
    mode: 'no-cors'
  })
}
