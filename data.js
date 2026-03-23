// ========================================
// SUKISH.ENT - DATA
// ========================================

const artists = [
    {
        id: 'nova',
        name: 'NOVA',
        type: 'solo',
        typeLabel: 'SOLO ARTIST',
        debut: 2001,
        debutDate: 'March 15, 2001',
        bio: 'NOVA debuted as Sukish.ENT\'s first solo artist, pioneering the company\'s signature sound. Known for powerful vocals and dynamic performances, she has become one of the most influential figures in K-Pop history.',
        members: 1,
        fandom: 'STARS',
        image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&h=800&fit=crop',
        color: '#00ff88'
    },
    {
        id: 'rex',
        name: 'RE:X',
        type: 'solo',
        typeLabel: 'SOLO ARTIST',
        debut: 2002,
        debutDate: 'July 22, 2002',
        bio: 'RE:X brought a new edge to Sukish.ENT with his bold concepts and experimental sound. His debut broke records and established the company\'s reputation for innovation.',
        members: 1,
        fandom: 'REBELS',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop',
        color: '#00ff41'
    },
    {
        id: 'vortex',
        name: 'VORTEX',
        type: 'group',
        typeLabel: 'GROUP (5 MEMBERS)',
        debut: 2003,
        debutDate: 'September 10, 2003',
        bio: 'VORTEX emerged as the first group from Sukish.ENT, featuring five members with distinct personalities. Their synchronized performances and complex concepts redefined K-Pop choreography.',
        members: 5,
        fandom: 'VORTEXIAN',
        image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=800&fit=crop',
        color: '#00cc6a'
    },
    {
        id: 'kyra',
        name: 'KYRA',
        type: 'solo',
        typeLabel: 'SOLO ARTIST',
        debut: 2004,
        debutDate: 'February 28, 2004',
        bio: 'KYRA debuted as a soloist with a unique blend of R&B and electronic music. Her soulful voice and artistic vision have earned her critical acclaim worldwide.',
        members: 1,
        fandom: 'KYRSTALS',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=800&fit=crop',
        color: '#00ff88'
    },
    {
        id: 'blkout',
        name: 'BLKOUT',
        type: 'duo',
        typeLabel: 'DUO',
        debut: 2005,
        debutDate: 'May 5, 2005',
        bio: 'BLKOUT is a dynamic duo known for their powerful rap performances and intense stage presence. They pioneered the hip-hop sound within Sukish.ENT.',
        members: 2,
        fandom: 'BLACKOUT',
        image: 'https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?w=600&h=800&fit=crop',
        color: '#00ff41'
    },
    {
        id: 'eclipse',
        name: 'ECLIPSE',
        type: 'group',
        typeLabel: 'GROUP (4 MEMBERS)',
        debut: 2006,
        debutDate: 'November 20, 2006',
        bio: 'ECLIPSE debuted with a mystical concept that captivated audiences. Known for their harmonious vocals and ethereal aesthetics, they represent the artistic side of Sukish.ENT.',
        members: 4,
        fandom: 'ECLIPSERS',
        image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&h=800&fit=crop',
        color: '#00cc6a'
    },
    {
        id: 'synth',
        name: 'SYNTH',
        type: 'duo',
        typeLabel: 'DUO',
        debut: 2007,
        debutDate: 'August 14, 2007',
        bio: 'SYNTH is a mixed duo that blends electronic and acoustic sounds. Their experimental approach has pushed the boundaries of K-Pop music.',
        members: 2,
        fandom: 'WAVELENGTH',
        image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&h=800&fit=crop',
        color: '#00ff88'
    },
    {
        id: 'zara',
        name: 'ZARA',
        type: 'solo',
        typeLabel: 'SOLO ARTIST',
        debut: 2003,
        debutDate: 'December 1, 2003',
        bio: 'ZARA debuted with a bold concept and powerful dance skills. She has become known as one of the best performers of her generation.',
        members: 1,
        fandom: 'ZARITES',
        image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&h=800&fit=crop',
        color: '#00ff41'
    },
    {
        id: 'phantom',
        name: 'PHANTOM',
        type: 'group',
        typeLabel: 'GROUP (6 MEMBERS)',
        debut: 2005,
        debutDate: 'April 18, 2005',
        bio: 'PHANTOM debuted as a six-member group with a dark, mysterious concept. Their intense performances and complex narratives have created a devoted following.',
        members: 6,
        fandom: 'PHANTOMS',
        image: 'https://images.unsplash.com/photo-1504703395950-b89145a5425b?w=600&h=800&fit=crop',
        color: '#00cc6a'
    },
    {
        id: 'dual',
        name: 'DUAL',
        type: 'duo',
        typeLabel: 'DUO',
        debut: 2004,
        debutDate: 'October 30, 2004',
        bio: 'DUAL is a female duo known for their complementary vocals and elegant concepts. Their harmonies are considered among the best in the industry.',
        members: 2,
        fandom: 'DUALITY',
        image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&h=800&fit=crop',
        color: '#00ff88'
    }
];

