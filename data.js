const MODULES = [
  {
    id: "zarenreich",
    step: "1",
    title: "Vorgeschichte im Zarenreich",
    era: "18. Jahrhundert bis 1917",
    intro:
      "Diese Auftaktstation rückt die imperiale Vorgeschichte in den Blick: die Ausweitung russischer Herrschaft, den Verlust ukrainischer Autonomieräume, die Annexion der Krim 1783 und die Frage, wie historische Herrschaft heute politisch umgedeutet wird.",
    goal:
      "Du kannst erklären, warum der Krieg gegen die Ukraine nicht erst 2022 verständlich wird und welche imperialen Deutungsmuster aus dem Zarenreich bis heute nachwirken.",
    route:
      "Starte mit der Dropbox-Folge zum Zarenreich, sichere dann mit dem Terra-X-Überblick die großen Linien und nutze die Doku zum Grenzraum Ukraine für den Perspektivwechsel. Die Fragen führen von Grundwissen über Chronologie zur Transferdeutung.",
    teacherNote:
      "Wichtig ist, die imperiale Vorgeschichte als Deutungsrahmen zu nutzen, ohne eine automatische Zwangslinie bis 2022 zu behaupten. Die Lernenden sollen Kontinuitäten erkennen, aber ebenso Brüche und ukrainische Eigenständigkeit ernst nehmen.",
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
          "Nenne mindestens zwei historische Vorebenen, die älter sind als die Vollinvasion.",
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
          "Es ist irreführend, erst 2022 zu beginnen, weil der Krieg ältere imperiale Konfliktlinien aufgreift. Schon im Zarenreich ging es um Herrschaft, Autonomieverlust, die Bedeutung der Krim und um den Versuch, ukrainische Eigenständigkeit kleinzuhalten."
      },
      {
        id: "mq-zarenreich-2",
        title: "Krim als Symbolraum",
        type: "short-text",
        challenge: "Zusatzcheck",
        prompt:
          "Warum ist die Krim historisch und politisch ein besonders aufgeladener Raum?",
        help:
          "Verbinde Annexion, strategische Lage und Symbolik.",
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
          "Die Krim ist besonders aufgeladen, weil sie 1783 vom Zarenreich annektiert wurde, am Schwarzen Meer strategisch wichtig ist und bis heute als Symbolraum für imperiale Ansprüche, Erinnerung und politische Legitimation dient."
      }
    ],
    resources: [
      {
        id: "r-tsar-dropbox",
        bucket: "Pflichtfilme: zuerst bearbeiten",
        type: "Video",
        title: "Russlands Kriege - Das Zarenreich (Folge 1)",
        focus:
          "Imperiale Expansion, Herrschaft über ukrainische Räume und die lange Vorgeschichte heutiger Ansprüche.",
        link: "https://www.dropbox.com/scl/fi/mjmj9oigtqntctu048cam/Russlands-Kriege-Das-Zarenreich-Folge-1.mp4?rlkey=a2l2x03572yh2ur6kfqk99u2s&st=0e95wbtb&dl=0",
        tags: ["Dropbox", "Pflicht", "Grundlage"],
        selectionNote:
          "Das Video bildet die Leitspur der Station und liefert die historische Tiefendimension vor 1917.",
        didacticUse:
          "Immer zuerst einsetzen, damit spätere Deutungen nicht im luftleeren Raum stehen."
      },
      {
        id: "r-tsar-terrax",
        bucket: "Pflichtfilme: zuerst bearbeiten",
        type: "Video",
        title: "Der Ukraine-Konflikt: Die Geschichte dahinter",
        focus:
          "Historischer Überblick zu Konfliktlinien, Identitätsfragen und russisch-ukrainischen Deutungen.",
        link: "https://www.youtube.com/watch?v=CWhoALa6bTU",
        tags: ["YouTube", "Pflicht", "Überblick"],
        selectionNote:
          "Hilfreich, weil der Film die lange Vorgeschichte in eine verständliche Gesamterzählung ordnet.",
        didacticUse:
          "Nach der Dropbox-Folge als strukturierende Sicherung einsetzen."
      },
      {
        id: "r-tsar-borderland",
        bucket: "Pflichtfilme: zuerst bearbeiten",
        type: "Video",
        title: "(Doku in HD) Ukraine - Grenzland zwischen Ost und West",
        focus:
          "Mehrfachzugehörigkeiten, Grenzlage und die Gefahr vereinfachender Ost-West-Bilder.",
        link: "https://www.youtube.com/watch?v=IjBoAqXhFCM",
        tags: ["YouTube", "Pflicht", "Perspektive"],
        selectionNote:
          "Wichtig, um die Ukraine nicht nur aus russischer Perspektive zu betrachten.",
        didacticUse:
          "Als Perspektivwechsel vor den Transferfragen einsetzen."
      },
      {
        id: "r-tsar-britannica",
        bucket: "Zusatzquellen: Kontext und Vertiefung",
        type: "Website",
        title: "Britannica: Ukraine under direct imperial Russian rule",
        focus:
          "Sachlicher Überblick zu Autonomieverlust, zarischer Verwaltung, Kolonisierung und imperialer Herrschaft über ukrainische Gebiete.",
        link: "https://www.britannica.com/place/Ukraine/Ukraine-under-direct-imperial-Russian-rule",
        tags: ["Britannica", "Kontext"],
        selectionNote:
          "Gut als knappe Nachschlagequelle, wenn Begriffe wie Hetmanat, Neurussland oder Russifizierung geklärt werden sollen.",
        didacticUse:
          "Für genauere Begriffsarbeit und zur Stütze offener Antworten."
      },
      {
        id: "r-tsar-crimea",
        bucket: "Zusatzquellen: Kontext und Vertiefung",
        type: "Website",
        title: "Britannica: Crimea - History",
        focus:
          "Historischer Überblick zur Krim, zu Annexion, Mehrfachherrschaften und späteren politischen Bedeutungen.",
        link: "https://www.britannica.com/place/Crimea/History",
        tags: ["Britannica", "Krim"],
        selectionNote:
          "Hilfreich, weil die Krim in politischen Debatten oft verkürzt oder entkontextualisiert auftaucht.",
        didacticUse:
          "Vor allem für Zusatzcheck 2 und die Transferfrage geeignet."
      },
      {
        id: "r-tsar-arte-crimea",
        bucket: "Zusatzquellen: Kontext und Vertiefung",
        type: "Video",
        title: "Ukraine-Russland: Die Bedeutung der Krim | Mit offenen Karten | ARTE",
        focus:
          "Historische und geopolitische Bedeutung der Krim als Raum zwischen Strategie, Herrschaft und Symbolpolitik.",
        link: "https://www.youtube.com/watch?v=g_V--Mbq93Y",
        tags: ["YouTube", "Krim", "ARTE"],
        selectionNote:
          "Sehr passend, weil das Video die Krim knapp und anschaulich als Schlüsselraum des Konflikts erklärt.",
        didacticUse:
          "Direkt für Krim-Fragen, Wiederholung und die Brücke von imperialer Vorgeschichte zur Gegenwart nutzbar."
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
          "Verbinde den Gegenwartskrieg mit mindestens zwei älteren historischen Ebenen.",
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
          "Die Lernlandschaft beginnt früher, weil Russlands Angriff auf die Ukraine ältere imperiale Konfliktlinien aufgreift. Schon im Zarenreich gingen ukrainische Autonomieräume verloren, es gab Russifizierungsdruck und bis heute werden politische Ansprüche mit Geschichte begründet."
      },
      {
        id: "q-zar-2",
        type: "short-text",
        challenge: "Einordnung",
        prompt:
          "Nenne drei Merkmale der zarischen Herrschaft über ukrainische Gebiete.",
        help:
          "Geeignet sind Aussagen zu Macht, Raum, Sprache oder Autonomie.",
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
          "Zur zarischen Herrschaft gehörten imperiale Expansion, der Abbau ukrainischer Autonomie und Russifizierungsdruck, etwa über Verwaltung, Sprachpolitik und die politische Aufwertung imperialer Räume wie der Krim."
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
          "Die Reihenfolge zeigt, dass der Krieg nicht nur mit aktuellen Frontlinien zu tun hat, sondern mit älteren Prozessen von Herrschaft, Raumkontrolle und kultureller Politik."
      },
      {
        id: "q-zar-4",
        type: "short-text",
        challenge: "Perspektivwechsel",
        prompt:
          "Warum ist die Formel von der Ukraine als 'Grenzland zwischen Ost und West' hilfreich, aber auch problematisch?",
        help:
          "Eine gute Antwort nennt einen Erkenntnisgewinn und eine klare Grenze der Formel.",
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
          "Die Formel ist hilfreich, weil sie verschiedene historische Einflüsse sichtbar macht. Problematisch ist sie, weil sie die Ukraine leicht als bloßen Zwischenraum erscheinen lässt und damit ihre eigene politische und kulturelle Eigenständigkeit verkürzt."
      },
      {
        id: "q-zar-5",
        type: "short-text",
        challenge: "Transfer",
        prompt:
          "Wie hilft die imperiale Vorgeschichte beim Verständnis des heutigen Krieges, ohne alles als zwangsläufige Kontinuität darzustellen?",
        help:
          "Verbinde Kontinuitäten, Brüche und die Eigenständigkeit der Ukraine.",
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
          "Die imperiale Vorgeschichte hilft, weil sie ältere Herrschaftsmuster und Ansprüche sichtbar macht. Zugleich darf man daraus keine zwangsläufige Linie ableiten, denn ukrainische Eigenständigkeit, sowjetische Erfahrungen und die Politik des 21. Jahrhunderts verändern den Zusammenhang grundlegend."
      }
    ]
  },
  {
    id: "sowjetunion",
    step: "2",
    title: "Sowjetunion: Gewalt und Erinnerung",
    era: "1917 bis 1991",
    intro:
      "Diese Station führt von Revolution, Bürgerkrieg und Zwangseinbindung in die Sowjetunion über den Holodomor, den Zweiten Weltkrieg und die Nachkriegsordnung bis zur ukrainischen Unabhängigkeit 1991. Sie fragt zugleich, wie die sowjetische Vergangenheit bis heute politisch benutzt wird.",
    goal:
      "Du kannst erklären, warum sowjetische Gewalt- und Erinnerungsgeschichte für das Verständnis des heutigen Krieges zentral ist.",
    route:
      "Arbeite zuerst mit der Dropbox-Folge zur Sowjetunion, sichere dann mit Terra X die politische Instrumentalisierung von Geschichte und nutze die Zusatzquellen für Holodomor und Nachkriegsordnung. Die Fragen verbinden Erfahrungsgeschichte und Erinnerungspolitik.",
    teacherNote:
      "Entscheidend ist hier die Doppelbewegung: Die Ukraine war Teil der Sowjetunion, zugleich aber Ort spezifischer Gewalt- und Erinnerungserfahrungen. Die Lernenden sollen verstehen, dass 'gemeinsame Geschichte' nie automatisch identische Erinnerung bedeutet.",
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
          "Verbinde menschliche Katastrophe, politische Verantwortung und Erinnerung.",
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
          "Der Holodomor spielt bis heute eine große Rolle, weil er eine von der Sowjetmacht verschärfte Hungerkatastrophe mit Millionen Opfern war. Er prägt die ukrainische Erinnerung als Erfahrung extremer Gewalt und politischer Fremdherrschaft."
      },
      {
        id: "mq-soviet-2",
        title: "Geschichte als Waffe",
        type: "short-text",
        challenge: "Zusatzcheck",
        prompt:
          "Warum ist der Ausdruck 'Geschichte als Waffe' für Putins Ukraine-Politik treffend?",
        help:
          "Nenne mindestens zwei Weisen, wie Vergangenheit politisch eingesetzt wird.",
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
          "Der Ausdruck passt, weil Vergangenheit selektiv erzählt und für die Gegenwart nutzbar gemacht wird. Besonders der Zweite Weltkrieg und der antifaschistische Mythos dienen dazu, heutige Gewalt gegen die Ukraine politisch zu rechtfertigen."
      }
    ],
    resources: [
      {
        id: "r-soviet-dropbox",
        bucket: "Pflichtfilme: zuerst bearbeiten",
        type: "Video",
        title: "Russlands Kriege - Die Sowjetunion (Folge 2)",
        focus:
          "Sowjetische Gewaltgeschichte, Herrschaft über die Ukraine und die langen Nachwirkungen bis 1991.",
        link: "https://www.dropbox.com/scl/fi/u7u5jdh9z27a7h3qvqkzz/Russlands-Kriege-Die-Sowjetunion-Folge-2.mp4?rlkey=ywv6t3ou6u6zgvl0uxnhhtjqz&st=62wchb1h&dl=0",
        tags: ["Dropbox", "Pflicht", "Grundlage"],
        selectionNote:
          "Das Material bildet die Hauptspur der Station und verbindet Gewaltgeschichte mit politischem Deutungswissen.",
        didacticUse:
          "Als Auftakt, damit spätere Spezialquellen begrifflich eingeordnet werden können."
      },
      {
        id: "r-soviet-terrax",
        bucket: "Pflichtfilme: zuerst bearbeiten",
        type: "Video",
        title: "Putins Krieg - Geschichte als Waffe | Terra X",
        focus:
          "Politische Instrumentalisierung von Erinnerung, besonders des sowjetischen Siegesnarrativs.",
        link: "https://www.youtube.com/watch?v=vn3QyKxSvTo",
        tags: ["YouTube", "Pflicht", "Erinnerungspolitik"],
        selectionNote:
          "Hilfreich, weil der Film Vergangenheit und Gegenwart direkt miteinander verschränkt.",
        didacticUse:
          "Nach dem Überblick einsetzen, um die politische Funktion von Geschichte sichtbar zu machen."
      },
      {
        id: "r-soviet-holodomor",
        bucket: "Zusatzquellen: Kontext und Vertiefung",
        type: "Website",
        title: "bpb: 80 Jahre Holodomor - die Große Hungersnot in der Ukraine",
        focus:
          "Analytischer Überblick zu Ursachen, Verlauf und Erinnerung des Holodomor.",
        link: "https://www.bpb.de/themen/europa/ukraine-analysen/174179/analyse-80-jahre-holodomor-die-grosse-hungersnot-in-der-ukraine/",
        tags: ["bpb", "Holodomor"],
        selectionNote:
          "Gut geeignet, um die Hungersnot sachlich und erinnerungspolitisch einzuordnen.",
        didacticUse:
          "Für präzisere Antworten zu Gewaltgeschichte und Gedenken."
      },
      {
        id: "r-soviet-britannica",
        bucket: "Zusatzquellen: Kontext und Vertiefung",
        type: "Website",
        title: "Britannica: Holodomor",
        focus:
          "Knappe Übersicht zu Zwangskollektivierung, Hungersnot 1932/33 und politischer Verantwortung.",
        link: "https://www.britannica.com/event/Holodomor",
        tags: ["Britannica", "Kontext"],
        selectionNote:
          "Nützlich als kompakte Stütze für grundlegende Begriffe und Ursachen.",
        didacticUse:
          "Als Nachschlagequelle für den Zusatzcheck oder Wiederholung."
      },
      {
        id: "r-soviet-postwar",
        bucket: "Zusatzquellen: Kontext und Vertiefung",
        type: "Website",
        title: "Britannica: Soviet Ukraine in the postwar period",
        focus:
          "Überblick zur Nachkriegsordnung, zur Krim 1954 und zur Stellung der Ukraine in der Sowjetunion.",
        link: "https://www.britannica.com/place/Ukraine/Soviet-Ukraine-in-the-postwar-period",
        tags: ["Britannica", "Nachkriegsordnung"],
        selectionNote:
          "Hilfreich, um 1945, 1954 und die späte Sowjetzeit von der Gegenwart zu unterscheiden.",
        didacticUse:
          "Vor allem für die Chronologie und Transferfrage geeignet."
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
          "Verbinde Gewaltgeschichte, Erinnerung und Staatswerdung.",
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
          "Die sowjetische Phase ist unverzichtbar, weil die Ukraine Teil sowjetischer Herrschaft war, dabei aber eigene Gewalterfahrungen wie den Holodomor machte. Diese Erfahrungen prägen Erinnerung, Identität und die Bedeutung der Unabhängigkeit von 1991 bis heute."
      },
      {
        id: "q-soviet-2",
        type: "short-text",
        challenge: "Folgenanalyse",
        prompt:
          "Nenne drei sowjetische Erfahrungen, die bis heute das ukrainische Geschichtsbewusstsein prägen.",
        help:
          "Geeignet sind Erfahrungen von Gewalt, Krieg, Herrschaft oder Staatswerdung.",
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
          "Prägend waren zum Beispiel der Holodomor und andere stalinistische Gewalterfahrungen, die Kriegs- und Besatzungserfahrungen des Zweiten Weltkriegs sowie die Unabhängigkeit von 1991 als Bruch mit der Sowjetunion."
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
          "Die Chronologie macht sichtbar, dass sowjetische Geschichte nicht nur ein Hintergrundrauschen ist. Sie prägt Gewalt, Erinnerung, Territorialfragen und die Bedeutung von 1991 bis heute."
      },
      {
        id: "q-soviet-4",
        type: "short-text",
        challenge: "Strukturverständnis",
        prompt:
          "Warum ist die Formel 'Geschichte als Waffe' für den Umgang mit der sowjetischen Vergangenheit so treffend?",
        help:
          "Erkläre, wie Erinnerung politisch zuspitzt und nicht nur beschreibt.",
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
          "Die Formel ist treffend, weil Vergangenheit nicht neutral erzählt, sondern selektiv zugespitzt wird. Besonders der Zweite Weltkrieg und der antifaschistische Mythos werden benutzt, um heutige Politik und Gewalt gegen die Ukraine zu legitimieren."
      },
      {
        id: "q-soviet-5",
        type: "short-text",
        challenge: "Transfer",
        prompt:
          "Wie verbindet und trennt die Sowjetgeschichte Ukraine und Russland zugleich?",
        help:
          "Nenne mindestens zwei verbindende und zwei trennende Aspekte in knapper Form.",
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
          "Die Sowjetgeschichte verbindet beide Länder durch gemeinsame Institutionen und Kriegserfahrungen. Sie trennt sie aber durch unterschiedliche Erinnerungen an Gewalt wie den Holodomor und durch den Bruch von 1991, in dem die Ukraine ihre eigene staatliche Souveränität behauptete."
      }
    ]
  },
  {
    id: "foederation",
    step: "3",
    title: "Russische Föderation und Großangriff",
    era: "1991 bis Gegenwart",
    intro:
      "Diese Station untersucht die Phase seit dem Zerfall der Sowjetunion: ukrainische Unabhängigkeit, die Eskalation seit 2014, den russischen Großangriff vom 24. Februar 2022, den Krieg im Donbas, den Blick nach innen auf Russland und die Frage, wie historische Narrative, Propaganda und militärische Gewalt zusammenwirken.",
    goal:
      "Du kannst erklären, warum der Großangriff vom 24. Februar 2022 eine Eskalation eines älteren Konflikts ist und wie Herrschaftsnarrative, Kriegsalltag und russische Innenpolitik zusammenhängen.",
    route:
      "Nutze zuerst die Dropbox-Folge zur Russischen Föderation, ordne dann mit Terra X die Eskalation seit 2014 und arbeite danach mit Reportagen zu Donbas, Frontalltag, Putins Herrschaft, russischer Gesellschaft und ukrainischem Geheimdienst. Die Fragen führen von Chronologie zu Deutung.",
    teacherNote:
      "Die Station sollte nicht in reiner Ereignisberichterstattung steckenbleiben. Zentral ist die Verbindung aus imperialen Ansprüchen, militärischer Gewalt, Propaganda, Zustimmung, Angst und der Erfahrung der Angegriffenen.",
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
          "Nenne mindestens zwei Ereignisse oder Konfliktlinien seit 2014.",
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
          "Der 24. Februar 2022 ist eine Eskalation, weil Russland schon 2014 die Krim annektierte und im Donbas Krieg führte. Neu war 2022 der offene Großangriff auf die ganze Ukraine mit mehreren Fronten und neuen Kriegszielen."
      },
      {
        id: "mq-fed-2",
        title: "Krieg und russische Gesellschaft",
        type: "short-text",
        challenge: "Zusatzcheck",
        prompt:
          "Was bedeutet die Aussage, Russland führe Krieg gegen die Ukraine und zugleich gegen das eigene Volk?",
        help:
          "Verbinde Außenkrieg mit Repression, Propaganda oder Angst im Innern.",
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
          "Die Aussage bedeutet, dass Russland nicht nur die Ukraine militärisch angreift, sondern im Innern auch mit Repression, Propaganda und Angst arbeitet. Mobilisierung, Zensur und Druck treffen damit auch die eigene Gesellschaft."
      }
    ],
    resources: [
      {
        id: "r-fed-federation",
        bucket: "Pflichtfilme: zuerst bearbeiten",
        type: "Video",
        title: "Russlands Kriege - Die Russische Föderation (Folge 3)",
        focus:
          "Entwicklung seit 1991, russische Kriegspolitik und die Eskalation bis zum Angriff auf die Ukraine.",
        link: "https://www.dropbox.com/scl/fi/g9j4f70x6motd9rjej8s1/Russlands-Kriege-Die-Russische-F-deration-Folge-3.mp4?rlkey=m37eesf5bm3dkv6sul4tk0156&st=lu0cxtf4&dl=0",
        tags: ["Dropbox", "Pflicht", "Grundlage"],
        selectionNote:
          "Leitvideo der Station, weil es die postsowjetische Entwicklung zusammenzieht.",
        didacticUse:
          "Zuerst einsetzen, um 1991, 2014 und 2022 sauber zu unterscheiden."
      },
      {
        id: "r-fed-overfall",
        bucket: "Pflichtfilme: zuerst bearbeiten",
        type: "Video",
        title: "Ukraine-Krieg: Geschichte eines Überfalls | Terra X",
        focus:
          "Historische Einordnung der Vollinvasion und der politischen Deutungsmuster dahinter.",
        link: "https://www.youtube.com/watch?v=UePfUdY1i1w",
        tags: ["YouTube", "Pflicht", "Überblick"],
        selectionNote:
          "Stark, weil der Film Vorgeschichte, Angriff und Deutungsrahmen direkt verbindet.",
        didacticUse:
          "Nach der Dropbox-Folge als Überblick und Sicherung verwenden."
      },
      {
        id: "r-fed-worldview",
        bucket: "Pflichtfilme: zuerst bearbeiten",
        type: "Video",
        title: "Drohnen, Angst und Desertion - Eine Reise durch den Krieg in der Ukraine | Weltspiegel",
        focus:
          "Frontalltag, Abnutzungskrieg, Drohnen und Belastungen auf beiden Seiten.",
        link: "https://www.youtube.com/watch?v=cbeZ82HGsUs",
        tags: ["YouTube", "Pflicht", "Gegenwart"],
        selectionNote:
          "Wichtig, damit der Krieg nicht nur als Strategie, sondern auch als konkrete Lebensrealität erscheint.",
        didacticUse:
          "Vor allem für Frage 2 und die Transferaufgabe nutzen."
      },
      {
        id: "r-fed-donbas",
        bucket: "Pflichtfilme: zuerst bearbeiten",
        type: "Video",
        title: "Ukraine: Donbass, auf Leben und Tod | ARTE Reportage",
        focus:
          "Kriegsrealität im Donbas und die Langzeitdimension des Konflikts im Osten der Ukraine.",
        link: "https://www.youtube.com/watch?v=F0hFqpE9gUU",
        tags: ["YouTube", "Pflicht", "Donbas"],
        selectionNote:
          "Hilfreich, weil der Donbas oft auf Schlagwörter reduziert wird, obwohl er ein eigener Erfahrungsraum des Krieges ist.",
        didacticUse:
          "Für die Unterscheidung von 2014 und 2022 sowie für Perspektivwechsel geeignet."
      },
      {
        id: "r-fed-mariupol",
        bucket: "Zusatzquellen: Kontext und Vertiefung",
        type: "Video",
        title: "Gefangen im Stahlwerk - der Kampf um Mariupol",
        focus:
          "Belagerung, Zerstörung und Durchhalteerfahrung in Mariupol als Verdichtung des Krieges gegen Städte und Zivilbevölkerung.",
        link: "https://www.youtube.com/watch?v=WxskcVCpcDo",
        tags: ["YouTube", "Mariupol", "Belagerung"],
        selectionNote:
          "Wichtig, weil Mariupol exemplarisch zeigt, wie stark der Krieg urbane Räume, Infrastruktur und Menschenleben trifft.",
        didacticUse:
          "Besonders nützlich für die Frage nach Kriegsmerkmalen seit 2022 und für die menschliche Dimension der Transferarbeit."
      },
      {
        id: "r-fed-inside-russia",
        bucket: "Zusatzquellen: Kontext und Vertiefung",
        type: "Video",
        title: "Inside Russia: Im Krieg gegen die Ukraine und das eigene Volk | SPIEGEL TV",
        focus:
          "Repression, Propaganda und die Wirkung des Krieges auf die russische Gesellschaft.",
        link: "https://www.youtube.com/watch?v=0CwMC3beBTc",
        tags: ["YouTube", "Russland innen"],
        selectionNote:
          "Zeigt, dass man den Krieg nicht nur an der Front, sondern auch im Innern Russlands verstehen muss.",
        didacticUse:
          "Vor allem für Zusatzcheck 2 und Frage 4 nutzen."
      },
      {
        id: "r-fed-zdf",
        bucket: "Zusatzquellen: Kontext und Vertiefung",
        type: "Video",
        title: "Ja zum Ukraine-Krieg: Warum die Mehrheit der Russen hinter Putin steht | ZDFzeit",
        focus:
          "Zustimmung, Anpassung, Angst und politische Loyalität in Russland.",
        link: "https://www.youtube.com/watch?v=h2U8tscdDLE",
        tags: ["YouTube", "Gesellschaft"],
        selectionNote:
          "Hilfreich, um Zustimmung nicht vorschnell mit freier Überzeugung gleichzusetzen.",
        didacticUse:
          "Für Diskussionen über Zustimmung, Propaganda und Handlungsspielräume geeignet."
      },
      {
        id: "r-fed-putin",
        bucket: "Zusatzquellen: Kontext und Vertiefung",
        type: "Video",
        title: "Putin - Seine 5 Wege zur Macht | Terra X",
        focus:
          "Herrschaftsaufbau Putins, Machttechniken und politische Entwicklung Russlands seit den 1990er Jahren.",
        link: "https://www.youtube.com/watch?v=rPel1QVBSJU",
        tags: ["YouTube", "Putin", "Herrschaft"],
        selectionNote:
          "Stark, weil das Video die Person Putin nicht isoliert psychologisch erklärt, sondern als Produkt und Gestalter eines politischen Systems zeigt.",
        didacticUse:
          "Besonders passend für die Fragen zu innenpolitischer Herrschaft, Propaganda und langfristiger Kriegsfähigkeit."
      },
      {
        id: "r-fed-frontal",
        bucket: "Zusatzquellen: Kontext und Vertiefung",
        type: "Video",
        title: "Töten für ein mächtiges Russland I frontal",
        focus:
          "Militarisierung, ideologische Mobilisierung und die Verknüpfung von Herrschaftsnarrativen mit konkreter Gewalt.",
        link: "https://www.youtube.com/watch?v=_aWesw9o7Ng",
        tags: ["YouTube", "Mobilisierung", "Gewalt"],
        selectionNote:
          "Hilfreich, weil das Video die Brücke zwischen Ideologie, soldatischer Motivation und Kriegswirklichkeit sichtbar macht.",
        didacticUse:
          "Gut geeignet für die Schlussphase der Station und für Transferfragen zu Propaganda und Gewalt."
      },
      {
        id: "r-fed-intercepts",
        bucket: "Zusatzquellen: Kontext und Vertiefung",
        type: "Video",
        title: "Abgehört vom ukrainischen Geheimdienst | ARTE",
        focus:
          "Abgehörte Gespräche als Einblick in Gewaltwahrnehmung, Kriegsmentalität und Kommunikation.",
        link: "https://www.youtube.com/watch?v=9ef0rNgRi2k",
        tags: ["YouTube", "Quellenblick"],
        selectionNote:
          "Spannend, weil hier eine besondere Quellengattung kritisch gelesen werden kann.",
        didacticUse:
          "Vor allem im Lehrpersonenmodus für Quellengespräche und Einordnungen nützlich."
      },
      {
        id: "r-fed-un",
        bucket: "Zusatzquellen: Kontext und Vertiefung",
        type: "Website",
        title: "UN: Aggression against Ukraine (A/RES/ES-11/1)",
        focus:
          "Resolution der UN-Generalversammlung vom 2. März 2022 zur Aggression gegen die Ukraine.",
        link: "https://digitallibrary.un.org/record/3965290?ln=en",
        tags: ["UN", "Offizielle Quelle"],
        selectionNote:
          "Ermöglicht den Vergleich zwischen internationaler völkerrechtlicher Einordnung und russischer Selbstdeutung.",
        didacticUse:
          "Für Quellenkritik und die politische Einordnung des Angriffs geeignet."
      },
      {
        id: "r-fed-britannica",
        bucket: "Zusatzquellen: Kontext und Vertiefung",
        type: "Website",
        title: "Britannica: Russia-Ukraine War",
        focus:
          "Kompakter Überblick zu 2014, dem 24. Februar 2022, der Schlacht um Kyjiw und dem weiteren Kriegsverlauf.",
        link: "https://www.britannica.com/event/2022-Russian-invasion-of-Ukraine",
        tags: ["Britannica", "Chronologie"],
        selectionNote:
          "Nützlich als zeitliche Stütze, wenn 2014 und 2022 sauber getrennt werden sollen.",
        didacticUse:
          "Vor allem für die Chronologie und Wiederholung der Grunddaten geeignet."
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
          "Nenne zwei Vorerfahrungen seit 2014 und benenne, was 2022 neu war.",
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
          "Der 24. Februar 2022 ist eine Eskalation, weil Russland schon 2014 die Krim annektierte und im Donbas Krieg führte. Neu war 2022 der offene Großangriff auf die gesamte Ukraine mit mehreren Fronten und dem Versuch, die politische Ordnung des Landes gewaltsam zu brechen."
      },
      {
        id: "q-fed-2",
        type: "short-text",
        challenge: "Folgenanalyse",
        prompt:
          "Nenne drei Merkmale des Krieges gegen die Ukraine seit 2022.",
        help:
          "Geeignet sind militärische, gesellschaftliche oder humanitäre Merkmale.",
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
          "Merkmale des Krieges sind Angriffe auf Städte und Infrastruktur, ein langer Abnutzungskrieg mit Drohnen und Frontalltag sowie massive humanitäre Folgen für Zivilistinnen und Zivilisten."
      },
      {
        id: "q-fed-3",
        type: "drag-order",
        challenge: "Chronologie",
        prompt:
          "Ordne die zentralen Entwicklungsschritte von der Krim 2014 bis zum Großangriff und seinen Folgen.",
        help:
          "Beginne mit 2014 und ende mit dem langwierigen Abnutzungskrieg nach dem Scheitern des schnellen Vorstoßes.",
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
          "Die Reihenfolge zeigt, dass 2022 ein Wendepunkt, aber kein Startpunkt aus dem Nichts war. Sie macht zugleich sichtbar, wie aus einem geplanten schnellen Sieg ein langer Abnutzungskrieg wurde."
      },
      {
        id: "q-fed-4",
        type: "short-text",
        challenge: "Akteursanalyse",
        prompt:
          "Warum ist der Blick nach innen auf Russland wichtig, um den Krieg gegen die Ukraine zu verstehen?",
        help:
          "Verbinde Zustimmung, Angst, Repression oder Propaganda.",
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
          "Der Blick nach innen ist wichtig, weil der Krieg auch durch Propaganda, Repression und soziale Anpassung im Innern getragen wird. Zustimmung, Angst und Mobilisierung beeinflussen, wie lange Russland den Krieg fortsetzen kann."
      },
      {
        id: "q-fed-5",
        type: "short-text",
        challenge: "Transfer",
        prompt:
          "Wie greifen historische Ansprüche, Propaganda und militärische Gewalt im Angriff auf die Ukraine ineinander?",
        help:
          "Nenne mindestens zwei Verbindungslinien zwischen Erzählung und Kriegspraxis.",
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
          "Sie greifen ineinander, weil historische Ansprüche und verzerrte Geschichtsbilder den Krieg rhetorisch vorbereiten, Propaganda ihn legitimiert und militärische Gewalt diese Erzählungen in konkrete Zerstörung, Besatzung und Leid übersetzt."
      }
    ]
  }
];

window.UKRAINE_ATTACK_MODULES = MODULES;
