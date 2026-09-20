export const scrollToBookingForm = () => {
  const element =
    document.querySelector('#vacation-search .hero-search-card') ||
    document.getElementById('vacation-search')
  if (!element) return

  const header = document.querySelector('.site-header')
  const offset = (header?.offsetHeight || 118) + 20
  const top = element.getBoundingClientRect().top + window.scrollY - offset

  window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' })

  const wrapper = document.getElementById('vacation-search')
  wrapper?.classList.add('is-targeted')
  window.setTimeout(() => wrapper?.classList.remove('is-targeted'), 1800)
}
