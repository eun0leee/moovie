import page from './page.js';

export default class extends page {
  constructor() {
    super();
    this.setTitle('Search');
  }

  async getHtml() {
    return `
    <form action="" method="post">
    <input
      class="search-input"
      type="text"
      placeholder="Search for the movie title"
      minlength="3"
      maxlength="30"
      required
    />
    <div class="filter">
      <select class="select-count" name="count">
        <option value="1" selected="selected">10</option>
        <option value="2">20</option>
        <option value="3">30</option>
      </select>
      <select class="select-year" name="year">
        <option valuee="" selected>All</option>
      </select>
      <button class="search-btn" type="submit">Search</button>
    </div>
  </form>
  <!----------results---------->
  <div class="results">
    <div class="beforeType">
      <img
        src="https://user-images.githubusercontent.com/90189513/222353175-2ee467f1-aedf-4148-a7df-42e8d17cc075.gif"
        alt="waiting for your action"
      />
      <p>please type...!</p>
    </div>
    <div class="coffee">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
        `;
  }
}
