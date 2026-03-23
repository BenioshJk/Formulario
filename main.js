// SUKISH.ENT - MAIN JS

document.addEventListener('DOMContentLoaded', function() {
    initLoader();
    initNavigation();
    initParticles();
    initRevealAnimations();
    initCountUp();
    
    if (document.getElementById('featuredArtists')) {
        renderFeaturedArtists();
    }
    
    if (document.getElementById('releasesSlider')) {
        renderReleases();
    }
    
    if (document.getElementById('artistsGrid')) {
        renderAllArtists();
        initFilters();
    }
    
    if (document.getElementById('albumsGrid')) {
        renderAllAlbums();
    }
    
    if (document.getElementById('artistDetail')) {
        renderArtistDetail();
    }
});

// LOADER
function initLoader() {
    var loader = document.getElementById('loader');
    if (!loader) return;
    
    setTimeout(function() {
        loader.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }, 2000);
}

// NAVIGATION
function initNavigation() {
    var nav = document.getElementById('mainNav');
    var menuBtn = document.getElementById('menuBtn');
    var mobileMenu = document.getElementById('mobileMenu');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 80) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
    
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', function() {
            menuBtn.classList.toggle('active');
            mobileMenu.classList.toggle('show');
        });
        
        var mobileLinks = mobileMenu.querySelectorAll('.mobile-link');
        mobileLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                menuBtn.classList.remove('active');
                mobileMenu.classList.remove('show');
            });
        });
    }
}

// PARTICLES
function initParticles() {
    var container = document.getElementById('particles');
    if (!container) return;
    
    for (var i = 0; i < 25; i++) {
        var particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 10 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        container.appendChild(particle);
    }
}

// REVEAL ANIMATIONS
function initRevealAnimations() {
    var elements = document.querySelectorAll('.artist-card, .release-card, .stat-item, .value-card, .about-block, .info-card, .section-header');
    
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry, index) {
            if (entry.isIntersecting) {
                setTimeout(function() {
                    entry.target.classList.add('visible');
                }, index * 80);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -30px 0px'
    });
    
    elements.forEach(function(el) {
        el.classList.add('reveal');
        observer.observe(el);
    });
}

// COUNT UP
function initCountUp() {
    var counters = document.querySelectorAll('.stat-number');
    
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                var target = entry.target;
                var countTo = parseInt(target.getAttribute('data-count'));
                animateCount(target, countTo);
                observer.unobserve(target);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(function(counter) {
        observer.observe(counter);
    });
}

function animateCount(element, target) {
    var duration = 2000;
    var start = 0;
    var startTime = null;
    
    function step(currentTime) {
        if (!startTime) startTime = currentTime;
        var progress = Math.min((currentTime - startTime) / duration, 1);
        var easeOut = 1 - Math.pow(1 - progress, 3);
        var current = Math.floor(start + (target - start) * easeOut);
        element.textContent = current;
        
        if (progress < 1) {
            requestAnimationFrame(step);
        } else {
            element.textContent = target;
        }
    }
    
    requestAnimationFrame(step);
}

// RENDER ARTISTS
function renderFeaturedArtists() {
    var container = document.getElementById('featuredArtists');
    if (!container) return;
    
    var featured = artists.slice(0, 4);
    var html = '';
    
    featured.forEach(function(artist, index) {
        html += '<div class="artist-card reveal" style="transition-delay: ' + (index * 0.1) + 's">' +
            '<img src="' + artist.image + '" alt="' + artist.name + '" class="artist-image">' +
            '<div class="artist-info">' +
                '<span class="artist-type">' + artist.typeLabel + '</span>' +
                '<h3 class="artist-name">' + artist.name + '</h3>' +
                '<span class="artist-debut">Debut: ' + artist.debut + '</span>' +
            '</div>' +
            '<div class="artist-hover">' +
                '<a href="artist-detail.html?id=' + artist.id + '" class="artist-link">' +
                    'VIEW PROFILE <span>→</span>' +
                '</a>' +
            '</div>' +
        '</div>';
    });
    
    container.innerHTML = html;
}

function renderAllArtists(filter) {
    var container = document.getElementById('artistsGrid');
    if (!container) return;
    
    filter = filter || 'all';
    var filteredArtists = artists;
    
    if (filter !== 'all') {
        filteredArtists = artists.filter(function(a) {
            return a.type === filter;
        });
    }
    
    var html = '';
    
    filteredArtists.forEach(function(artist, index) {
        html += '<div class="artist-card reveal visible" data-type="' + artist.type + '">' +
            '<img src="' + artist.image + '" alt="' + artist.name + '" class="artist-image">' +
            '<div class="artist-info">' +
                '<span class="artist-type">' + artist.typeLabel + '</span>' +
                '<h3 class="artist-name">' + artist.name + '</h3>' +
                '<span class="artist-debut">Debut: ' + artist.debut + '</span>' +
            '</div>' +
            '<div class="artist-hover">' +
                '<a href="artist-detail.html?id=' + artist.id + '" class="artist-link">' +
                    'VIEW PROFILE <span>→</span>' +
                '</a>' +
            '</div>' +
        '</div>';
    });
    
    container.innerHTML = html;
}

