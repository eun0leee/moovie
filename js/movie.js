import page from './page.js';

export default class extends page {
  constructor() {
    super();
    this.setTitle('Movie');
  }

  async getHtml() {
    return `
            <h3>상세페이지</h3>
        `;
  }
}
