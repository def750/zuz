const OSUROOMS_DISCS = [
  { id: 'materialize_anything', texture: 'anubasu_anubasu__materialize_anything', description: 'anubasu-anubasu - Materialize Anything' },
  { id: 'blastix_riotz', texture: 'camellia__blastix_riotz', description: 'Camellia - Blastix Riotz' },
  { id: 'cocodrilo_music', texture: 'cocodrilo_music', description: 'Cocodrilo Music' },
  { id: 'end_time', texture: 'cres__end_time', description: 'Cres. - End Time' },
  { id: 'joe_fight_joe_fight_remix', texture: 'dj_myosuke__joe_fight_joe_fight_remix', description: 'Dj Myosuke - Joe Fight (Joe Fight Remix)' },
  { id: 'daisycutter', texture: 'etia__daisycutter', description: 'ETIA. - Daisycutter' },
  { id: 'eden', texture: 'gram__eden', description: 'Gram - Eden' },
  { id: 'mendes', texture: 'humanoid__mendes', description: 'Humanoid - Mendes' },
  { id: 'makiba', texture: 'jea_dj_sharpnel__makiba', description: 'Jea (DJ Sharpnel) - Makiba' },
  { id: 'strong_280', texture: 'katagiri__strong_280', description: 'Katagiri - STRONG 280' },
  { id: 'bookmaker', texture: 'kobaryo__bookmaker', description: 'Kobaryo - Bookmaker' },
  { id: 'dangeroooous_jungle_extended', texture: 'laur__dangeroooous_jungle_extended', description: 'Laur - DANGEROOOOUS JUNGLE (Extended)' },
  { id: 'bol', texture: 'lv4_feat_iwasaki_chiaki__bol', description: 'LV.4 feat.岩﨑千明 - B.O.L.' },
  { id: 'resonant', texture: 'nekomata_master_and_camellia_w_huer__resonant', description: 'Nekomata Master & Camellia w/ "HuΣeR" - Resonant' },
  { id: 'podsumowanie_pierwszego_dnia_rozgrywek_grupowych_mp4k', texture: 'podsumowanie_pierwszego_dnia_rozgrywek_grupowych_mp4k', description: 'Podsumowanie pierwszego dnia rozgrywek grupowych MP4K' },
  { id: '666', texture: 'roughsketch__666', description: 'Roughsketch - 666' },
  { id: 'far_in_the_blue_sky', texture: 'saikoro__far_in_the_blue_sky', description: 'Saikoro - Far in the blue sky' },
  { id: 'aegleseeker', texture: 'silentroom_vs_frums__aegleseeker', description: 'Silentroom vs Frums - Aegleseeker' },
  { id: 'triumph_and_regret', texture: 'typemars__triumph_and_regret', description: 'Typemars - Triumph and Regret' },
  { id: 'decoy', texture: 'yooh__decoy', description: 'Yooh - Decoy' },
]

StartupEvents.registry('item', event => {
  for (const disc of OSUROOMS_DISCS) {
    event.create(`osurooms:${disc.id}`)
      .unstackable()
      .rarity('rare')
      .texture(`osurooms:item/${disc.id}`)
      .jukeboxPlayable(`osurooms:${disc.id}`, false)
      .tooltip(Text.gray(disc.description))
      .tag('minecraft:music_discs')
  }
})
