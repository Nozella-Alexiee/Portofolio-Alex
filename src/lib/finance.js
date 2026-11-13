const MONTHS = 12

export function simulate({ modal, monthly, rate, years }) {
  const monthlyRate = rate / 100 / MONTHS
  const totalMonths = Math.max(1, Math.round(years * MONTHS))
  let balance = modal
  let deposited = modal
  const series = [{ month: 0, year: 0, balance, deposited }]

  for (let month = 1; month <= totalMonths; month += 1) {
    balance = balance * (1 + monthlyRate) + monthly
    deposited += monthly
    if (month % MONTHS === 0) {
      series.push({ month, year: month / MONTHS, balance, deposited })
    }
  }

  if (series.length === 1) {
    series.push({ month: totalMonths, year: years, balance, deposited })
  }

  return {
    final: balance,
    deposited,
    interest: balance - deposited,
    series,
    years,
  }
}

export function formatCurrency(value, lang = 'id') {
  const locale = lang === 'en' ? 'en-US' : 'id-ID'
  return `Rp${Math.round(value).toLocaleString(locale)}`
}

export function formatCompact(value, lang = 'id') {
  const locale = lang === 'en' ? 'en-US' : 'id-ID'
  const formatted = new Intl.NumberFormat(locale, {
    notation: 'compact',
    maximumFractionDigits: value >= 1e9 ? 1 : 0,
  }).format(value)
  return `Rp${formatted.replace(/\s/g, '')}`
}

export function formatPlain(value, lang = 'id') {
  return Math.round(value).toLocaleString(lang === 'en' ? 'en-US' : 'id-ID')
}