const albums = [
    {
        id: 'nova-debut',
        title: 'GENESIS',
        artist: 'NOVA',
        artistId: 'nova',
        releaseDate: '2001.03.15',
        type: 'FULL ALBUM',
        tracks: 12,
        cover: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=400&h=400&fit=crop'
    },
    {
        id: 'rex-debut',
        title: 'REBELLION',
        artist: 'RE:X',
        artistId: 'rex',
        releaseDate: '2002.07.22',
        type: 'FULL ALBUM',
        tracks: 11,
        cover: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop'
    },
    {
        id: 'vortex-debut',
        title: 'ENTRY',
        artist: 'VORTEX',
        artistId: 'vortex',
        releaseDate: '2003.09.10',
        type: 'MINI ALBUM',
        tracks: 6,
        cover: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=400&fit=crop'
    },
    {
        id: 'kyra-debut',
        title: 'ETHEREAL',
        artist: 'KYRA',
        artistId: 'kyra',
        releaseDate: '2004.02.28',
        type: 'FULL ALBUM',
        tracks: 10,
        cover: 'https://images.unsplash.com/photo-1619983081563-430f63602796?w=400&h=400&fit=crop'
    },
    {
        id: 'blkout-debut',
        title: 'BLACKOUT',
        artist: 'BLKOUT',
        artistId: 'blkout',
        releaseDate: '2005.05.05',
        type: 'MINI ALBUM',
        tracks: 5,
        cover: 'https://images.unsplash.com/photo-1619983081593-e2ba5b543168?w=400&h=400&fit=crop'
    },
    {
        id: 'eclipse-debut',
        title: 'MOONRISE',
        artist: 'ECLIPSE',
        artistId: 'eclipse',
        releaseDate: '2006.11.20',
        type: 'FULL ALBUM',
        tracks: 13,
        cover: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=400&h=400&fit=crop'
    },
    {
        id: 'synth-debut',
        title: 'FREQUENCY',
        artist: 'SYNTH',
        artistId: 'synth',
        releaseDate: '2007.08.14',
        type: 'MINI ALBUM',
        tracks: 7,
        cover: 'https://images.unsplash.com/photo-1619983081877-89cf0e81756b?w=400&h=400&fit=crop'
    },
    {
        id: 'zara-debut',
        title: 'IGNITION',
        artist: 'ZARA',
        artistId: 'zara',
        releaseDate: '2003.12.01',
        type: 'FULL ALBUM',
        tracks: 11,
        cover: 'https://images.unsplash.com/photo-1619983081877-89cf0e81756b?w=400&h=400&fit=crop'
    },
    {
        id: 'phantom-debut',
        title: 'MANIFEST',
        artist: 'PHANTOM',
        artistId: 'phantom',
        releaseDate: '2005.04.18',
        type: 'FULL ALBUM',
        tracks: 14,
        cover: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop'
    },
    {
        id: 'dual-debut',
        title: 'MIRROR',
        artist: 'DUAL',
        artistId: 'dual',
        releaseDate: '2004.10.30',
        type: 'MINI ALBUM',
        tracks: 6,
        cover: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=400&h=400&fit=crop'
    }
];