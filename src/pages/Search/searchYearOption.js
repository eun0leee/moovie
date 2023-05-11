export const searchYearOption = (selectYear) => {
  let currentYear = new Date().getFullYear();
  for (let i = currentYear; i >= 1980; i--) {
    const optionYearEl = document.createElement('option');
    optionYearEl.value = i;
    optionYearEl.innerText = i;
    selectYear.append(optionYearEl);
  }
};
