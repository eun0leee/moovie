import page from './page.js';

export default class extends page {
  async getHtml() {
    return `
            <h3>상세페이지</h3>
        `;
  }
}
