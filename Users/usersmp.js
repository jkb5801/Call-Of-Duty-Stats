function home(data) {
  data = JSON.stringify(data);
  data = JSON.parse(data);

  var homestats = {
    username: data.username,
    level: JSON.stringify(data.level),
    recordLongestWinStreak: JSON.stringify(
      data.lifetime.all.properties.recordLongestWinStreak
    ),
    accuracy: JSON.stringify(data.lifetime.all.properties.accuracy),
    bestScore: JSON.stringify(data.lifetime.all.properties.bestScore),
    currentWinStreak: JSON.stringify(
      data.lifetime.all.properties.currentWinStreak
    ),
    totalGamesPlayed: data.lifetime.all.properties.totalGamesPlayed,
    losses: data.lifetime.all.properties.losses,
    wins: data.lifetime.all.properties.wins,
    score: data.lifetime.all.properties.score,
    winLossRatio: data.lifetime.all.properties.winLossRatio,
    kdRatio: data.lifetime.all.properties.kdRatio,
    scorePerGame: data.lifetime.all.properties.scorePerGame,
    recordKillsInAMatch: data.lifetime.all.properties.recordKillsInAMatch,
    bestKD: data.lifetime.all.properties.bestKD,
    kills: data.lifetime.all.properties.kills,
    deaths: data.lifetime.all.properties.deaths,
    recordKillStreak: data.lifetime.all.properties.recordKillStreak,
    scorePerMinute: data.lifetime.all.properties.scorePerMinute,
    bestDeaths: data.lifetime.all.properties.bestDeaths,
  };

  return homestats;
}
function modeStats(data) {
  data = JSON.stringify(data);
  data = JSON.parse(data);
  var modestats = [
    {
      name: "Domination",
      iconName: "flag",
      data: {
        kills: `Kills: ${data.lifetime.mode.dom.properties.kills}`,
        score: `Score: ${JSON.stringify(
          data.lifetime.mode.dom.properties.score
        )}`,
        deaths: `Deaths: ${JSON.stringify(
          data.lifetime.mode.dom.properties.deaths
        )}`,
        kd: `K/D: ${JSON.stringify(data.lifetime.mode.dom.properties.kdRatio)}`,
        captures: `Captures: ${JSON.stringify(
          data.lifetime.mode.dom.properties.captures
        )}`,
        defends: `Defends: ${JSON.stringify(
          data.lifetime.mode.dom.properties.defends
        )}`,
        spm: `Score per Minute: ${JSON.stringify(
          data.lifetime.mode.dom.properties.scorePerMinute
        )}`,
      },
    },
    {
      name: "Ground War",
      iconName: "globe-americas",
      data: {
        kills: `Kills: ${JSON.stringify(
          data.lifetime.mode.war.properties.kills
        )}`,
        score: `Score: ${JSON.stringify(
          data.lifetime.mode.war.properties.score
        )}`,
        deaths: `Deaths: ${JSON.stringify(
          data.lifetime.mode.war.properties.deaths
        )}`,
        kd: `K/D: ${JSON.stringify(data.lifetime.mode.war.properties.kdRatio)}`,
        spm: `Score per Minute: ${JSON.stringify(
          data.lifetime.mode.war.properties.scorePerMinute
        )}`,
      },
    },
    {
      name: "Headquarters",
      iconName: "home",
      data: {
        kills: `Kills: ${data.lifetime.mode.hq.properties.kills}`,
        score: `Score: ${JSON.stringify(
          data.lifetime.mode.hq.properties.score
        )}`,
        deaths: `Deaths: ${JSON.stringify(
          data.lifetime.mode.hq.properties.deaths
        )}`,
        kd: `K/D: ${JSON.stringify(data.lifetime.mode.hq.properties.kdRatio)}`,
        captures: `Captures: ${JSON.stringify(
          data.lifetime.mode.hq.properties.captures
        )}`,
        defends: `Defends: ${JSON.stringify(
          data.lifetime.mode.hq.properties.defends
        )}`,
        spm: `Score per Minute: ${JSON.stringify(
          data.lifetime.mode.hq.properties.scorePerMinute
        )}`,
      },
    },
    {
      name: "Kill Confirmed",
      iconName: "tags",
      data: {
        kills: `Kills: ${data.lifetime.mode.conf.properties.kills}`,
        score: `Score: ${JSON.stringify(
          data.lifetime.mode.conf.properties.score
        )}`,
        deaths: `Deaths: ${JSON.stringify(
          data.lifetime.mode.conf.properties.deaths
        )}`,
        kd: `K/D: ${JSON.stringify(
          data.lifetime.mode.conf.properties.kdRatio
        )}`,
        captures: `Confirms: ${JSON.stringify(
          data.lifetime.mode.conf.properties.confirms
        )}`,
        defends: `Denies: ${JSON.stringify(
          data.lifetime.mode.conf.properties.denies
        )}`,
        spm: `Score per Minute: ${JSON.stringify(
          data.lifetime.mode.conf.properties.scorePerMinute
        )}`,
      },
    },
    {
      name: "Search & Destroy",
      iconName: "bomb",
      data: {
        kills: `Kills: ${data.lifetime.mode.sd.properties.kills}`,
        score: `Score: ${JSON.stringify(
          data.lifetime.mode.sd.properties.score
        )}`,
        deaths: `Deaths: ${JSON.stringify(
          data.lifetime.mode.sd.properties.deaths
        )}`,
        kd: `K/D: ${JSON.stringify(data.lifetime.mode.sd.properties.kdRatio)}`,
        captures: `Plants: ${JSON.stringify(
          data.lifetime.mode.sd.properties.plants
        )}`,
        defends: `Defuses: ${JSON.stringify(
          data.lifetime.mode.sd.properties.defuses
        )}`,
        spm: `Score per Minute: ${JSON.stringify(
          data.lifetime.mode.sd.properties.scorePerMinute
        )}`,
      },
    },
    {
      name: "Cyber Attack",
      iconName: "server",
      data: {
        kills: `Kills: ${data.lifetime.mode.cyber.properties.kills}`,
        score: `Score: ${JSON.stringify(
          data.lifetime.mode.cyber.properties.score
        )}`,
        deaths: `Deaths: ${JSON.stringify(
          data.lifetime.mode.cyber.properties.deaths
        )}`,
        kd: `K/D: ${JSON.stringify(
          data.lifetime.mode.cyber.properties.kdRatio
        )}`,
        captures: `Plants: ${JSON.stringify(
          data.lifetime.mode.cyber.properties.plants
        )}`,
        defends: `Revives: ${JSON.stringify(
          data.lifetime.mode.cyber.properties.revives
        )}`,
        spm: `Score per Minute: ${JSON.stringify(
          data.lifetime.mode.cyber.properties.scorePerMinute
        )}`,
      },
    },
  ];
  return modestats;
}
function weaponStats(data) {
  data = JSON.stringify(data);
  data = JSON.parse(data);
  var weapons = [
    {
      class: "Sniper",
      name: "AX-50",
      data: {
        kills: `Kills: ${JSON.stringify(
          data.lifetime.itemData.weapon_sniper.iw8_sn_alpha50.properties.kills
        )}`,
        headshots: `Headshots: ${JSON.stringify(
          data.lifetime.itemData.weapon_sniper.iw8_sn_alpha50.properties
            .headshots
        )}`,
        kd: `K/D: ${JSON.stringify(
          data.lifetime.itemData.weapon_sniper.iw8_sn_alpha50.properties.kdRatio
        )}`,
        accuracy: `Accuracy: ${JSON.stringify(
          data.lifetime.itemData.weapon_sniper.iw8_sn_alpha50.properties
            .accuracy
        )}`,
      },
    },
    {
      class: "Sniper",
      name: "HDR",
      data: {
        kills: `Kills: ${JSON.stringify(
          data.lifetime.itemData.weapon_sniper.iw8_sn_hdromeo.properties.kills
        )}`,
        headshots: `Headshots: ${JSON.stringify(
          data.lifetime.itemData.weapon_sniper.iw8_sn_hdromeo.properties
            .headshots
        )}`,
        kd: `K/D: ${JSON.stringify(
          data.lifetime.itemData.weapon_sniper.iw8_sn_hdromeo.properties.kdRatio
        )}`,
        accuracy: `Accuracy: ${JSON.stringify(
          data.lifetime.itemData.weapon_sniper.iw8_sn_hdromeo.properties
            .accuracy
        )}`,
      },
    },
    {
      class: "Sniper",
      name: "Draganov",
      data: {
        kills: `Kills: ${JSON.stringify(
          data.lifetime.itemData.weapon_sniper.iw8_sn_delta.properties.kills
        )}`,
        headshots: `Headshots: ${JSON.stringify(
          data.lifetime.itemData.weapon_sniper.iw8_sn_delta.properties.headshots
        )}`,
        kd: `K/D: ${JSON.stringify(
          data.lifetime.itemData.weapon_sniper.iw8_sn_delta.properties.kdRatio
        )}`,
        accuracy: `Accuracy: ${JSON.stringify(
          data.lifetime.itemData.weapon_sniper.iw8_sn_delta.properties.accuracy
        )}`,
      },
    },
    {
      class: "Marksman",
      name: "MK2 Carbine",
      data: {
        kills: `Kills: ${JSON.stringify(
          data.lifetime.itemData.weapon_marksman.iw8_sn_sbeta.properties.kills
        )}`,
        headshots: `Headshots: ${JSON.stringify(
          data.lifetime.itemData.weapon_marksman.iw8_sn_sbeta.properties
            .headshots
        )}`,
        kd: `K/D: ${JSON.stringify(
          data.lifetime.itemData.weapon_marksman.iw8_sn_sbeta.properties.kdRatio
        )}`,
        accuracy: `Accuracy: ${JSON.stringify(
          data.lifetime.itemData.weapon_marksman.iw8_sn_sbeta.properties
            .accuracy
        )}`,
      },
    },
    {
      class: "Marksman",
      name: "Kar98k",
      data: {
        kills: `Kills: ${JSON.stringify(
          data.lifetime.itemData.weapon_marksman.iw8_sn_kilo98.properties.kills
        )}`,
        headshots: `Headshots: ${JSON.stringify(
          data.lifetime.itemData.weapon_marksman.iw8_sn_kilo98.properties
            .headshots
        )}`,
        kd: `K/D: ${JSON.stringify(
          data.lifetime.itemData.weapon_marksman.iw8_sn_kilo98.properties
            .kdRatio
        )}`,
        accuracy: `Accuracy: ${JSON.stringify(
          data.lifetime.itemData.weapon_marksman.iw8_sn_kilo98.properties
            .accuracy
        )}`,
      },
    },
    {
      class: "Marksman",
      name: "EBR-14",
      data: {
        kills: `Kills: ${JSON.stringify(
          data.lifetime.itemData.weapon_marksman.iw8_sn_mike14.properties.kills
        )}`,
        headshots: `Headshots: ${JSON.stringify(
          data.lifetime.itemData.weapon_marksman.iw8_sn_mike14.properties
            .headshots
        )}`,
        kd: `K/D: ${JSON.stringify(
          data.lifetime.itemData.weapon_marksman.iw8_sn_mike14.properties
            .kdRatio
        )}`,
        accuracy: `Accuracy: ${JSON.stringify(
          data.lifetime.itemData.weapon_marksman.iw8_sn_mike14.properties
            .accuracy
        )}`,
      },
    },
    {
      class: "Marksman",
      name: "SKS",
      data: {
        kills: `Kills: ${JSON.stringify(
          data.lifetime.itemData.weapon_marksman.iw8_sn_sksierra.properties
            .kills
        )}`,
        headshots: `Headshots: ${JSON.stringify(
          data.lifetime.itemData.weapon_marksman.iw8_sn_sksierra.properties
            .headshots
        )}`,
        kd: `K/D: ${JSON.stringify(
          data.lifetime.itemData.weapon_marksman.iw8_sn_sksierra.properties
            .kdRatio
        )}`,
        accuracy: `Accuracy: ${JSON.stringify(
          data.lifetime.itemData.weapon_marksman.iw8_sn_sksierra.properties
            .accuracy
        )}`,
      },
    },
    {
      class: "AR",
      name: "Fal",
      data: {
        kills: `Kills: ${JSON.stringify(
          data.lifetime.itemData.weapon_assault_rifle.iw8_ar_falima.properties
            .kills
        )}`,
        headshots: `Headshots: ${JSON.stringify(
          data.lifetime.itemData.weapon_assault_rifle.iw8_ar_falima.properties
            .headshots
        )}`,
        kd: `K/D: ${JSON.stringify(
          data.lifetime.itemData.weapon_assault_rifle.iw8_ar_falima.properties
            .kdRatio
        )}`,
        accuracy: `Accuracy: ${JSON.stringify(
          data.lifetime.itemData.weapon_assault_rifle.iw8_ar_falima.properties
            .accuracy
        )}`,
      },
    },
    {
      class: "AR",
      name: "RAM-7",
      data: {
        kills: `Kills: ${JSON.stringify(
          data.lifetime.itemData.weapon_assault_rifle.iw8_ar_tango21.properties
            .kills
        )}`,
        headshots: `Headshots: ${JSON.stringify(
          data.lifetime.itemData.weapon_assault_rifle.iw8_ar_tango21.properties
            .headshots
        )}`,
        kd: `K/D: ${JSON.stringify(
          data.lifetime.itemData.weapon_assault_rifle.iw8_ar_tango21.properties
            .kdRatio
        )}`,
        accuracy: `Accuracy: ${JSON.stringify(
          data.lifetime.itemData.weapon_assault_rifle.iw8_ar_tango21.properties
            .accuracy
        )}`,
      },
    },
    {
      class: "AR",
      name: "M4A1",
      data: {
        kills: `Kills: ${JSON.stringify(
          data.lifetime.itemData.weapon_assault_rifle.iw8_ar_mike4.properties
            .kills
        )}`,
        headshots: `Headshots: ${JSON.stringify(
          data.lifetime.itemData.weapon_assault_rifle.iw8_ar_mike4.properties
            .headshots
        )}`,
        kd: `K/D: ${JSON.stringify(
          data.lifetime.itemData.weapon_assault_rifle.iw8_ar_mike4.properties
            .kdRatio
        )}`,
        accuracy: `Accuracy: ${JSON.stringify(
          data.lifetime.itemData.weapon_assault_rifle.iw8_ar_mike4.properties
            .accuracy
        )}`,
      },
    },
    {
      class: "AR",
      name: "FR 5.56",
      data: {
        kills: `Kills: ${JSON.stringify(
          data.lifetime.itemData.weapon_assault_rifle.iw8_ar_falpha.properties
            .kills
        )}`,
        headshots: `Headshots: ${JSON.stringify(
          data.lifetime.itemData.weapon_assault_rifle.iw8_ar_falpha.properties
            .headshots
        )}`,
        kd: `K/D: ${JSON.stringify(
          data.lifetime.itemData.weapon_assault_rifle.iw8_ar_falpha.properties
            .kdRatio
        )}`,
        accuracy: `Accuracy: ${JSON.stringify(
          data.lifetime.itemData.weapon_assault_rifle.iw8_ar_falpha.properties
            .accuracy
        )}`,
      },
    },
    {
      class: "AR",
      name: "M13",
      data: {
        kills: `Kills: ${JSON.stringify(
          data.lifetime.itemData.weapon_assault_rifle.iw8_ar_mcharlie.properties
            .kills
        )}`,
        headshots: `Headshots: ${JSON.stringify(
          data.lifetime.itemData.weapon_assault_rifle.iw8_ar_mcharlie.properties
            .headshots
        )}`,
        kd: `K/D: ${JSON.stringify(
          data.lifetime.itemData.weapon_assault_rifle.iw8_ar_mcharlie.properties
            .kdRatio
        )}`,
        accuracy: `Accuracy: ${JSON.stringify(
          data.lifetime.itemData.weapon_assault_rifle.iw8_ar_mcharlie.properties
            .accuracy
        )}`,
      },
    },
    {
      class: "AR",
      name: "AK-47",
      data: {
        kills: `Kills: ${JSON.stringify(
          data.lifetime.itemData.weapon_assault_rifle.iw8_ar_akilo47.properties
            .kills
        )}`,
        headshots: `Headshots: ${JSON.stringify(
          data.lifetime.itemData.weapon_assault_rifle.iw8_ar_akilo47.properties
            .headshots
        )}`,
        kd: `K/D: ${JSON.stringify(
          data.lifetime.itemData.weapon_assault_rifle.iw8_ar_akilo47.properties
            .kdRatio
        )}`,
        accuracy: `Accuracy: ${JSON.stringify(
          data.lifetime.itemData.weapon_assault_rifle.iw8_ar_akilo47.properties
            .accuracy
        )}`,
      },
    },
    {
      class: "AR",
      name: "Kilo-141",
      data: {
        kills: `Kills: ${JSON.stringify(
          data.lifetime.itemData.weapon_assault_rifle.iw8_ar_kilo433.properties
            .kills
        )}`,
        headshots: `Headshots: ${JSON.stringify(
          data.lifetime.itemData.weapon_assault_rifle.iw8_ar_kilo433.properties
            .headshots
        )}`,
        kd: `K/D: ${JSON.stringify(
          data.lifetime.itemData.weapon_assault_rifle.iw8_ar_kilo433.properties
            .kdRatio
        )}`,
        accuracy: `Accuracy: ${JSON.stringify(
          data.lifetime.itemData.weapon_assault_rifle.iw8_ar_kilo433.properties
            .accuracy
        )}`,
      },
    },
    {
      class: "AR",
      name: "FN Scar 17",
      data: {
        kills: `Kills: ${JSON.stringify(
          data.lifetime.itemData.weapon_assault_rifle.iw8_ar_scharlie.properties
            .kills
        )}`,
        headshots: `Headshots: ${JSON.stringify(
          data.lifetime.itemData.weapon_assault_rifle.iw8_ar_scharlie.properties
            .headshots
        )}`,
        kd: `K/D: ${JSON.stringify(
          data.lifetime.itemData.weapon_assault_rifle.iw8_ar_scharlie.properties
            .kdRatio
        )}`,
        accuracy: `Accuracy: ${JSON.stringify(
          data.lifetime.itemData.weapon_assault_rifle.iw8_ar_scharlie.properties
            .accuracy
        )}`,
      },
    },
    {
      class: "AR",
      name: "Oden",
      data: {
        kills: `Kills: ${JSON.stringify(
          data.lifetime.itemData.weapon_assault_rifle.iw8_ar_asierra12
            .properties.kills
        )}`,
        headshots: `Headshots: ${JSON.stringify(
          data.lifetime.itemData.weapon_assault_rifle.iw8_ar_asierra12
            .properties.headshots
        )}`,
        kd: `K/D: ${JSON.stringify(
          data.lifetime.itemData.weapon_assault_rifle.iw8_ar_asierra12
            .properties.kdRatio
        )}`,
        accuracy: `Accuracy: ${JSON.stringify(
          data.lifetime.itemData.weapon_assault_rifle.iw8_ar_asierra12
            .properties.accuracy
        )}`,
      },
    },
    {
      class: "AR",
      name: "Grau 5.56",
      data: {
        kills: `Kills: ${JSON.stringify(
          data.lifetime.itemData.weapon_assault_rifle.iw8_ar_sierra552
            .properties.kills
        )}`,
        headshots: `Headshots: ${JSON.stringify(
          data.lifetime.itemData.weapon_assault_rifle.iw8_ar_sierra552
            .properties.headshots
        )}`,
        kd: `K/D: ${JSON.stringify(
          data.lifetime.itemData.weapon_assault_rifle.iw8_ar_sierra552
            .properties.kdRatio
        )}`,
        accuracy: `Accuracy: ${JSON.stringify(
          data.lifetime.itemData.weapon_assault_rifle.iw8_ar_sierra552
            .properties.accuracy
        )}`,
      },
    },
    {
      class: "SMG",
      name: "MP7",
      data: {
        kills: `Kills: ${JSON.stringify(
          data.lifetime.itemData.weapon_smg.iw8_sm_mpapa7.properties.kills
        )}`,
        headshots: `Headshots: ${JSON.stringify(
          data.lifetime.itemData.weapon_smg.iw8_sm_mpapa7.properties.headshots
        )}`,
        kd: `K/D: ${JSON.stringify(
          data.lifetime.itemData.weapon_smg.iw8_sm_mpapa7.properties.kdRatio
        )}`,
        accuracy: `Accuracy: ${JSON.stringify(
          data.lifetime.itemData.weapon_smg.iw8_sm_mpapa7.properties.accuracy
        )}`,
      },
    },
    {
      class: "SMG",
      name: "AUG",
      data: {
        kills: `Kills: ${JSON.stringify(
          data.lifetime.itemData.weapon_smg.iw8_sm_augolf.properties.kills
        )}`,
        headshots: `Headshots: ${JSON.stringify(
          data.lifetime.itemData.weapon_smg.iw8_sm_augolf.properties.headshots
        )}`,
        kd: `K/D: ${JSON.stringify(
          data.lifetime.itemData.weapon_smg.iw8_sm_augolf.properties.kdRatio
        )}`,
        accuracy: `Accuracy: ${JSON.stringify(
          data.lifetime.itemData.weapon_smg.iw8_sm_augolf.properties.accuracy
        )}`,
      },
    },
    {
      class: "SMG",
      name: "P90",
      data: {
        kills: `Kills: ${JSON.stringify(
          data.lifetime.itemData.weapon_smg.iw8_sm_papa90.properties.kills
        )}`,
        headshots: `Headshots: ${JSON.stringify(
          data.lifetime.itemData.weapon_smg.iw8_sm_papa90.properties.headshots
        )}`,
        kd: `K/D: ${JSON.stringify(
          data.lifetime.itemData.weapon_smg.iw8_sm_papa90.properties.kdRatio
        )}`,
        accuracy: `Accuracy: ${JSON.stringify(
          data.lifetime.itemData.weapon_smg.iw8_sm_papa90.properties.accuracy
        )}`,
      },
    },
    {
      class: "SMG",
      name: "MP-5",
      data: {
        kills: `Kills: ${JSON.stringify(
          data.lifetime.itemData.weapon_smg.iw8_sm_mpapa5.properties.kills
        )}`,
        headshots: `Headshots: ${JSON.stringify(
          data.lifetime.itemData.weapon_smg.iw8_sm_mpapa5.properties.headshots
        )}`,
        kd: `K/D: ${JSON.stringify(
          data.lifetime.itemData.weapon_smg.iw8_sm_mpapa5.properties.kdRatio
        )}`,
        accuracy: `Accuracy: ${JSON.stringify(
          data.lifetime.itemData.weapon_smg.iw8_sm_mpapa5.properties.accuracy
        )}`,
      },
    },
    {
      class: "SMG",
      name: "Striker 45",
      data: {
        kills: `Kills: ${JSON.stringify(
          data.lifetime.itemData.weapon_smg.iw8_sm_smgolf45.properties.kills
        )}`,
        headshots: `Headshots: ${JSON.stringify(
          data.lifetime.itemData.weapon_smg.iw8_sm_smgolf45.properties.headshots
        )}`,
        kd: `K/D: ${JSON.stringify(
          data.lifetime.itemData.weapon_smg.iw8_sm_smgolf45.properties.kdRatio
        )}`,
        accuracy: `Accuracy: ${JSON.stringify(
          data.lifetime.itemData.weapon_smg.iw8_sm_smgolf45.properties.accuracy
        )}`,
      },
    },
    {
      class: "SMG",
      name: "PP19 Bizon",
      data: {
        kills: `Kills: ${JSON.stringify(
          data.lifetime.itemData.weapon_smg.iw8_sm_beta.properties.kills
        )}`,
        headshots: `Headshots: ${JSON.stringify(
          data.lifetime.itemData.weapon_smg.iw8_sm_beta.properties.headshots
        )}`,
        kd: `K/D: ${JSON.stringify(
          data.lifetime.itemData.weapon_smg.iw8_sm_beta.properties.kdRatio
        )}`,
        accuracy: `Accuracy: ${JSON.stringify(
          data.lifetime.itemData.weapon_smg.iw8_sm_beta.properties.accuracy
        )}`,
      },
    },
    {
      class: "SMG",
      name: "Uzi",
      data: {
        kills: `Kills: ${JSON.stringify(
          data.lifetime.itemData.weapon_smg.iw8_sm_uzulu.properties.kills
        )}`,
        headshots: `Headshots: ${JSON.stringify(
          data.lifetime.itemData.weapon_smg.iw8_sm_uzulu.properties.headshots
        )}`,
        kd: `K/D: ${JSON.stringify(
          data.lifetime.itemData.weapon_smg.iw8_sm_uzulu.properties.kdRatio
        )}`,
        accuracy: `Accuracy: ${JSON.stringify(
          data.lifetime.itemData.weapon_smg.iw8_sm_uzulu.properties.accuracy
        )}`,
      },
    },
    {
      class: "Pistol",
      name: ".357",
      data: {
        kills: `Kills: ${JSON.stringify(
          data.lifetime.itemData.weapon_pistol.iw8_pi_cpapa.properties.kills
        )}`,
        headshots: `Headshots: ${JSON.stringify(
          data.lifetime.itemData.weapon_pistol.iw8_pi_cpapa.properties.headshots
        )}`,
        kd: `K/D: ${JSON.stringify(
          data.lifetime.itemData.weapon_pistol.iw8_pi_cpapa.properties.kdRatio
        )}`,
        accuracy: `Accuracy: ${JSON.stringify(
          data.lifetime.itemData.weapon_pistol.iw8_pi_cpapa.properties.accuracy
        )}`,
      },
    },
    {
      class: "Pistol",
      name: "Renetti",
      data: {
        kills: `Kills: ${JSON.stringify(
          data.lifetime.itemData.weapon_pistol.iw8_pi_mike9.properties.kills
        )}`,
        headshots: `Headshots: ${JSON.stringify(
          data.lifetime.itemData.weapon_pistol.iw8_pi_mike9.properties.headshots
        )}`,
        kd: `K/D: ${JSON.stringify(
          data.lifetime.itemData.weapon_pistol.iw8_pi_mike9.properties.kdRatio
        )}`,
        accuracy: `Accuracy: ${JSON.stringify(
          data.lifetime.itemData.weapon_pistol.iw8_pi_mike9.properties.accuracy
        )}`,
      },
    },
    {
      class: "Pistol",
      name: "1911",
      data: {
        kills: `Kills: ${JSON.stringify(
          data.lifetime.itemData.weapon_pistol.iw8_pi_mike1911.properties.kills
        )}`,
        headshots: `Headshots: ${JSON.stringify(
          data.lifetime.itemData.weapon_pistol.iw8_pi_mike1911.properties
            .headshots
        )}`,
        kd: `K/D: ${JSON.stringify(
          data.lifetime.itemData.weapon_pistol.iw8_pi_mike1911.properties
            .kdRatio
        )}`,
        accuracy: `Accuracy: ${JSON.stringify(
          data.lifetime.itemData.weapon_pistol.iw8_pi_mike1911.properties
            .accuracy
        )}`,
      },
    },
    {
      class: "Pistol",
      name: "X16",
      data: {
        kills: `Kills: ${JSON.stringify(
          data.lifetime.itemData.weapon_pistol.iw8_pi_golf21.properties.kills
        )}`,
        headshots: `Headshots: ${JSON.stringify(
          data.lifetime.itemData.weapon_pistol.iw8_pi_golf21.properties
            .headshots
        )}`,
        kd: `K/D: ${JSON.stringify(
          data.lifetime.itemData.weapon_pistol.iw8_pi_golf21.properties.kdRatio
        )}`,
        accuracy: `Accuracy: ${JSON.stringify(
          data.lifetime.itemData.weapon_pistol.iw8_pi_golf21.properties.accuracy
        )}`,
      },
    },
    {
      class: "Pistol",
      name: ".50 GS",
      data: {
        kills: `Kills: ${JSON.stringify(
          data.lifetime.itemData.weapon_pistol.iw8_pi_decho.properties.kills
        )}`,
        headshots: `Headshots: ${JSON.stringify(
          data.lifetime.itemData.weapon_pistol.iw8_pi_decho.properties.headshots
        )}`,
        kd: `K/D: ${JSON.stringify(
          data.lifetime.itemData.weapon_pistol.iw8_pi_decho.properties.kdRatio
        )}`,
        accuracy: `Accuracy: ${JSON.stringify(
          data.lifetime.itemData.weapon_pistol.iw8_pi_decho.properties.accuracy
        )}`,
      },
    },
    {
      class: "Pistol",
      name: "M19",
      data: {
        kills: `Kills: ${JSON.stringify(
          data.lifetime.itemData.weapon_pistol.iw8_pi_papa320.properties.kills
        )}`,
        headshots: `Headshots: ${JSON.stringify(
          data.lifetime.itemData.weapon_pistol.iw8_pi_papa320.properties
            .headshots
        )}`,
        kd: `K/D: ${JSON.stringify(
          data.lifetime.itemData.weapon_pistol.iw8_pi_papa320.properties.kdRatio
        )}`,
        accuracy: `Accuracy: ${JSON.stringify(
          data.lifetime.itemData.weapon_pistol.iw8_pi_papa320.properties
            .accuracy
        )}`,
      },
    },
    {
      class: "LMG",
      name: "M91",
      data: {
        kills: `Kills: ${JSON.stringify(
          data.lifetime.itemData.weapon_lmg.iw8_lm_kilo121.properties.kills
        )}`,
        headshots: `Headshots: ${JSON.stringify(
          data.lifetime.itemData.weapon_lmg.iw8_lm_kilo121.properties.headshots
        )}`,
        kd: `K/D: ${JSON.stringify(
          data.lifetime.itemData.weapon_lmg.iw8_lm_kilo121.properties.kdRatio
        )}`,
        accuracy: `Accuracy: ${JSON.stringify(
          data.lifetime.itemData.weapon_lmg.iw8_lm_kilo121.properties.accuracy
        )}`,
      },
    },
    {
      class: "LMG",
      name: "PKM",
      data: {
        kills: `Kills: ${JSON.stringify(
          data.lifetime.itemData.weapon_lmg.iw8_lm_pkilo.properties.kills
        )}`,
        headshots: `Headshots: ${JSON.stringify(
          data.lifetime.itemData.weapon_lmg.iw8_lm_pkilo.properties.headshots
        )}`,
        kd: `K/D: ${JSON.stringify(
          data.lifetime.itemData.weapon_lmg.iw8_lm_pkilo.properties.kdRatio
        )}`,
        accuracy: `Accuracy: ${JSON.stringify(
          data.lifetime.itemData.weapon_lmg.iw8_lm_pkilo.properties.accuracy
        )}`,
      },
    },
    {
      class: "LMG",
      name: "Holger-26",
      data: {
        kills: `Kills: ${JSON.stringify(
          data.lifetime.itemData.weapon_lmg.iw8_lm_mgolf36.properties.kills
        )}`,
        headshots: `Headshots: ${JSON.stringify(
          data.lifetime.itemData.weapon_lmg.iw8_lm_mgolf36.properties.headshots
        )}`,
        kd: `K/D: ${JSON.stringify(
          data.lifetime.itemData.weapon_lmg.iw8_lm_mgolf36.properties.kdRatio
        )}`,
        accuracy: `Accuracy: ${JSON.stringify(
          data.lifetime.itemData.weapon_lmg.iw8_lm_mgolf36.properties.accuracy
        )}`,
      },
    },
    {
      class: "LMG",
      name: "SA-87",
      data: {
        kills: `Kills: ${JSON.stringify(
          data.lifetime.itemData.weapon_lmg.iw8_lm_lima86.properties.kills
        )}`,
        headshots: `Headshots: ${JSON.stringify(
          data.lifetime.itemData.weapon_lmg.iw8_lm_lima86.properties.headshots
        )}`,
        kd: `K/D: ${JSON.stringify(
          data.lifetime.itemData.weapon_lmg.iw8_lm_lima86.properties.kdRatio
        )}`,
        accuracy: `Accuracy: ${JSON.stringify(
          data.lifetime.itemData.weapon_lmg.iw8_lm_lima86.properties.accuracy
        )}`,
      },
    },
    {
      class: "LMG",
      name: "MG34",
      data: {
        kills: `Kills: ${JSON.stringify(
          data.lifetime.itemData.weapon_lmg.iw8_lm_mgolf34.properties.kills
        )}`,
        headshots: `Headshots: ${JSON.stringify(
          data.lifetime.itemData.weapon_lmg.iw8_lm_mgolf34.properties.headshots
        )}`,
        kd: `K/D: ${JSON.stringify(
          data.lifetime.itemData.weapon_lmg.iw8_lm_mgolf34.properties.kdRatio
        )}`,
        accuracy: `Accuracy: ${JSON.stringify(
          data.lifetime.itemData.weapon_lmg.iw8_lm_mgolf34.properties.accuracy
        )}`,
      },
    },
    {
      class: "Shotgun",
      name: "725",
      data: {
        kills: `Kills: ${JSON.stringify(
          data.lifetime.itemData.weapon_shotgun.iw8_sh_charlie725.properties
            .kills
        )}`,
        headshots: `Headshots: ${JSON.stringify(
          data.lifetime.itemData.weapon_shotgun.iw8_sh_charlie725.properties
            .headshots
        )}`,
        kd: `K/D: ${JSON.stringify(
          data.lifetime.itemData.weapon_shotgun.iw8_sh_charlie725.properties
            .kdRatio
        )}`,
        accuracy: `Accuracy: ${JSON.stringify(
          data.lifetime.itemData.weapon_shotgun.iw8_sh_charlie725.properties
            .accuracy
        )}`,
      },
    },
    {
      class: "Shotgun",
      name: "Origin 12",
      data: {
        kills: `Kills: ${JSON.stringify(
          data.lifetime.itemData.weapon_shotgun.iw8_sh_oscar12.properties.kills
        )}`,
        headshots: `Headshots: ${JSON.stringify(
          data.lifetime.itemData.weapon_shotgun.iw8_sh_oscar12.properties
            .headshots
        )}`,
        kd: `K/D: ${JSON.stringify(
          data.lifetime.itemData.weapon_shotgun.iw8_sh_oscar12.properties
            .kdRatio
        )}`,
        accuracy: `Accuracy: ${JSON.stringify(
          data.lifetime.itemData.weapon_shotgun.iw8_sh_oscar12.properties
            .accuracy
        )}`,
      },
    },
    {
      class: "Shotgun",
      name: "Model 680",
      data: {
        kills: `Kills: ${JSON.stringify(
          data.lifetime.itemData.weapon_shotgun.iw8_sh_romeo870.properties.kills
        )}`,
        headshots: `Headshots: ${JSON.stringify(
          data.lifetime.itemData.weapon_shotgun.iw8_sh_romeo870.properties
            .headshots
        )}`,
        kd: `K/D: ${JSON.stringify(
          data.lifetime.itemData.weapon_shotgun.iw8_sh_romeo870.properties
            .kdRatio
        )}`,
        accuracy: `Accuracy: ${JSON.stringify(
          data.lifetime.itemData.weapon_shotgun.iw8_sh_romeo870.properties
            .accuracy
        )}`,
      },
    },
    {
      class: "Shotgun",
      name: "R9-0",
      data: {
        kills: `Kills: ${JSON.stringify(
          data.lifetime.itemData.weapon_shotgun.iw8_sh_dpapa12.properties.kills
        )}`,
        headshots: `Headshots: ${JSON.stringify(
          data.lifetime.itemData.weapon_shotgun.iw8_sh_dpapa12.properties
            .headshots
        )}`,
        kd: `K/D: ${JSON.stringify(
          data.lifetime.itemData.weapon_shotgun.iw8_sh_dpapa12.properties
            .kdRatio
        )}`,
        accuracy: `Accuracy: ${JSON.stringify(
          data.lifetime.itemData.weapon_shotgun.iw8_sh_dpapa12.properties
            .accuracy
        )}`,
      },
    },
  ]; //endARRAY
  return weapons;
}
function warzoneStats(data) {
  data = JSON.stringify(data);
  data= JSON.parse(data);

  var warzoneStats = [
    {
      data: {
        label: "Wins",

        kills: `${JSON.stringify(data.lifetime.mode.br_all.properties.wins)}`,
      },
    },
    {
      data: {
        label: "Kills",

        kills: `${JSON.stringify(data.lifetime.mode.br_all.properties.kills)}`,
      },
    },
    {
      data: {
        label: "Deaths",

        kills: `${JSON.stringify(data.lifetime.mode.br_all.properties.deaths)}`,
      },
    },
    {
      data: {
        label: "K/D Ratio",

        kills: `${JSON.stringify(data.lifetime.mode.br_all.properties.kdRatio)}`,
      },
    },
    {
      data: {
        label: "Downs",

        kills: `${JSON.stringify(data.lifetime.mode.br_all.properties.downs)}`,
      },
    },
    {
      data: {
        label: "Top Ten",

        kills: `${JSON.stringify(data.lifetime.mode.br_all.properties.topTen)}`,
      },
    },
    {
      data: {
        label: "Top Five",

        kills: `${JSON.stringify(data.lifetime.mode.br_all.properties.topFive)}`,
      },
    },
    {
      data: {
        label: "Score",

        kills: `${JSON.stringify(data.lifetime.mode.br_all.properties.score)}`,
      },
    },
    {
      data: {
        label: "Score per Minute",

        kills: `${JSON.stringify(data.lifetime.mode.br_all.properties.scorePerMinute)}`,
      },
    },
  ];
  return warzoneStats;
}

module.exports = {
  home: home,
  modeStats: modeStats,
  weaponStats: weaponStats,
  warzoneStats: warzoneStats,
};
