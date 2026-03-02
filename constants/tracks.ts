const tracks = [
  {
    id: 1,
    artist: "Andres Canalla",
    album: "Siguiendo la luna",
    credits: "Keyboards & Recording Engineer",
    link: "https://open.spotify.com/intl-es/album/4qAuMcyTVTeHCw04gyPBnc?si=xVbYVthhRby_46b7_6843g",
    image:
      "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02b4bb2a586780493137eca777",
  },
  {
    id: 2,
    artist: "Aurum",
    album: "Lado B Vol.1",
    credits: "Mastering Engineer",
    link: "https://open.spotify.com/intl-es/album/0CHFuGADx0vhkv2rQFMU55?si=HEvbUQDpRgKXtVcrsRYDyA",
    image:
      "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0253f7808bb992a4d0314320d0",
  },
  {
    id: 3,
    artist: "BMC",
    album: "Vol.1",
    credits: "Composer",
    link: "https://open.spotify.com/intl-es/album/77CZtwrKINzMZNcTEbDirc?si=nOHZOA2GR9u9gGxjThZQSA",
    image:
      "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0242826dca9e0230136800e72f",
  },
  {
    id: 4,
    artist: "Cabezon Key",
    credits: "Music Producer, Recording & Mixing Engineer",
    link: "https://open.spotify.com/intl-es/album/50bmsuIn5rND8NHrrv0p5x?si=kSNvyEmtSj6HAchGRFXMhQ",
    image:
      "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02dbc68a821810149fe2dfce77",
  },
  {
    id: 5,
    artist: "Carne la Banda",
    album: "Haciendo Nada",
    credits: "Mixing & Mastering Engineer",
    link: "https://open.spotify.com/intl-es/track/6njj15dQhJoFfKsCgs6i0l?si=992f83de22b34925",
    image:
      "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0202889ac950ecbe7ceb2e7e91",
  },
  {
    id: 6,
    artist: "El Incandescente Say Hey Kid",
    album: "Le chilla en el pecho un alacrán",
    credits: "Mixing & Mastering Engineer",
    link: "https://open.spotify.com/intl-es/track/151Q7X78UnBo1Tk0d75BZU?si=ea707319ef594b1a",
    image:
      "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02cf07f0785eaed3d8a20d8e4c",
  },
  {
    id: 7,
    artist: "Grand Mal",
    album: "Eso cuando arruinas todo",
    credits: "Mixing & Mastering Engineer",
    link: "https://open.spotify.com/intl-es/track/3ntWxfVjjdoJsNsqGB6t83?si=16c434af23074346",
    image:
      "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0271733b52dc14e42b6dec00d8",
  },
  {
    id: 8,
    artist: "La Banda de los Corazones",
    album: "Karma",
    credits: "Mixing & Mastering Engineer",
    link: "https://open.spotify.com/intl-es/track/64r3RWhIOm0AovXP0MXqHU?si=359f3dcef77248a9",
    image:
      "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e028eecf85170e04155b233d43f",
  },
  {
    id: 9,
    artist: "La Niña del Cabo",
    album: "Bogomila EP",
    credits: "Music Producer, Recording & Mixing Engineer",
    link: "https://open.spotify.com/intl-es/album/1gP1ucQLneWxVbHrR3biU5?si=NSyN1TVBSEec0glZDQfX1w",
    image:
      "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02f3764e02855f53ba7893e515",
  },
  {
    id: 10,
    artist: "Lau Velacor",
    album: "Musa Infeliz EP",
    credits: "Keyboards & Mixing Engineer",
    link: "https://open.spotify.com/intl-es/album/1nEbgTEY6oBXZtg2JI4P2Q?si=eEG3J_tfSYG6_AK7mQv80g",
    image:
      "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02bcc69d3fec9b28fe85d05797",
  },
  {
    id: 11,
    artist: "Mente Tetra",
    album: "Motocinema EP",
    credits: "Mixing Engineer",
    link: "https://open.spotify.com/intl-es/album/7srINlc3mkcXv0pIx8ONY8?si=wZDHH-_3SBmyXyeIcYlP6A",
    image:
      "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02ba0782130467badb457a7a72",
  },
  {
    id: 12,
    artist: "Modesto Galan",
    album: "9 Cuentos Destartalados EP",
    credits: "Mastering Engineer",
    link: "https://modestogalan.bandcamp.com/album/9-cuentos-destartalados?search_item_id%3D3703788494%26search_item_type%3Da%26search_match_part%3D%253F%26search_page_id%3D5143365625%26search_page_no%3D0%26search_rank%3D2=",
    image: "https://source.unsplash.com/600x600/?vinyl,record",
  },
  {
    id: 13,
    artist: "Ruido Nocturno",
    album: "Suenan las campanas",
    credits: "Mixing & Mastering Engineer",
    link: "https://open.spotify.com/intl-es/album/3VXC8dRB0I11q5HmCVnD3n?si=GNNAXP1KS-CkwmvlGqtaKQ",
    image:
      "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02e86b570af93f5a4fef4e1cdb",
  },
  {
    id: 14,
    artist: "Separata",
    album: "Bruma",
    credits: "Mastering Engineer",
    link: "https://open.spotify.com/intl-es/track/54AVMwbSpAkroqt37r67XW?si=6dccbc2ec3944675",
    image:
      "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e023a90148fa397ff08bcede5bc",
  },
  {
    id: 15,
    artist: "Sueño con Cuervos",
    album: "Cesura EP",
    credits: "Music Producer & Mixing Engineer",
    link: "https://open.spotify.com/intl-es/album/5Z91Ryi1tMVTRBRIlnKuil?si=ywNmxR0pShKoyIUId9deug",
    image:
      "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02916a71c8355f16323b96e2d7",
  },
  {
    id: 16,
    artist: "The California Sun",
    credits: "Keyboards & Mixing Engineer",
    link: "https://open.spotify.com/intl-es/track/5KJqSFxUGaWWSs0nlByEFx?si=88961159b8ae4661",
    image:
      "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e0284de5262ffb25b99dd652a67",
  },
  {
    id: 17,
    artist: "Tribop",
    album: "Vol.1",
    credits: "Music Producer, Recording & Mixing Engineer",
    link: "https://tribopccs.bandcamp.com/album/vol-1",
    image: "https://source.unsplash.com/600x600/?jazz,band",
  },
  {
    id: 18,
    artist: "Vila",
    album: "Especialidad",
    credits: "Mixing & Mastering Engineer",
    link: "https://open.spotify.com/intl-es/track/3pomkUt45rHlrspzP4Bwil?si=16ac38b66ad2474e",
    image:
      "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0273c540bb0f4ad416584dd8c7",
  },
  {
    id: 19,
    artist: "YABocc",
    credits: "Mixing & Mastering Engineer — Dolby Atmos",
    link: "https://music.apple.com/mx/playlist/d%C3%ADnamo-studio-atmos/pl.u-76oNko6tNA23XM",
    image: "https://source.unsplash.com/600x600/?atmos,surround",
  },
  {
    id: 20,
    artist: "Yatu",
    album: "En el bar 61",
    credits: "Keyboards, Mixing & Mastering Engineer",
    link: "https://drive.google.com/drive/folders/1fxwts5guMUa2oIRBtbgctuOxno9-PmJM?usp=drive_link",
    image: "https://source.unsplash.com/600x600/?bar,jazz",
  },
];

export default tracks;
