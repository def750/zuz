const OSUROOMS_DISCS = [
  { id: 'materialize_anything', texture: 'anubasu_anubasu__materialize_anything' },
  { id: 'blastix_riotz', texture: 'camellia__blastix_riotz' },
  { id: 'cocodrilo_music', texture: 'cocodrilo_music' },
  { id: 'end_time', texture: 'cres__end_time' },
  { id: 'joe_fight_joe_fight_remix', texture: 'dj_myosuke__joe_fight_joe_fight_remix' },
  { id: 'daisycutter', texture: 'etia__daisycutter' },
  { id: 'eden', texture: 'gram__eden' },
  { id: 'mendes', texture: 'humanoid__mendes' },
  { id: 'makiba', texture: 'jea_dj_sharpnel__makiba' },
  { id: 'strong_280', texture: 'katagiri__strong_280' },
  { id: 'bookmaker', texture: 'kobaryo__bookmaker' },
  { id: 'dangeroooous_jungle_extended', texture: 'laur__dangeroooous_jungle_extended' },
  { id: 'bol', texture: 'lv4_feat_iwasaki_chiaki__bol' },
  { id: 'resonant', texture: 'nekomata_master_and_camellia_w_huer__resonant' },
  { id: 'podsumowanie_pierwszego_dnia_rozgrywek_grupowych_mp4k', texture: 'podsumowanie_pierwszego_dnia_rozgrywek_grupowych_mp4k' },
  { id: '666', texture: 'roughsketch__666' },
  { id: 'far_in_the_blue_sky', texture: 'saikoro__far_in_the_blue_sky' },
  { id: 'aegleseeker', texture: 'silentroom_vs_frums__aegleseeker' },
  { id: 'triumph_and_regret', texture: 'typemars__triumph_and_regret' },
  { id: 'decoy', texture: 'yooh__decoy' },
]

StartupEvents.registry('item', event => {
  for (const disc of OSUROOMS_DISCS) {
    event.create(`osurooms:${disc.id}`)
      .unstackable()
      .rarity('rare')
      .texture(`osuroomsradio:item/${disc.texture}`)
      .tag('minecraft:music_discs')
  }
})
