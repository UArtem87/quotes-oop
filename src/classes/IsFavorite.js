class IsFavorite {
  constructor(favBtn, toggleFavorite) {
    this.favoriteBtn = document.getElementById(favBtn);
    this.toggleFavorite = toggleFavorite;
    this.init();
  }

  showStar(isFavorite) {
    this.favoriteBtn.classList.remove('favorite', 'unfavorite');
    const isFav = isFavorite ? 'favorite' : 'unfavorite';
    this.favoriteBtn.classList.add(isFav);
  }

  init() {
    this.favoriteBtn.addEventListener('click', () => this.toggleFavorite());
  }
}

export default IsFavorite;
