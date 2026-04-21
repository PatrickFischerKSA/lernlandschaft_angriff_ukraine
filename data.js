const MODULES = [
  {
    id: "zarenreich",
    step: "1",
    title: "Vorgeschichte im Zarenreich",
    era: "18. Jahrhundert bis 1917",
    intro:
      "Diese Station beginnt bewusst lange vor 2022. Im Zentrum stehen ältere Deutungen und Machtansprüche: das Reden vom 'großen' und 'kleinen Bruder', die Kyjiver Rus', der Abbau ukrainischer Autonomie und die Annexion der Krim 1783.",
    goal:
      "Du kannst zeigen, welche Linien aus der Zarenzeit für den heutigen Krieg wichtig sind und wo einfache Geraden in die Irre führen.",
    route:
      "Schau zuerst die Folge zum Zarenreich. Danach nimmst du Terra X zur groben Ordnung und die Doku zum Grenzraum Ukraine für den Blickwechsel. Anschließend bearbeitest du die Zusatzchecks und die fünf Aufgaben.",
    teacherNote:
      "Die Station soll keine Gerade vom Zarenreich bis 2022 behaupten. Wichtig ist: imperiale Muster erkennen, Brüche benennen und ukrainische Eigenständigkeit nicht im Schatten russischer Deutungen verschwinden lassen.",
    kappelerFrame: {
      title: "Vom 'großen Bruder' zur imperialen Herrschaft",
      intro:
        "Die Zitate sind hier keine Merksätze, sondern Arbeitsaufträge: Prüfe an den Filmen, wie aus Nähe, Schutzbehauptung und Herrschaft ein ungleiches Verhältnis wurde.",
      steps: [
        {
          quote: "\"Eintracht und Streit in der Familie\"",
          page: "S. 19",
          meaning:
            "Die Familienmetapher klingt zunächst nach Nähe. Im Unterricht prüfen wir aber, ob sie Gleichrangigkeit zeigt oder Ungleichheit verdeckt.",
          filmTask:
            "Achte in den Filmen darauf, wer als handelnd erscheint: Russland, die Ukraine oder beide.",
          sourceIds: ["r-tsar-dropbox", "r-tsar-borderland"]
        },
        {
          quote: "\"Die gemeinsame Wiege der Kyjiver Rus'\"",
          page: "S. 28",
          meaning:
            "Die Kyjiver Rus' ist kein einfacher Besitznachweis. Sie wird später politisch benutzt, um Nähe oder Anspruch zu behaupten.",
          filmTask:
            "Notiere, wo die Filme erklären und wo sie zeigen, dass Geschichte politisch gedeutet wird.",
          sourceIds: ["r-tsar-dropbox", "r-tsar-terrax"]
        },
        {
          quote: "\"1783 folgte die Annexion der Krim.\"",
          page: "S. 77",
          meaning:
            "Die Krim ist nicht nur ein Ort auf der Karte. An ihr zeigen sich Militär, Symbolpolitik und imperiale Erinnerung besonders deutlich.",
          filmTask:
            "Sammle im Krim-Video zwei Gründe, warum die Krim für Russland und die Ukraine politisch so aufgeladen ist.",
          sourceIds: ["r-tsar-arte-crimea", "r-tsar-dropbox"]
        },
        {
          quote: "\"War die Ukraine eine Kolonie Russlands?\"",
          page: "S. 130",
          meaning:
            "Die Frage ist bewusst offen. Es geht nicht um ein Etikett, sondern um Merkmale von Abhängigkeit, Herrschaft und ukrainischer Eigenständigkeit.",
          filmTask:
            "Suche in den Filmen je ein Beispiel für russische Herrschaft und für ukrainische Eigenständigkeit.",
          sourceIds: ["r-tsar-dropbox", "r-tsar-borderland", "r-tsar-britannica"]
        }
      ]
    },
    teacherToolkit: {
      duration: "40 bis 50 Minuten",
      socialForms: [
        "Einzelarbeit mit gesicherter Chronologie im Tandem",
        "Kurze Plenumsphase zur Frage, was imperiale Herrschaft historisch bedeutet",
        "Transferantwort als schriftliche Einzelaufgabe"
      ],
      assessmentFocus: [
        "2022 nicht als isolierten Startpunkt behandeln",
        "Imperiale Herrschaft, Russifizierung und strategische Räume unterscheiden",
        "Kontinuität nie mit historischer Unvermeidlichkeit verwechseln"
      ],
      misconceptions: [
        "Der Krieg habe mit Geschichte nichts zu tun",
        "Die Ukraine sei historisch immer einfach Teil Russlands gewesen",
        "Imperiale Vorgeschichte erkläre die Gegenwart schon vollständig"
      ],
      product:
        "Kurzer Deutungstext dazu, welche imperiale Vorgeschichte für das Verständnis des heutigen Krieges wichtig ist.",
      extension:
        "Diskussion darüber, ob historische Ansprüche politische Gegenwartsgewalt legitimieren dürfen."
    },
    visual: {
      src: "https://i.ytimg.com/vi/CWhoALa6bTU/hqdefault.jpg",
      alt: "Vorschaubild zum historischen Überblick über den Ukraine-Konflikt"
    },
    miniQuestions: [
      {
        id: "mq-zarenreich-1",
        title: "Warum nicht erst 2022?",
        type: "short-text",
        challenge: "Zusatzcheck",
        prompt:
          "Warum ist es irreführend, den Angriff auf die Ukraine erst am 24. Februar 2022 beginnen zu lassen?",
        help:
          "Nenne mindestens zwei ältere Entwicklungen, die schon vorher wichtig waren.",
        placeholder: "Es ist irreführend, weil ...",
        sourceIds: ["r-tsar-dropbox", "r-tsar-terrax", "r-tsar-britannica"],
        conceptGroups: [
          {
            label: "imperiale Vorgeschichte",
            variants: [
              "imperium",
              "zarenreich",
              "imperiale herrschaft",
              "lange vorgeschichte",
              "russische herrschaft"
            ]
          },
          {
            label: "ukrainische Autonomie oder Identität",
            variants: [
              "autonomie",
              "eigenständigkeit",
              "ukrainische identität",
              "eigenstaatlichkeit",
              "ukrainisch"
            ]
          },
          {
            label: "Krim oder andere frühere Konfliktlinien",
            variants: [
              "krim",
              "1783",
              "russifizierung",
              "sprache",
              "grenzland",
              "frühere konfliktlinien"
            ]
          }
        ],
        successThreshold: 2,
        modelAnswer:
          "Es ist irreführend, erst 2022 anzusetzen, weil der Krieg eine längere Vorgeschichte hat. Schon im Zarenreich ging es um Herrschaft, um den Abbau ukrainischer Autonomie und um Räume wie die Krim."
      },
      {
        id: "mq-zarenreich-2",
        title: "Krim als Symbolraum",
        type: "short-text",
        challenge: "Zusatzcheck",
        prompt:
          "Warum ist die Krim historisch und politisch ein besonders aufgeladener Raum?",
        help:
          "Gehe auf die Annexion, die Lage am Schwarzen Meer und die symbolische Bedeutung ein.",
        placeholder: "Die Krim ist besonders aufgeladen, weil ...",
        sourceIds: ["r-tsar-dropbox", "r-tsar-crimea", "r-tsar-arte-crimea"],
        conceptGroups: [
          {
            label: "Annexion 1783",
            variants: ["1783", "annexion", "annektiert", "zarenreich", "russisches reich"]
          },
          {
            label: "strategische Lage am Schwarzen Meer",
            variants: [
              "schwarzes meer",
              "hafen",
              "strategisch",
              "militärisch",
              "seeflotte",
              "meerzugang"
            ]
          },
          {
            label: "mehr als nur Geografie",
            variants: [
              "symbol",
              "identität",
              "erinnerung",
              "mythos",
              "anspruch",
              "politisch aufgeladen"
            ]
          }
        ],
        successThreshold: 2,
        modelAnswer:
          "Die Krim ist besonders wichtig, weil sie 1783 vom Zarenreich annektiert wurde, am Schwarzen Meer strategisch liegt und bis heute politisch stark aufgeladen ist."
      }
    ],
    resources: [
      {
        id: "r-tsar-dropbox",
        bucket: "Pflichtfilme: zuerst bearbeiten",
        type: "Video",
        title: "Russlands Kriege - Das Zarenreich (Folge 1)",
        focus:
          "Zeigt die Ausweitung russischer Herrschaft und die lange Vorgeschichte des Krieges.",
        filmTask:
          "Achte darauf, wie aus Schutz, Nähe oder Ordnung Herrschaft über ukrainische Räume wird.",
        link: "https://www.dropbox.com/scl/fi/mjmj9oigtqntctu048cam/Russlands-Kriege-Das-Zarenreich-Folge-1.mp4?rlkey=a2l2x03572yh2ur6kfqk99u2s&st=0e95wbtb&dl=0",
        tags: ["Dropbox", "Pflicht", "Grundlage"],
        selectionNote:
          "Das ist das Grundvideo für die Station.",
        didacticUse:
          "Am besten zuerst schauen."
      },
      {
        id: "r-tsar-terrax",
        bucket: "Pflichtfilme: zuerst bearbeiten",
        type: "Video",
        title: "Der Ukraine-Konflikt: Die Geschichte dahinter",
        focus:
          "Gibt einen Überblick über die wichtigsten Konfliktlinien und Deutungen.",
        filmTask:
          "Prüfe, welche historischen Begründungen erklärt werden und wo sie politisch problematisch werden.",
        link: "https://www.youtube.com/watch?v=CWhoALa6bTU",
        tags: ["YouTube", "Pflicht", "Überblick"],
        selectionNote:
          "Gut geeignet für den ersten Überblick.",
        didacticUse:
          "Nach dem Grundvideo zur Sicherung einsetzen."
      },
      {
        id: "r-tsar-borderland",
        bucket: "Pflichtfilme: zuerst bearbeiten",
        type: "Video",
        title: "(Doku in HD) Ukraine - Grenzland zwischen Ost und West",
        focus:
          "Zeigt die Ukraine als Raum mit mehreren historischen Bezügen.",
        filmTask:
          "Achte darauf, wie ukrainische Eigenständigkeit sichtbar wird und nicht nur eine Lage zwischen Ost und West.",
        link: "https://www.youtube.com/watch?v=IjBoAqXhFCM",
        tags: ["YouTube", "Pflicht", "Perspektive"],
        selectionNote:
          "Wichtig für den Blickwechsel.",
        didacticUse:
          "Vor allem vor den Transferfragen hilfreich."
      },
      {
        id: "r-tsar-britannica",
        bucket: "Zusatzquellen: Kontext und Vertiefung",
        type: "Website",
        title: "Britannica: Ukraine under direct imperial Russian rule",
        focus:
          "Kurzer Überblick zu zarischer Herrschaft, Autonomieverlust und Russifizierung.",
        link: "https://www.britannica.com/place/Ukraine/Ukraine-under-direct-imperial-Russian-rule",
        tags: ["Britannica", "Kontext"],
        selectionNote:
          "Praktisch, wenn Begriffe schnell geklärt werden müssen.",
        didacticUse:
          "Gut zum Nachschlagen während der Aufgaben."
      },
      {
        id: "r-tsar-crimea",
        bucket: "Zusatzquellen: Kontext und Vertiefung",
        type: "Website",
        title: "Britannica: Crimea - History",
        focus:
          "Kurzer Überblick zur Geschichte der Krim und zu ihrer politischen Bedeutung.",
        link: "https://www.britannica.com/place/Crimea/History",
        tags: ["Britannica", "Krim"],
        selectionNote:
          "Gut, wenn die Krim genauer eingeordnet werden soll.",
        didacticUse:
          "Vor allem für den Zusatzcheck zur Krim nützlich."
      },
      {
        id: "r-tsar-arte-crimea",
        bucket: "Zusatzquellen: Kontext und Vertiefung",
        type: "Video",
        title: "Ukraine-Russland: Die Bedeutung der Krim | Mit offenen Karten | ARTE",
        focus:
          "Erklärt knapp, warum die Krim historisch und politisch so wichtig ist.",
        filmTask:
          "Sammle zwei historische und zwei politische Gründe, warum die Krim bis heute so umkämpft ist.",
        link: "https://www.youtube.com/watch?v=g_V--Mbq93Y",
        tags: ["YouTube", "Krim", "ARTE"],
        selectionNote:
          "Gut, wenn die Bedeutung der Krim noch einmal klar werden soll.",
        didacticUse:
          "Direkt für die Krim-Fragen geeignet."
      }
    ],
    questions: [
      {
        id: "q-zar-1",
        type: "short-text",
        challenge: "Grundwissen",
        prompt:
          "Warum beginnt diese Lernlandschaft zur Ukraine nicht erst mit dem Jahr 2022?",
        help:
          "Verbinde den heutigen Krieg mit mindestens zwei älteren Entwicklungen.",
        placeholder: "Die Lernlandschaft beginnt früher, weil ...",
        sourceIds: ["r-tsar-dropbox", "r-tsar-terrax", "r-tsar-britannica"],
        conceptGroups: [
          {
            label: "imperiale Herrschaftsgeschichte",
            variants: [
              "imperiale herrschaft",
              "zarenreich",
              "imperium",
              "russisches reich",
              "lange geschichte"
            ]
          },
          {
            label: "Autonomieverlust oder Russifizierung",
            variants: [
              "autonomieverlust",
              "russifizierung",
              "sprache",
              "unterdrückung",
              "eigenständigkeit eingeschränkt"
            ]
          },
          {
            label: "heutige Deutungen greifen Geschichte auf",
            variants: [
              "heutige ansprüche",
              "deutungen",
              "begründet mit geschichte",
              "historische narrative",
              "vergangenheit wird benutzt"
            ]
          }
        ],
        successThreshold: 2,
        modelAnswer:
          "Die Lernlandschaft beginnt früher, weil der Krieg nicht aus dem Nichts kam. Schon im Zarenreich wurden ukrainische Autonomieräume eingeschränkt, und bis heute werden politische Ansprüche mit Geschichte begründet."
      },
      {
        id: "q-zar-2",
        type: "short-text",
        challenge: "Einordnung",
        prompt:
          "Nenne drei Merkmale der zarischen Herrschaft über ukrainische Gebiete.",
        help:
          "Denk an Herrschaft, Raum, Sprache und Selbstständigkeit.",
        placeholder: "Merkmale der zarischen Herrschaft waren ...",
        sourceIds: ["r-tsar-dropbox", "r-tsar-britannica", "r-tsar-crimea", "r-tsar-arte-crimea"],
        conceptGroups: [
          {
            label: "imperiale Expansion",
            variants: [
              "expansion",
              "annexion",
              "ausweitung",
              "einverleibung",
              "krim",
              "territorial"
            ]
          },
          {
            label: "Abbau ukrainischer Autonomie",
            variants: [
              "autonomie",
              "hetmanat",
              "selbstverwaltung",
              "zentralisierung",
              "autonomieräume"
            ]
          },
          {
            label: "Russifizierung oder Sprachpolitik",
            variants: [
              "russifizierung",
              "sprache",
              "ukrainisch eingeschränkt",
              "ems",
              "verbot",
              "sprachpolitik"
            ]
          }
        ],
        successThreshold: 2,
        modelAnswer:
          "Zur zarischen Herrschaft gehörten die Ausweitung des Reiches, der Abbau ukrainischer Autonomie und der Druck zur Russifizierung, zum Beispiel über Verwaltung und Sprachpolitik."
      },
      {
        id: "q-zar-3",
        type: "drag-order",
        challenge: "Chronologie",
        prompt:
          "Ordne zentrale Entwicklungsschritte von der Auflösung ukrainischer Autonomieräume bis zum Ende des Zarenreichs.",
        help:
          "Beginne mit dem Abbau des Hetmanats und ende mit dem Zusammenbruch des Zarenreichs 1917.",
        sourceIds: ["r-tsar-dropbox", "r-tsar-britannica", "r-tsar-crimea"],
        items: [
          {
            id: "hetmanate-1764",
            label: "Die zarische Macht baut die Autonomie des Hetmanats systematisch ab.",
            detail: "Selbstverwaltung wird zurückgedrängt und stärker zentral kontrolliert."
          },
          {
            id: "sich-1775",
            label: "Die Saporoger Sitsch wird zerschlagen.",
            detail: "Ein wichtiger autonomer Kosakenraum verschwindet."
          },
          {
            id: "crimea-1783",
            label: "Die Krim wird vom Zarenreich annektiert.",
            detail: "Der Schwarzmeerraum gewinnt strategisch und symbolisch an Bedeutung."
          },
          {
            id: "ems-1876",
            label: "Der Ems-Erlass beschränkt die ukrainische Sprache öffentlich.",
            detail: "Sprachpolitik wird zum Instrument imperialer Herrschaft."
          },
          {
            id: "empire-1917",
            label: "Mit der Revolution von 1917 bricht das Zarenreich zusammen.",
            detail: "Damit endet das Imperium, nicht aber die Konfliktgeschichte."
          }
        ],
        correctOrder: ["hetmanate-1764", "sich-1775", "crimea-1783", "ems-1876", "empire-1917"],
        explanation:
          "Die Reihenfolge zeigt: Der Krieg hat eine längere Vorgeschichte. Es geht nicht nur um heutige Fronten, sondern auch um ältere Herrschafts- und Sprachpolitik."
      },
      {
        id: "q-zar-4",
        type: "short-text",
        challenge: "Perspektivwechsel",
        prompt:
          "Warum ist die Formel von der Ukraine als 'Grenzland zwischen Ost und West' hilfreich, aber auch problematisch?",
        help:
          "Nenne, was an der Formel hilfreich ist und wo sie zu kurz greift.",
        placeholder: "Die Formel ist hilfreich, weil ... Problematisch ist sie, weil ...",
        sourceIds: ["r-tsar-borderland", "r-tsar-terrax"],
        conceptGroups: [
          {
            label: "hilft Mehrfachbezüge zu verstehen",
            variants: [
              "mehrfachbezüge",
              "verschiedene einflüsse",
              "zwischenräume",
              "ost und west",
              "verflechtung"
            ]
          },
          {
            label: "verdeckt ukrainische Eigenständigkeit",
            variants: [
              "eigenständigkeit",
              "eigene perspektive",
              "nicht nur zwischen",
              "ukrainische agency",
              "eigene geschichte"
            ]
          },
          {
            label: "warnt vor Vereinfachung",
            variants: [
              "vereinfachung",
              "verkürzt",
              "zu simpel",
              "schablone",
              "problematisch"
            ]
          }
        ],
        successThreshold: 2,
        modelAnswer:
          "Die Formel ist hilfreich, weil sie verschiedene Einflüsse sichtbar macht. Problematisch ist sie, weil die Ukraine dann leicht nur als Zwischenraum erscheint und ihre eigene Geschichte zu kurz kommt."
      },
      {
        id: "q-zar-5",
        type: "short-text",
        challenge: "Transfer",
        prompt:
          "Wie hilft die imperiale Vorgeschichte beim Verständnis des heutigen Krieges, ohne alles als zwangsläufige Kontinuität darzustellen?",
        help:
          "Verbinde ältere Linien, wichtige Brüche und die Eigenständigkeit der Ukraine.",
        placeholder: "Die imperiale Vorgeschichte hilft, weil ... Zugleich darf man nicht ...",
        sourceIds: ["r-tsar-dropbox", "r-tsar-terrax", "r-tsar-borderland", "r-tsar-britannica"],
        conceptGroups: [
          {
            label: "zeigt ältere Ansprüche und Herrschaftsmuster",
            variants: [
              "ältere ansprüche",
              "herrschaftsmuster",
              "imperiale narrative",
              "vorgeschichte",
              "kontinuitäten"
            ]
          },
          {
            label: "betont ukrainische Eigenständigkeit oder Widerstand",
            variants: [
              "ukrainische eigenständigkeit",
              "widerstand",
              "eigene akteure",
              "eigene geschichte",
              "nicht passiv"
            ]
          },
          {
            label: "verweist auf Brüche oder neue Faktoren",
            variants: [
              "brüche",
              "neue faktoren",
              "nicht zwangsläufig",
              "gegenwart",
              "putin",
              "21. jahrhundert"
            ]
          }
        ],
        successThreshold: 2,
        modelAnswer:
          "Die Vorgeschichte hilft, weil man ältere Herrschaftsmuster und Ansprüche besser versteht. Daraus darf man aber keine einfache Gerade machen, denn die Ukraine hat eigene Handlungsspielräume, und es gab wichtige Brüche."
      }
    ]
  },
  {
    id: "sowjetunion",
    step: "2",
    title: "Sowjetunion: Gewalt und Erinnerung",
    era: "1917 bis 1991",
    intro:
      "In dieser Station geht es um Revolution, Sowjetherrschaft, Holodomor, Krieg und Nachkriegszeit. Kappeler spricht von der sowjetischen 'Völkerfamilie' und zeigt zugleich, wie ungleich Erfahrungen und Erinnerungen in Russland und in der Ukraine waren.",
    goal:
      "Du kannst erklären, warum die Sowjetzeit für die ukrainische Erinnerung zentral ist und weshalb 'gemeinsame Geschichte' nicht dasselbe ist wie gemeinsame Erinnerung.",
    route:
      "Beginne mit der Folge zur Sowjetunion. Danach schaust du Terra X zu 'Geschichte als Waffe'. Für einzelne Punkte ziehst du die Zusatzquellen zu Holodomor und Nachkriegszeit heran. Anschließend bearbeitest du die Zusatzchecks und die fünf Aufgaben.",
    teacherNote:
      "Die Lernenden sollen die Ukraine nicht nur als Randgebiet der Sowjetunion sehen. Im Mittelpunkt stehen eigene Gewalterfahrungen, unterschiedliche Erinnerung und der Bruch von 1991.",
    kappelerFrame: {
      title: "Von der 'Völkerfamilie' zur getrennten Erinnerung",
      intro:
        "Die Sowjetzeit soll nicht nur als gemeinsame Vergangenheit erscheinen. Die Bausteine helfen, gemeinsame Strukturen, Gewalt und unterschiedliche Erinnerung auseinanderzuhalten.",
      steps: [
        {
          quote: "\"Die Russische und die Ukrainische Revolution\"",
          page: "S. 132",
          meaning:
            "Nach 1917 war die Ukraine nicht einfach ein Nebenschauplatz. Es ging um Macht, Staatlichkeit und darum, wer über die Ukraine entscheiden konnte.",
          filmTask:
            "Achte im Sowjetunion-Film darauf, wann ukrainische Handlungsspielräume entstehen und wann sie eingeschränkt werden.",
          sourceIds: ["r-soviet-dropbox"]
        },
        {
          quote: "\"Russen und Ukrainer in der sowjetischen 'Völkerfamilie'\"",
          page: "S. 150",
          meaning:
            "Das Bild der Völkerfamilie klingt harmonisch. Die Aufgabe ist zu prüfen, welche Gewalt und welche Ungleichheit dahinter sichtbar werden.",
          filmTask:
            "Markiere im Film Beispiele, in denen offizielle Einheit und konkrete Gewalt nebeneinanderstehen.",
          sourceIds: ["r-soviet-dropbox", "r-soviet-terrax"]
        },
        {
          quote: "\"Die Ukraine war auf jeden Fall keine klassische Kolonie ... eher ... 'innere Kolonie' ...\"",
          page: "S. 130",
          meaning:
            "Kappeler warnt vor zu einfachen Begriffen. Entscheidend sind die Merkmale: Abhängigkeit, Gewalt, Zentrum und Peripherie.",
          filmTask:
            "Prüfe am Holodomor-Material, welche Merkmale von Gewalt und Abhängigkeit sichtbar werden.",
          sourceIds: ["r-soviet-holodomor", "r-soviet-britannica"]
        },
        {
          quote: "\"Die Revolution des Euro-Majdan wurde zur größten zivilgesellschaftlichen Massenbewegung in Europa seit der Revolution von 1989.\"",
          page: "S. 219",
          meaning:
            "Die spätere Abwendung von Russland ist ohne die sowjetische und postsowjetische Erinnerung nicht gut zu verstehen.",
          filmTask:
            "Achte bei 'Geschichte als Waffe' darauf, wie Erinnerung an die Sowjetzeit für heutige Politik benutzt wird.",
          sourceIds: ["r-soviet-terrax", "r-soviet-postwar"]
        }
      ]
    },
    teacherToolkit: {
      duration: "45 bis 55 Minuten",
      socialForms: [
        "Einzelarbeit mit Chronologiesicherung",
        "Partneraustausch zur Frage geteilter und getrennter Erinnerung",
        "Transferfrage als gewichtende Kurz-Essay-Aufgabe"
      ],
      assessmentFocus: [
        "Holodomor als politische Gewaltgeschichte korrekt einordnen",
        "Sowjetische und ukrainische Erinnerung nicht gleichsetzen",
        "Geschichte als politisches Instrument erkennen"
      ],
      misconceptions: [
        "Die Sowjetgeschichte sei nur eine russische Geschichte",
        "Gemeinsame Kriegsvergangenheit bedeute identische Gegenwartsinteressen",
        "Erinnerungspolitik sei bloß symbolisch und ohne politische Wirkung"
      ],
      product:
        "Begründete Deutung dazu, welche sowjetischen Erfahrungen im heutigen Krieg besonders nachwirken.",
      extension:
        "Zusatzdiskussion zur Frage, warum Erinnerungspolitik in Kriegen so machtvoll ist."
    },
    visual: {
      src: "https://i.ytimg.com/vi/vn3QyKxSvTo/hqdefault.jpg",
      alt: "Vorschaubild zu Terra X: Putins Krieg - Geschichte als Waffe"
    },
    miniQuestions: [
      {
        id: "mq-soviet-1",
        title: "Holodomor in der Erinnerung",
        type: "short-text",
        challenge: "Zusatzcheck",
        prompt:
          "Warum spielt der Holodomor bis heute eine so große Rolle in der ukrainischen Erinnerungskultur?",
        help:
          "Gehe auf die Katastrophe selbst, die politische Verantwortung und die Erinnerung daran ein.",
        placeholder: "Der Holodomor spielt bis heute eine große Rolle, weil ...",
        sourceIds: ["r-soviet-holodomor", "r-soviet-britannica"],
        conceptGroups: [
          {
            label: "massenhafte Hungerkatastrophe",
            variants: [
              "hungersnot",
              "massensterben",
              "millionen",
              "hunger",
              "1932",
              "1933"
            ]
          },
          {
            label: "politische Verantwortung Stalins oder der Sowjetmacht",
            variants: [
              "stalin",
              "sowjetmacht",
              "politisch verursacht",
              "kollektivierung",
              "zwangsmaßnahmen"
            ]
          },
          {
            label: "prägt Identität oder Erinnerung bis heute",
            variants: [
              "erinnerung",
              "identität",
              "gedenken",
              "bis heute",
              "erinnerungskultur"
            ]
          }
        ],
        successThreshold: 2,
        modelAnswer:
          "Der Holodomor spielt bis heute eine große Rolle, weil Millionen Menschen starben und viele Ukrainer darin eine politisch verschärfte Hungerkatastrophe sehen. Darum prägt er die Erinnerung bis heute."
      },
      {
        id: "mq-soviet-2",
        title: "Geschichte als Waffe",
        type: "short-text",
        challenge: "Zusatzcheck",
        prompt:
          "Warum ist der Ausdruck 'Geschichte als Waffe' für Putins Ukraine-Politik treffend?",
        help:
          "Nenne mindestens zwei Arten, wie Vergangenheit für heutige Politik benutzt wird.",
        placeholder: "Der Ausdruck passt, weil ...",
        sourceIds: ["r-soviet-terrax", "r-soviet-postwar"],
        conceptGroups: [
          {
            label: "selektive Geschichtsbilder",
            variants: [
              "selektiv",
              "ausgewählt",
              "umdeutung",
              "geschichtsbilder",
              "erzählung",
              "narrativ"
            ]
          },
          {
            label: "Bezug auf Zweiten Weltkrieg oder Antifaschismus",
            variants: [
              "zweiter weltkrieg",
              "großer vaterländischer krieg",
              "antifaschismus",
              "1945",
              "nazis"
            ]
          },
          {
            label: "Legitimation heutiger Politik",
            variants: [
              "legitimieren",
              "rechtfertigen",
              "heutige politik",
              "krieg begründen",
              "überfall rechtfertigen"
            ]
          }
        ],
        successThreshold: 2,
        modelAnswer:
          "Der Ausdruck passt, weil Vergangenheit nicht neutral erzählt wird. Vor allem der Zweite Weltkrieg und der antifaschistische Mythos werden benutzt, um heutige Politik und Gewalt gegen die Ukraine zu rechtfertigen."
      }
    ],
    resources: [
      {
        id: "r-soviet-dropbox",
        bucket: "Pflichtfilme: zuerst bearbeiten",
        type: "Video",
        title: "Russlands Kriege - Die Sowjetunion (Folge 2)",
        focus:
          "Zeigt Sowjetherrschaft, Gewalt und die Folgen bis 1991.",
        filmTask:
          "Achte darauf, wann von gemeinsamer Sowjetgeschichte die Rede ist und wo Gewalt gegen die Ukraine sichtbar wird.",
        link: "https://www.dropbox.com/scl/fi/u7u5jdh9z27a7h3qvqkzz/Russlands-Kriege-Die-Sowjetunion-Folge-2.mp4?rlkey=ywv6t3ou6u6zgvl0uxnhhtjqz&st=62wchb1h&dl=0",
        tags: ["Dropbox", "Pflicht", "Grundlage"],
        selectionNote:
          "Das ist das Grundvideo für diese Station.",
        didacticUse:
          "Am besten am Anfang schauen."
      },
      {
        id: "r-soviet-terrax",
        bucket: "Pflichtfilme: zuerst bearbeiten",
        type: "Video",
        title: "Putins Krieg - Geschichte als Waffe | Terra X",
        focus:
          "Zeigt, wie Geschichte politisch benutzt wird.",
        filmTask:
          "Notiere, welche historischen Bilder Putin benutzt und welche Teile der Geschichte dabei fehlen.",
        link: "https://www.youtube.com/watch?v=vn3QyKxSvTo",
        tags: ["YouTube", "Pflicht", "Erinnerungspolitik"],
        selectionNote:
          "Hilft gut bei der Verbindung von Vergangenheit und Gegenwart.",
        didacticUse:
          "Nach dem Grundvideo gut zur Vertiefung."
      },
      {
        id: "r-soviet-holodomor",
        bucket: "Zusatzquellen: Kontext und Vertiefung",
        type: "Website",
        title: "bpb: 80 Jahre Holodomor - die Große Hungersnot in der Ukraine",
        focus:
          "Gibt einen klaren Überblick zu Ursachen, Verlauf und Erinnerung des Holodomor.",
        link: "https://www.bpb.de/themen/europa/ukraine-analysen/174179/analyse-80-jahre-holodomor-die-grosse-hungersnot-in-der-ukraine/",
        tags: ["bpb", "Holodomor"],
        selectionNote:
          "Gut geeignet für die Einordnung des Holodomor.",
        didacticUse:
          "Nützlich für Aufgaben zu Holodomor und Erinnerung."
      },
      {
        id: "r-soviet-britannica",
        bucket: "Zusatzquellen: Kontext und Vertiefung",
        type: "Website",
        title: "Britannica: Holodomor",
        focus:
          "Kurzer Überblick zu Hungersnot, Zwangskollektivierung und Verantwortung.",
        link: "https://www.britannica.com/event/Holodomor",
        tags: ["Britannica", "Kontext"],
        selectionNote:
          "Gut für schnelles Nachschlagen.",
        didacticUse:
          "Vor allem für den Zusatzcheck hilfreich."
      },
      {
        id: "r-soviet-postwar",
        bucket: "Zusatzquellen: Kontext und Vertiefung",
        type: "Website",
        title: "Britannica: Soviet Ukraine in the postwar period",
        focus:
          "Überblick zu Nachkriegszeit, Krim 1954 und Stellung der Ukraine in der Sowjetunion.",
        link: "https://www.britannica.com/place/Ukraine/Soviet-Ukraine-in-the-postwar-period",
        tags: ["Britannica", "Nachkriegsordnung"],
        selectionNote:
          "Hilft bei der zeitlichen Einordnung.",
        didacticUse:
          "Vor allem für Chronologie und Transfer nützlich."
      }
    ],
    questions: [
      {
        id: "q-soviet-1",
        type: "short-text",
        challenge: "Grundwissen",
        prompt:
          "Warum ist die sowjetische Phase für das Verständnis des heutigen Krieges unverzichtbar?",
        help:
          "Verbinde Gewalt, Erinnerung und die Frage nach Staatlichkeit.",
        placeholder: "Die sowjetische Phase ist unverzichtbar, weil ...",
        sourceIds: ["r-soviet-dropbox", "r-soviet-terrax", "r-soviet-holodomor"],
        conceptGroups: [
          {
            label: "Ukraine war Teil sowjetischer Herrschaft",
            variants: [
              "teil der sowjetunion",
              "sowjetische herrschaft",
              "eingebunden",
              "udssr",
              "moskau"
            ]
          },
          {
            label: "spezifische Gewalterfahrungen",
            variants: [
              "holodomor",
              "repression",
              "gewalt",
              "stalin",
              "hungersnot"
            ]
          },
          {
            label: "prägt Erinnerung oder Unabhängigkeit 1991",
            variants: [
              "erinnerung",
              "identität",
              "1991",
              "unabhängigkeit",
              "eigenstaatlichkeit"
            ]
          }
        ],
        successThreshold: 2,
        modelAnswer:
          "Die Sowjetzeit ist wichtig, weil die Ukraine Teil der Sowjetunion war, aber eigene Gewalterfahrungen machte, zum Beispiel den Holodomor. Das prägt Erinnerung und die Bedeutung der Unabhängigkeit von 1991 bis heute."
      },
      {
        id: "q-soviet-2",
        type: "short-text",
        challenge: "Folgenanalyse",
        prompt:
          "Nenne drei sowjetische Erfahrungen, die bis heute das ukrainische Geschichtsbewusstsein prägen.",
        help:
          "Denk an Gewalt, Krieg, Herrschaft und den Weg zur Unabhängigkeit.",
        placeholder: "Prägend waren zum Beispiel ...",
        sourceIds: ["r-soviet-dropbox", "r-soviet-holodomor", "r-soviet-postwar"],
        conceptGroups: [
          {
            label: "Holodomor oder stalinistische Gewalt",
            variants: [
              "holodomor",
              "hungersnot",
              "stalinistische gewalt",
              "repression",
              "stalin"
            ]
          },
          {
            label: "Zweiter Weltkrieg oder Besatzungserfahrung",
            variants: [
              "zweiter weltkrieg",
              "1941",
              "besatzung",
              "kriegserfahrung",
              "krieg"
            ]
          },
          {
            label: "Unabhängigkeit 1991 oder spätsowjetische Abgrenzung",
            variants: [
              "1991",
              "unabhängigkeit",
              "eigenstaat",
              "spätsowjetisch",
              "ablösung von der sowjetunion"
            ]
          }
        ],
        successThreshold: 2,
        modelAnswer:
          "Prägend waren zum Beispiel der Holodomor, die Erfahrungen von Krieg und Besatzung im Zweiten Weltkrieg und die Unabhängigkeit von 1991."
      },
      {
        id: "q-soviet-3",
        type: "drag-order",
        challenge: "Chronologie",
        prompt:
          "Ordne die Schlüsselereignisse von Revolution, Hungersnot und Nachkriegsordnung bis zur Unabhängigkeit.",
        help:
          "Beginne mit dem Umbruch von 1917 und ende mit der ukrainischen Unabhängigkeit 1991.",
        sourceIds: ["r-soviet-dropbox", "r-soviet-holodomor", "r-soviet-postwar"],
        items: [
          {
            id: "rev-1917",
            label: "Revolution und Bürgerkrieg eröffnen eine neue Machtordnung im ehemaligen Zarenreich.",
            detail: "Die Ukraine wird zum umkämpften Raum zwischen verschiedenen Kräften."
          },
          {
            id: "ussr-1922",
            label: "Die Ukraine wird Teil der Sowjetunion.",
            detail: "Formale Republik und reale Bindung an Moskau fallen nicht zusammen."
          },
          {
            id: "holodomor-1932",
            label: "Der Holodomor von 1932/33 trifft die Ukraine verheerend.",
            detail: "Hunger und Politik verschränken sich zu einer Katastrophe."
          },
          {
            id: "war-1941",
            label: "Mit dem deutschen Überfall 1941 wird die Ukraine erneut zum Kriegsschauplatz.",
            detail: "Die Kriegs- und Besatzungserfahrung prägt die Erinnerung tief."
          },
          {
            id: "crimea-1954",
            label: "Die Krim wird 1954 innerhalb der Sowjetunion an die Ukraine übertragen.",
            detail: "Spätere Konflikte greifen dieses Datum immer wieder auf."
          },
          {
            id: "independence-1991",
            label: "1991 wird die Ukraine unabhängig.",
            detail: "Damit endet die Sowjetunion und ein neuer politischer Rahmen beginnt."
          }
        ],
        correctOrder: [
          "rev-1917",
          "ussr-1922",
          "holodomor-1932",
          "war-1941",
          "crimea-1954",
          "independence-1991"
        ],
        explanation:
          "Die Chronologie zeigt, wie stark die Sowjetzeit bis heute nachwirkt: bei Gewalt, Erinnerung, Territorialfragen und beim Blick auf 1991."
      },
      {
        id: "q-soviet-4",
        type: "short-text",
        challenge: "Strukturverständnis",
        prompt:
          "Warum ist die Formel 'Geschichte als Waffe' für den Umgang mit der sowjetischen Vergangenheit so treffend?",
        help:
          "Erkläre, wie Geschichte hier politisch benutzt wird und nicht nur Vergangenheit beschreibt.",
        placeholder: "Die Formel ist treffend, weil ...",
        sourceIds: ["r-soviet-terrax", "r-soviet-postwar"],
        conceptGroups: [
          {
            label: "Vergangenheit wird selektiv erzählt",
            variants: [
              "selektiv",
              "ausgewählt",
              "umdeutung",
              "erzählung",
              "instrumentalisiert"
            ]
          },
          {
            label: "sie legitimiert Gegenwartspolitik",
            variants: [
              "legitimiert",
              "rechtfertigt",
              "gegenwartspolitik",
              "krieg begründen",
              "heute nutzen"
            ]
          },
          {
            label: "Zweiter Weltkrieg oder Antifaschismus als Bezug",
            variants: [
              "zweiter weltkrieg",
              "antifaschismus",
              "sieg",
              "1945",
              "großer vaterländischer krieg"
            ]
          }
        ],
        successThreshold: 2,
        modelAnswer:
          "Die Formel ist treffend, weil Vergangenheit hier bewusst ausgewählt und zugespitzt wird. Vor allem der Zweite Weltkrieg wird genutzt, um heutige Politik und Gewalt gegen die Ukraine zu begründen."
      },
      {
        id: "q-soviet-5",
        type: "short-text",
        challenge: "Transfer",
        prompt:
          "Wie verbindet und trennt die Sowjetgeschichte Ukraine und Russland zugleich?",
        help:
          "Nenne kurz, was beide verbindet und was sie trennt.",
        placeholder: "Die Sowjetgeschichte verbindet beide, weil ... Sie trennt sie aber, weil ...",
        sourceIds: ["r-soviet-dropbox", "r-soviet-terrax", "r-soviet-holodomor", "r-soviet-postwar"],
        conceptGroups: [
          {
            label: "verbindet durch gemeinsame sowjetische Erfahrung",
            variants: [
              "gemeinsame sowjetische erfahrung",
              "gemeinsame geschichte",
              "udssr",
              "gemeinsame institutionen",
              "verbindet"
            ]
          },
          {
            label: "trennt durch unterschiedliche Gewalterfahrungen oder Erinnerung",
            variants: [
              "unterschiedliche erinnerung",
              "holodomor",
              "eigene erfahrungen",
              "gewalterfahrungen",
              "trennt"
            ]
          },
          {
            label: "Unabhängigkeit 1991 als Bruch",
            variants: [
              "1991",
              "unabhängigkeit",
              "bruch",
              "eigener staat",
              "souveränität"
            ]
          }
        ],
        successThreshold: 2,
        modelAnswer:
          "Die Sowjetgeschichte verbindet beide Länder durch gemeinsame Institutionen und gemeinsame Kriegserfahrungen. Sie trennt sie aber durch unterschiedliche Erinnerungen, zum Beispiel an den Holodomor, und durch den Bruch von 1991."
      }
    ]
  },
  {
    id: "foederation",
    step: "3",
    title: "Russische Föderation und Großangriff",
    era: "1991 bis Gegenwart",
    intro:
      "Die dritte Station behandelt die Zeit seit 1991: Unabhängigkeit, Krim, Donbas, Großangriff seit dem 24. Februar 2022, russische Innenpolitik und den Kriegsalltag in der Ukraine. Kappeler zeigt hier, wie aus 'feindlichen Brüdern' offene Feinde wurden.",
    goal:
      "Du kannst die Jahre 2014 und 2022 sauber unterscheiden und erklären, wie Geschichtsbilder, Herrschaft und militärische Gewalt zusammenhängen.",
    route:
      "Arbeite zuerst mit der Folge zur Russischen Föderation. Danach helfen Terra X und die Reportagen zu Donbas, Mariupol, Russland und Putins Herrschaft. Ziehe die Zusatzquellen dort heran, wo du sie für die Aufgaben brauchst.",
    teacherNote:
      "Die Station soll nicht bei Schlagzeilen stehen bleiben. Die Lernenden sollen sehen, wie Rechtfertigungen, Propaganda, Repression und reale Kriegserfahrung ineinandergreifen.",
    kappelerFrame: {
      title: "Von 'feindliche Brüder?' zu 'Feinde statt Brüder'",
      intro:
        "Diese Bausteine führen vom postsowjetischen Streit zur offenen Gewalt. Die Filme sollen zeigen, wie politische Deutung, Propaganda und Kriegspraxis zusammenkommen.",
      steps: [
        {
          quote: "\"Feindliche Brüder? Die Konfrontation der beiden postsowjetischen Staaten\"",
          page: "S. 199",
          meaning:
            "Nach 1991 war die Ukraine ein eigener Staat. Trotzdem blieb in Russland oft die Vorstellung bestehen, die Ukraine gehöre eigentlich dazu.",
          filmTask:
            "Achte in der Föderations-Folge darauf, wo ukrainische Eigenständigkeit anerkannt oder bestritten wird.",
          sourceIds: ["r-fed-federation", "r-fed-putin"]
        },
        {
          quote: "\"Feinde statt Brüder: Russlands Krieg gegen die Ukraine\"",
          page: "S. 232",
          meaning:
            "Der Bruch ist nicht nur diplomatisch. Er wird seit 2014 militärisch und seit 2022 als Großangriff sichtbar.",
          filmTask:
            "Unterscheide in den Filmen sauber zwischen 2014, dem 21. Februar 2022 und dem 24. Februar 2022.",
          sourceIds: ["r-fed-federation", "r-fed-overfall", "r-fed-donbas"]
        },
        {
          quote: "\"Der Krieg Russlands gegen die Ukraine begann nicht erst am 24. Februar 2022, sondern bereits acht Jahre früher ...\"",
          page: "S. 232",
          meaning:
            "Der 24. Februar 2022 ist ein Einschnitt, aber nicht der Anfang aus dem Nichts.",
          filmTask:
            "Sammle in den Filmen Belege dafür, dass 2022 Eskalation und nicht Startpunkt war.",
          sourceIds: ["r-fed-overfall", "r-fed-donbas", "r-fed-britannica"]
        },
        {
          quote: "\"Putins Begründungen und Rechtfertigungen des Kriegs\"",
          page: "S. 255",
          meaning:
            "Rechtfertigungen sind kein Beweis. Sie sind Material, das wir prüfen: Was wird behauptet, was wird ausgelassen, was wird verdreht?",
          filmTask:
            "Vergleiche Putins Begründungen mit den Reportagen zu Mariupol, Donbas und dem Kriegsalltag.",
          sourceIds: ["r-fed-overfall", "r-fed-mariupol", "r-fed-worldview", "r-fed-frontal"]
        }
      ]
    },
    teacherToolkit: {
      duration: "50 bis 60 Minuten",
      socialForms: [
        "Einzelarbeit mit Film-und-Fragen-Modul",
        "Partnervergleich zu 2014 und 2022",
        "Transferantwort als bewertende Abschlussaufgabe"
      ],
      assessmentFocus: [
        "2014, 21. Februar 2022 und 24. Februar 2022 sauber unterscheiden",
        "Innenpolitische Repression in Russland als Teil des Krieges mitdenken",
        "Propaganda nicht mit tatsächlicher Kriegsrealität verwechseln"
      ],
      misconceptions: [
        "Der Krieg habe erst am 24. Februar 2022 begonnen",
        "Russische Zustimmung und russische Repression schlössen einander aus",
        "Historische Begründungen seien bloße Nebensache und nicht politisch wirksam"
      ],
      product:
        "Gewichtete Transferantwort dazu, wie Geschichte, Propaganda und militärische Gewalt im Angriff auf die Ukraine zusammenwirken.",
      extension:
        "Zusatzdebatte zur Frage, wie man Krieg erklärt, ohne ihn durch Erklärungen zu entschuldigen."
    },
    visual: {
      src: "https://i.ytimg.com/vi/UePfUdY1i1w/hqdefault.jpg",
      alt: "Vorschaubild zu Terra X: Ukraine-Krieg - Geschichte eines Überfalls"
    },
    miniQuestions: [
      {
        id: "mq-fed-1",
        title: "2014 und 2022",
        type: "short-text",
        challenge: "Zusatzcheck",
        prompt:
          "Warum ist der 24. Februar 2022 eine Eskalation, aber nicht der absolute Anfang des Krieges?",
        help:
          "Nenne mindestens zwei wichtige Entwicklungen seit 2014.",
        placeholder: "Der 24. Februar 2022 ist eine Eskalation, weil ...",
        sourceIds: ["r-fed-federation", "r-fed-overfall", "r-fed-britannica"],
        conceptGroups: [
          {
            label: "Annexion der Krim 2014",
            variants: ["krim", "2014", "annexion", "annektiert", "russische soldaten"]
          },
          {
            label: "Krieg im Donbas seit 2014",
            variants: ["donbas", "ostukraine", "separatisten", "2014", "krieg im donbas"]
          },
          {
            label: "2022 als Vollinvasion oder Großangriff",
            variants: [
              "vollinvasion",
              "großangriff",
              "24. februar 2022",
              "eskalation",
              "breiter angriff"
            ]
          }
        ],
        successThreshold: 2,
        modelAnswer:
          "Der 24. Februar 2022 ist eine Eskalation, weil Russland schon 2014 die Krim annektierte und im Donbas Krieg geführt wurde. Neu war 2022 der offene Großangriff auf die ganze Ukraine."
      },
      {
        id: "mq-fed-2",
        title: "Krieg und russische Gesellschaft",
        type: "short-text",
        challenge: "Zusatzcheck",
        prompt:
          "Was bedeutet die Aussage, Russland führe Krieg gegen die Ukraine und zugleich gegen das eigene Volk?",
        help:
          "Verbinde den Krieg nach außen mit Repression, Propaganda oder Angst im Innern.",
        placeholder: "Die Aussage bedeutet, dass ...",
        sourceIds: ["r-fed-inside-russia", "r-fed-zdf", "r-fed-putin", "r-fed-worldview"],
        conceptGroups: [
          {
            label: "Repression im Innern",
            variants: [
              "repression",
              "zensur",
              "unterdrückung",
              "strafen",
              "angst",
              "verfolgung"
            ]
          },
          {
            label: "Propaganda oder Meinungslenkung",
            variants: [
              "propaganda",
              "fernsehen",
              "meinungslenkung",
              "erzählung",
              "desinformation"
            ]
          },
          {
            label: "Krieg wirkt auf russische Bevölkerung zurück",
            variants: [
              "desertion",
              "mobilisierung",
              "belastung",
              "gesellschaft",
              "eigenes volk"
            ]
          }
        ],
        successThreshold: 2,
        modelAnswer:
          "Die Aussage meint, dass Russland nicht nur die Ukraine angreift, sondern auch im eigenen Land mit Repression, Zensur und Propaganda arbeitet. Der Krieg trifft also auch die eigene Gesellschaft."
      }
    ],
    resources: [
      {
        id: "r-fed-federation",
        bucket: "Pflichtfilme: zuerst bearbeiten",
        type: "Video",
        title: "Russlands Kriege - Die Russische Föderation (Folge 3)",
        focus:
          "Zeigt die Entwicklung seit 1991 bis zum Krieg gegen die Ukraine.",
        filmTask:
          "Achte auf die Schritte von 1991 über 2014 bis 2022 und darauf, wie ukrainische Eigenständigkeit dargestellt wird.",
        link: "https://www.dropbox.com/scl/fi/g9j4f70x6motd9rjej8s1/Russlands-Kriege-Die-Russische-F-deration-Folge-3.mp4?rlkey=m37eesf5bm3dkv6sul4tk0156&st=lu0cxtf4&dl=0",
        tags: ["Dropbox", "Pflicht", "Grundlage"],
        selectionNote:
          "Das ist das Grundvideo der dritten Station.",
        didacticUse:
          "Am besten zuerst schauen, um 1991, 2014 und 2022 zu ordnen."
      },
      {
        id: "r-fed-overfall",
        bucket: "Pflichtfilme: zuerst bearbeiten",
        type: "Video",
        title: "Ukraine-Krieg: Geschichte eines Überfalls | Terra X",
        focus:
          "Ordnet den Großangriff historisch ein.",
        filmTask:
          "Prüfe, welche Vorgeschichte der Film nennt und warum 2022 trotzdem ein neuer Einschnitt ist.",
        link: "https://www.youtube.com/watch?v=UePfUdY1i1w",
        tags: ["YouTube", "Pflicht", "Überblick"],
        selectionNote:
          "Gut für den Überblick über Vorgeschichte und Angriff.",
        didacticUse:
          "Nach dem Grundvideo gut zur Sicherung."
      },
      {
        id: "r-fed-worldview",
        bucket: "Pflichtfilme: zuerst bearbeiten",
        type: "Video",
        title: "Drohnen, Angst und Desertion - Eine Reise durch den Krieg in der Ukraine | Weltspiegel",
        focus:
          "Zeigt den Kriegsalltag, den Abnutzungskrieg und die Belastungen an der Front.",
        filmTask:
          "Achte darauf, wie der Krieg im Alltag der Soldaten und Zivilbevölkerung sichtbar wird.",
        link: "https://www.youtube.com/watch?v=cbeZ82HGsUs",
        tags: ["YouTube", "Pflicht", "Gegenwart"],
        selectionNote:
          "Wichtig, damit der Krieg nicht nur abstrakt bleibt.",
        didacticUse:
          "Vor allem für Frage 2 und die Transferaufgabe nützlich."
      },
      {
        id: "r-fed-donbas",
        bucket: "Pflichtfilme: zuerst bearbeiten",
        type: "Video",
        title: "Ukraine: Donbass, auf Leben und Tod | ARTE Reportage",
        focus:
          "Zeigt den Krieg im Donbas und seine lange Vorgeschichte seit 2014.",
        filmTask:
          "Sammle Hinweise darauf, warum der Donbas für das Verständnis von 2014 und 2022 wichtig ist.",
        link: "https://www.youtube.com/watch?v=F0hFqpE9gUU",
        tags: ["YouTube", "Pflicht", "Donbas"],
        selectionNote:
          "Hilft, den Donbas genauer zu sehen und nicht nur als Schlagwort.",
        didacticUse:
          "Gut für den Unterschied zwischen 2014 und 2022."
      },
      {
        id: "r-fed-mariupol",
        bucket: "Zusatzquellen: Kontext und Vertiefung",
        type: "Video",
        title: "Gefangen im Stahlwerk - der Kampf um Mariupol",
        focus:
          "Zeigt Belagerung, Zerstörung und das Leiden der Menschen in Mariupol.",
        filmTask:
          "Prüfe an Mariupol, was der Begriff Großangriff für Städte und Zivilbevölkerung bedeutet.",
        link: "https://www.youtube.com/watch?v=WxskcVCpcDo",
        tags: ["YouTube", "Mariupol", "Belagerung"],
        selectionNote:
          "Mariupol macht die Folgen des Krieges besonders deutlich.",
        didacticUse:
          "Vor allem für die Frage zu Kriegsmerkmalen seit 2022 gut geeignet."
      },
      {
        id: "r-fed-inside-russia",
        bucket: "Zusatzquellen: Kontext und Vertiefung",
        type: "Video",
        title: "Inside Russia: Im Krieg gegen die Ukraine und das eigene Volk | SPIEGEL TV",
        focus:
          "Zeigt Repression, Propaganda und die Folgen des Krieges in Russland selbst.",
        filmTask:
          "Achte darauf, wie der Krieg nach innen wirkt: auf Medien, Angst und Handlungsspielräume.",
        link: "https://www.youtube.com/watch?v=0CwMC3beBTc",
        tags: ["YouTube", "Russland innen"],
        selectionNote:
          "Macht klar, dass der Krieg auch nach innen wirkt.",
        didacticUse:
          "Vor allem für Zusatzcheck 2 und Frage 4 nützlich."
      },
      {
        id: "r-fed-zdf",
        bucket: "Zusatzquellen: Kontext und Vertiefung",
        type: "Video",
        title: "Ja zum Ukraine-Krieg: Warum die Mehrheit der Russen hinter Putin steht | ZDFzeit",
        focus:
          "Geht auf Zustimmung, Anpassung, Angst und Loyalität in Russland ein.",
        filmTask:
          "Unterscheide Zustimmung, Anpassung und Angst. Nicht alles ist dasselbe.",
        link: "https://www.youtube.com/watch?v=h2U8tscdDLE",
        tags: ["YouTube", "Gesellschaft"],
        selectionNote:
          "Hilft dabei, Zustimmung genauer zu betrachten.",
        didacticUse:
          "Gut für Gespräche über Zustimmung und Handlungsspielräume."
      },
      {
        id: "r-fed-putin",
        bucket: "Zusatzquellen: Kontext und Vertiefung",
        type: "Video",
        title: "Putin - Seine 5 Wege zur Macht | Terra X",
        focus:
          "Zeigt, wie Putin Macht aufgebaut hat und wie sich Russland politisch verändert hat.",
        filmTask:
          "Achte darauf, welche Machttechniken Putins Herrschaft stabil machen.",
        link: "https://www.youtube.com/watch?v=rPel1QVBSJU",
        tags: ["YouTube", "Putin", "Herrschaft"],
        selectionNote:
          "Hilft, Putin nicht nur als Einzelperson, sondern im politischen System zu sehen.",
        didacticUse:
          "Besonders gut für Fragen zu Herrschaft und Propaganda."
      },
      {
        id: "r-fed-frontal",
        bucket: "Zusatzquellen: Kontext und Vertiefung",
        type: "Video",
        title: "Töten für ein mächtiges Russland I frontal",
        focus:
          "Zeigt Militarisierung, Mobilisierung und die Verbindung von Ideologie und Gewalt.",
        filmTask:
          "Prüfe, wie aus Erzählungen über ein mächtiges Russland Bereitschaft zur Gewalt entstehen kann.",
        link: "https://www.youtube.com/watch?v=_aWesw9o7Ng",
        tags: ["YouTube", "Mobilisierung", "Gewalt"],
        selectionNote:
          "Hilft bei der Frage, wie Ideologie in reale Gewalt übergeht.",
        didacticUse:
          "Gut für die Schlussphase und für Transferfragen."
      },
      {
        id: "r-fed-intercepts",
        bucket: "Zusatzquellen: Kontext und Vertiefung",
        type: "Video",
        title: "Abgehört vom ukrainischen Geheimdienst | ARTE",
        focus:
          "Gibt Einblick in Wahrnehmung, Sprache und Haltung im Krieg.",
        filmTask:
          "Behandle die Gespräche als Quelle: Was zeigen sie, und wo musst du vorsichtig bleiben?",
        link: "https://www.youtube.com/watch?v=9ef0rNgRi2k",
        tags: ["YouTube", "Quellenblick"],
        selectionNote:
          "Interessant, weil hier mit einer besonderen Quelle gearbeitet wird.",
        didacticUse:
          "Vor allem für Quellenarbeit im Lehrpersonenmodus geeignet."
      },
      {
        id: "r-fed-un",
        bucket: "Zusatzquellen: Kontext und Vertiefung",
        type: "Website",
        title: "UN: Aggression against Ukraine (A/RES/ES-11/1)",
        focus:
          "Offizielle UN-Resolution vom 2. März 2022 zur Aggression gegen die Ukraine.",
        link: "https://digitallibrary.un.org/record/3965290?ln=en",
        tags: ["UN", "Offizielle Quelle"],
        selectionNote:
          "Gut für den Vergleich zwischen internationaler Bewertung und russischer Selbstdeutung.",
        didacticUse:
          "Nützlich für Einordnung und Quellenkritik."
      },
      {
        id: "r-fed-britannica",
        bucket: "Zusatzquellen: Kontext und Vertiefung",
        type: "Website",
        title: "Britannica: Russia-Ukraine War",
        focus:
          "Kurzer Überblick zu 2014, 2022 und zum weiteren Kriegsverlauf.",
        link: "https://www.britannica.com/event/2022-Russian-invasion-of-Ukraine",
        tags: ["Britannica", "Chronologie"],
        selectionNote:
          "Hilft, die Daten sauber zu ordnen.",
        didacticUse:
          "Vor allem für Chronologie und Wiederholung nützlich."
      }
    ],
    questions: [
      {
        id: "q-fed-1",
        type: "short-text",
        challenge: "Grundwissen",
        prompt:
          "Warum ist der 24. Februar 2022 eine Eskalation, aber nicht der absolute Beginn des Krieges?",
        help:
          "Nenne zwei wichtige Punkte seit 2014 und sage, was 2022 neu war.",
        placeholder: "Der 24. Februar 2022 ist eine Eskalation, weil ... Neu war ...",
        sourceIds: ["r-fed-federation", "r-fed-overfall", "r-fed-britannica"],
        conceptGroups: [
          {
            label: "Krim 2014",
            variants: ["krim", "2014", "annexion", "annektiert", "russische soldaten"]
          },
          {
            label: "Donbas-Krieg seit 2014",
            variants: ["donbas", "ostukraine", "separatisten", "krieg seit 2014", "donetsk", "luhansk"]
          },
          {
            label: "2022 als Großangriff auf die ganze Ukraine",
            variants: [
              "großangriff",
              "vollinvasion",
              "ganze ukraine",
              "mehrere fronten",
              "eskalation"
            ]
          }
        ],
        successThreshold: 2,
        modelAnswer:
          "Der 24. Februar 2022 ist eine Eskalation, weil Russland schon 2014 die Krim annektierte und im Donbas Krieg führte. Neu war 2022 der Großangriff auf die ganze Ukraine mit mehreren Fronten."
      },
      {
        id: "q-fed-2",
        type: "short-text",
        challenge: "Folgenanalyse",
        prompt:
          "Nenne drei Merkmale des Krieges gegen die Ukraine seit 2022.",
        help:
          "Denk an militärische, menschliche und gesellschaftliche Folgen.",
        placeholder: "Merkmale des Krieges sind ...",
        sourceIds: ["r-fed-overfall", "r-fed-worldview", "r-fed-donbas", "r-fed-mariupol", "r-fed-un"],
        conceptGroups: [
          {
            label: "Angriffe auf Städte oder Infrastruktur",
            variants: [
              "städte",
              "infrastruktur",
              "raketen",
              "bombardierung",
              "angriffe auf zivil"
            ]
          },
          {
            label: "Abnutzungskrieg mit Drohnen oder Frontalltag",
            variants: [
              "drohnen",
              "abnutzungskrieg",
              "schützengräben",
              "frontalltag",
              "materialschlacht"
            ]
          },
          {
            label: "Flucht, Leid oder humanitäre Folgen",
            variants: [
              "flucht",
              "leid",
              "zivilisten",
              "humanitär",
              "vertriebene",
              "opfer"
            ]
          }
        ],
        successThreshold: 2,
        modelAnswer:
          "Zum Krieg seit 2022 gehören Angriffe auf Städte und Infrastruktur, ein langer Abnutzungskrieg mit Drohnen und schwere Folgen für die Zivilbevölkerung."
      },
      {
        id: "q-fed-3",
        type: "drag-order",
        challenge: "Chronologie",
        prompt:
          "Ordne die zentralen Entwicklungsschritte von der Krim 2014 bis zum Großangriff und seinen Folgen.",
        help:
          "Beginne mit 2014 und ende beim langen Abnutzungskrieg.",
        sourceIds: ["r-fed-federation", "r-fed-overfall", "r-fed-worldview", "r-fed-britannica"],
        items: [
          {
            id: "crimea-2014",
            label: "Russland annektiert 2014 die Krim.",
            detail: "Der Konflikt eskaliert damit offen auf territorialer Ebene."
          },
          {
            id: "donbas-2014",
            label: "Im Donbas beginnt ein langwieriger Krieg mit russischer Unterstützung für Separatisten.",
            detail: "Die Ostukraine wird zum dauerhaften Krisenraum."
          },
          {
            id: "recognition-2022",
            label: "Am 21. Februar 2022 erkennt Russland die 'Volksrepubliken' Donezk und Luhansk an.",
            detail: "Damit wird die Eskalation unmittelbar vor der Vollinvasion zugespitzt."
          },
          {
            id: "invasion-2022",
            label: "Am 24. Februar 2022 beginnt der russische Großangriff auf die Ukraine.",
            detail: "Raketenangriffe und Bodenoffensiven setzen gleichzeitig ein."
          },
          {
            id: "kyiv-2022",
            label: "Der schnelle Vorstoß auf Kyjiw scheitert, russische Truppen ziehen sich aus der Region zurück.",
            detail: "Der Krieg wird länger und anders als ursprünglich geplant."
          },
          {
            id: "attrition-war",
            label: "Drohnen, Stellungskrieg und Abnutzung prägen den weiteren Kriegsverlauf.",
            detail: "Der Krieg verfestigt sich als langwieriger Zermürbungskrieg."
          }
        ],
        correctOrder: [
          "crimea-2014",
          "donbas-2014",
          "recognition-2022",
          "invasion-2022",
          "kyiv-2022",
          "attrition-war"
        ],
        explanation:
          "Die Reihenfolge zeigt: 2022 war ein Wendepunkt, aber kein Anfang aus dem Nichts. Aus dem geplanten schnellen Sieg wurde ein langer Abnutzungskrieg."
      },
      {
        id: "q-fed-4",
        type: "short-text",
        challenge: "Akteursanalyse",
        prompt:
          "Warum ist der Blick nach innen auf Russland wichtig, um den Krieg gegen die Ukraine zu verstehen?",
        help:
          "Gehe auf Zustimmung, Angst, Repression oder Propaganda ein.",
        placeholder: "Der Blick nach innen ist wichtig, weil ...",
        sourceIds: ["r-fed-inside-russia", "r-fed-zdf", "r-fed-putin", "r-fed-frontal", "r-fed-worldview"],
        conceptGroups: [
          {
            label: "Propaganda oder staatliche Deutung",
            variants: [
              "propaganda",
              "staatliche deutung",
              "fernsehen",
              "erzählung",
              "desinformation"
            ]
          },
          {
            label: "Repression oder Angst",
            variants: [
              "repression",
              "angst",
              "zensur",
              "verfolgung",
              "strafen",
              "unterdrückung"
            ]
          },
          {
            label: "Zustimmung, Anpassung oder Mobilisierung",
            variants: [
              "zustimmung",
              "anpassung",
              "mobilisierung",
              "loyalität",
              "gesellschaft"
            ]
          }
        ],
        successThreshold: 2,
        modelAnswer:
          "Der Blick nach innen ist wichtig, weil der Krieg auch durch Propaganda, Repression und Anpassung in Russland mitgetragen wird. Zustimmung, Angst und Mobilisierung beeinflussen, wie lange Russland weiterkämpfen kann."
      },
      {
        id: "q-fed-5",
        type: "short-text",
        challenge: "Transfer",
        prompt:
          "Wie greifen historische Ansprüche, Propaganda und militärische Gewalt im Angriff auf die Ukraine ineinander?",
        help:
          "Zeige, wie Geschichtsbilder, Propaganda und Krieg zusammenhängen.",
        placeholder: "Sie greifen ineinander, weil ...",
        sourceIds: [
          "r-fed-federation",
          "r-fed-overfall",
          "r-fed-worldview",
          "r-fed-inside-russia",
          "r-fed-putin",
          "r-fed-frontal",
          "r-fed-un"
        ],
        conceptGroups: [
          {
            label: "historische Narrative oder imperiale Ansprüche",
            variants: [
              "historische narrative",
              "imperiale ansprüche",
              "geschichte",
              "russische welt",
              "vergangenheit"
            ]
          },
          {
            label: "Propaganda legitimiert oder begleitet Gewalt",
            variants: [
              "propaganda",
              "legitimiert",
              "rechtfertigt",
              "begleitet",
              "begründet den krieg"
            ]
          },
          {
            label: "militärische Gewalt trifft reale Menschen und Räume",
            variants: [
              "militärische gewalt",
              "angriffe",
              "zivilisten",
              "zerstörung",
              "front",
              "ukraine"
            ]
          }
        ],
        successThreshold: 2,
        modelAnswer:
          "Sie greifen ineinander, weil historische Ansprüche den Krieg vorbereiten, Propaganda ihn rechtfertigt und militärische Gewalt daraus Zerstörung, Besatzung und Leid macht."
      }
    ]
  }
];

window.UKRAINE_ATTACK_MODULES = MODULES;
