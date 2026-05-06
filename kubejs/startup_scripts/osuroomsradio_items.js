const OSUROOMS_RADIO_DISCS = [
  'anubasu_anubasu__materialize_anything',
  'camellia__blastix_riotz',
  'cocodrilo_music',
  'cres__end_time',
  'dj_myosuke__joe_fight_joe_fight_remix',
  'etia__daisycutter',
  'gram__eden',
  'humanoid__mendes',
  'jea_dj_sharpnel__makiba',
  'katagiri__strong_280',
  'kobaryo__bookmaker',
  'laur__dangeroooous_jungle_extended',
  'lv4_feat_iwasaki_chiaki__bol',
  'nekomata_master_and_camellia_w_huer__resonant',
  'podsumowanie_pierwszego_dnia_rozgrywek_grupowych_mp4k',
  'roughsketch__666',
  'saikoro__far_in_the_blue_sky',
  'silentroom_vs_frums__aegleseeker',
  'typemars__triumph_and_regret',
  'yooh__decoy',
]

StartupEvents.registry('item', event => {
  for (const disc of OSUROOMS_RADIO_DISCS) {
    event.create(`osuroomsradio:${disc}`)
      .unstackable()
      .rarity('rare')
      .texture(`osuroomsradio:item/${disc}`)
      .tag('minecraft:music_discs')
  }
})