// FILTERS
function initFilters() {
    var tabs = document.querySelectorAll('.filter-tab');
    
    tabs.forEach(function(tab) {
        tab.addEventListener('click', function() {
            tabs.forEach(function(t) {
                t.classList.remove('active');
            });
            tab.classList.add('active');
            
            var filter = tab.getAttribute('data-filter');
            renderAllArtists(filter);
        });
    });
}

// RENDER RELEASES
function renderReleases() {
    var container = document.getElementById('releasesSlider');
    if (!container) return;
    
    var html = '';
    
    albums.forEach(function(album, index) {
        html += '<div class="release-card reveal" style="transition-delay: ' + (index * 0.08) + 's">' +
            '<img src="' + album.cover + '" alt="' + album.title + '" class="release-cover">' +
            '<h4 class="release-title">' + album.title + '</h4>' +
            '<p class="release-artist">' + album.artist + '</p>' +
            '<span class="release-date">' + album.releaseDate + '</span>' +
        '</div>';
    });
    
    container.innerHTML = html;
}

// RENDER ALL ALBUMS
function renderAllAlbums() {
    var container = document.getElementById('albumsGrid');
    if (!container) return;
    
    var html = '';
    
    albums.forEach(function(album, index) {
        html += '<div class="release-card reveal visible">' +
            '<img src="' + album.cover + '" alt="' + album.title + '" class="release-cover">' +
            '<h4 class="release-title">' + album.title + '</h4>' +
            '<p class="release-artist">' + album.artist + '</p>' +
            '<span class="release-date">' + album.releaseDate + ' · ' + album.type + '</span>' +
        '</div>';
    });
    
    container.innerHTML = html;
}

// ARTIST DETAIL
function renderArtistDetail() {
    var container = document.getElementById('artistDetail');
    if (!container) return;
    
    var urlParams = new URLSearchParams(window.location.search);
    var artistId = urlParams.get('id') || 'nova';
    
    var artist = artists.find(function(a) {
        return a.id === artistId;
    });
    
    if (!artist) {
        container.innerHTML = '<div class="container"><p>Artist not found</p></div>';
        return;
    }
    
    var artistAlbum = albums.find(function(a) {
        return a.artistId === artistId;
    });
    
    document.title = artist.name + ' — Sukish.ENT';
    
    var html = '<section class="artist-detail-hero">' +
        '<div class="container">' +
            '<div class="artist-detail-grid">' +
                '<div class="artist-detail-image-container">' +
                    '<img src="' + artist.image + '" alt="' + artist.name + '" class="artist-detail-image">' +
                '</div>' +
                '<div class="artist-detail-info">' +
                    '<span class="artist-detail-type">' + artist.typeLabel + '</span>' +
                    '<h1 class="artist-detail-name glitch" data-text="' + artist.name + '">' + artist.name + '</h1>' +
                    '<p class="artist-detail-bio">' + artist.bio + '</p>' +
                    '<div class="artist-meta">' +
                        '<div class="meta-item">' +
                            '<span class="meta-label">DEBUT</span>' +
                            '<span class="meta-value">' + artist.debutDate + '</span>' +
                        '</div>' +
                        '<div class="meta-item">' +
                            '<span class="meta-label">MEMBERS</span>' +
                            '<span class="meta-value">' + artist.members + '</span>' +
                        '</div>' +
                        '<div class="meta-item">' +
                            '<span class="meta-label">FANDOM</span>' +
                            '<span class="meta-value">' + artist.fandom + '</span>' +
                        '</div>' +
                        '<div class="meta-item">' +
                            '<span class="meta-label">YEARS ACTIVE</span>' +
                            '<span class="meta-value">' + (2024 - artist.debut) + '+</span>' +
                        '</div>' +
                    '</div>' +
                    '<a href="artists.html" class="btn btn-secondary">' +
                        '<span>BACK TO ARTISTS</span>' +
                    '</a>' +
                '</div>' +
            '</div>' +
        '</div>' +
    '</section>' +
    '<section class="artist-album-section">' +
        '<div class="container">' +
            '<div class="section-header" style="text-align: left;">' +
                '<span class="section-tag">// DISCOGRAPHY</span>' +
                '<h2 class="section-title">ALBUMS</h2>' +
            '</div>' +
            '<div class="albums-grid">';
    
    if (artistAlbum) {
        html += '<div class="release-card visible">' +
            '<img src="' + artistAlbum.cover + '" alt="' + artistAlbum.title + '" class="release-cover">' +
            '<h4 class="release-title">' + artistAlbum.title + '</h4>' +
            '<p class="release-artist">' + artistAlbum.type + '</p>' +
            '<span class="release-date">' + artistAlbum.releaseDate + ' · ' + artistAlbum.tracks + ' tracks</span>' +
        '</div>';
    } else {
        html += '<p>No albums available</p>';
    }
    
    html += '</div></div></section>';
    
    container.innerHTML = html;
}