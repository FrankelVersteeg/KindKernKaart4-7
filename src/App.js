import React, { useState, useEffect } from 'react';
import './App.css';

const ScoreButton = ({ score, selected, onSelect }) => {
  return (
    <button
      onClick={() => onSelect(score)}
      style={{
        padding: '10px 20px',
        margin: '0 5px',
        borderRadius: '20px',
        border: 'none',
        background: selected ? '#4285F4' : '#E8E8E8',
        color: selected ? 'white' : 'black',
        fontWeight: 'normal',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
      }}
    >
      {score}
    </button>
  );
};

const SubjectRow = ({ subject, selectedScore, onScoreSelect }) => {
  const scores = ['Weinig', 'Minder', 'Neutraal', 'Meer', 'Veel'];
  return (
    <div style={{ marginBottom: '20px', textAlign: 'center' }}>
      <h3 style={{ color: '#4285F4', marginBottom: '10px' }}>{subject}</h3>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {scores.map((score) => (
          <ScoreButton
            key={score}
            score={score}
            selected={selectedScore === score}
            onSelect={() => onScoreSelect(subject, score)}
          />
        ))}
      </div>
    </div>
  );
};

const AdviceDisplay = ({ advice }) => {
  if (!advice) return null;
  return (
    <div style={{ marginTop: '20px', textAlign: 'left' }}>
      <h3>{advice.subject}</h3>
      <ul>
        {advice.text.split('\n').filter(item => item.trim() !== '').map((item, index) => (
          <li key={index}>{item.trim().replace(/^- /, '')}</li>
        ))}
      </ul>
    </div>
  );
};

function KindKernKaart47() {
  const [scores, setScores] = useState({});
  const [allComponentsFilled, setAllComponentsFilled] = useState(false);
  const [advices, setAdvices] = useState({});
  const subjects = [
    'Ondersteuning bij sociale interacties en vriendschappen',
    'Ruimte voor zelfstandigheid en eigen keuzes',
    'Ondersteuning bij emotieregulatie',
    'Positieve communicatie en waardering',
    'Gevarieerd spel en beweging',
    'Rust en ontspanning',
    'Individuele aandacht en ondersteuning',
    'Structuur en grenzen',
    'Ondersteuning in communicatie'
  ];

  const handleScoreSelect = (subject, score) => {
    setScores(prev => ({ ...prev, [subject]: score }));
  };

  useEffect(() => {
    const allFilled = subjects.every(subject => scores[subject]);
    setAllComponentsFilled(allFilled);
  }, [scores, subjects]);

  const handleShowAdvice = () => {
    const newAdvices = {};
    subjects.forEach(subject => {
      const score = scores[subject];
      newAdvices[subject] = getAdviceForScore(subject, score);
    });
    setAdvices(newAdvices);
  };

const getAdviceForScore = (subject, score) => {
  switch (subject) {
    case 'Ondersteuning bij sociale interacties en vriendschappen':
      switch (score) {
        case 'Weinig':
          return "- Bied een veilige omgeving waar het kind zelfstandig sociale interacties kan aangaan.\n" +
                 "- Observeer sociale interacties op afstand, grijp alleen in bij ernstige conflicten.\n" +
                 "- Geef het kind de ruimte om zelf vriendschappen te vormen en onderhouden.";
        case 'Minder':
          return "- Moedig het kind aan om zelf speelafspraken te maken.\n" +
                 "- Bied lichte ondersteuning bij het oplossen van conflicten, laat het kind het eerst zelf proberen.\n" +
                 "- Creëer kansen voor sociale interactie door groepsactiviteiten aan te bieden, maar laat deelname vrijwillig.";
        case 'Neutraal':
          return "- Faciliteer dagelijks gevarieerde groepsactiviteiten die samenwerking/sociale interacties stimuleren.\n" +
                 "- Begeleid het kind bij het oplossen van conflicten door vragen te stellen en het zelf oplossingen te laten bedenken. (Wanneer de stress is gezakt)\n" +
                 "- Moedig het kind aan om anderen te helpen en complimenten te geven.\n" +
                 "- Zorg voor een balans tussen gestructureerde activiteiten en vrij spel.";
        case 'Meer':
          return "- Bied gerichte ondersteuning bij het interpreteren van sociale signalen en emoties van anderen.\n" +
                 "- Help het kind actief bij het ontwikkelen van vriendschappen door het te koppelen aan kinderen met vergelijkbare interesses.\n" +
                 "- Organiseer regelmatig activiteiten die specifiek gericht zijn op het oefenen van sociale vaardigheden.\n" +
                 "- Geef extra aandacht aan het kind die moeite heeft met het aangaan of onderhouden van vriendschappen.";
        case 'Veel':
          return "- Bied momenten van intensieve, één-op-één begeleiding bij sociale interacties, modelleer gewenst sociaal gedrag.\n" +
                 "- Creëer zeer gestructureerde sociale situaties met duidelijke rollen en verwachtingen.\n" +
                 "- Gebruik rollenspel en sociale verhalen om sociale vaardigheden expliciet te oefenen.\n" +
                 "- Bied ondersteuning bij het onderhouden van vriendschappen, help actief bij het plannen en begeleiden van speelafspraken.\n" +
                 "- Werk nauw samen met ouders om sociale vaardigheden ook buiten de BSO te ondersteunen.";
        default:
          return "Geen specifiek advies beschikbaar.";
  }
break;
case 'Ruimte voor zelfstandigheid en eigen keuzes':
  switch (score) {
    case 'Weinig':
      return "- Bied een sterk gestructureerde omgeving met duidelijke routines.\n" +
             "- Geef het kind beperkte keuzes tussen twee vooraf geselecteerde opties.\n" +
             "- Begeleid het kind bij dagelijkse taken zoals jassen ophangen of handen wassen.";
    case 'Minder':
      return "- Bied een gestructureerde omgeving met enkele momenten voor vrije keuze.\n" +
             "- Laat het kind kiezen uit een beperkt aantal activiteiten of speelmogelijkheden.\n" +
             "- Moedig het kind aan om kleine taken zelfstandig uit te voeren, maar blijf in de buurt om te helpen.";
    case 'Neutraal':
      return "- Creëer een balans tussen gestructureerde activiteiten en vrije keuzemomenten.\n" +
             "- Bied een gevarieerd aanbod van activiteiten waaruit het kind kan kiezen.\n" +
             "- Stimuleer het kind om zelfstandig dagelijkse taken uit te voeren, zoals opruimen of fruit pakken.\n" +
             "- Laat het kind binnen veilige grenzen experimenteren met nieuwe vaardigheden.";
    case 'Meer':
      return "- Bied ruime mogelijkheden voor vrij spel en zelfgekozen activiteiten.\n" +
             "- Laat het kind meedenken over de invulling van de BSO-middag.\n" +
             "- Stimuleer het kind om zelfstandig problemen op te lossen voordat ze hulp vragen.\n" +
             "- Geef het kind verantwoordelijkheden die passen bij hun ontwikkelingsniveau, zoals helpen bij het klaarzetten van activiteiten.";
    case 'Veel':
      return "- Creëer een omgeving waarin het kind grotendeels zelf hun activiteiten kunnen kiezen en organiseren.\n" +
             "- Laat het kind actief meedenken over regels en afspraken binnen de BSO.\n" +
             "- Stimuleer het kind om eigen initiatieven te nemen voor activiteiten of projecten.\n" +
             "- Bied mogelijkheden voor het kind om nieuwe vaardigheden aan te leren op basis van de interesses.\n" +
             "- Laat het kind, waar mogelijk, zelfstandig conflicten oplossen en alleen hulp vragen als het echt nodig is.";
    default:
      return "Geen specifiek advies beschikbaar.";
  }
break;
case 'Ondersteuning bij emotieregulatie':
  switch (score) {
    case 'Weinig':
      return "- Bied een rustige, voorspelbare omgeving die emotionele overprikkeling minimaliseert.\n" +
             "- Observeer het emotionele welzijn van het kind op afstand.\n" +
             "- Grijp alleen in bij extreme emotionele uitbarstingen.";
    case 'Minder':
      return "- Benoem emoties wanneer ze zich voordoen bij het kind.\n" +
             "- Bied een veilige ruimte waar het kind zich kan terugtrekken als het zich overweldigd voelt.\n" +
             "- Moedig het kind aan om zelf woorden te geven aan hun gevoelens.";
    case 'Neutraal':
      return "- Help het kind hun emoties te herkennen en te benoemen.\n" +
             "- Leer het kind eenvoudige technieken voor emotieregulatie, zoals ademhalingstechnieken, beweging, etc.\n" +
             "- Gebruik prentenboeken of korte verhalen om over emoties te praten.\n" +
             "- Reageer sensitief op de emotionele behoeften van het kind.";
    case 'Meer':
      return "- Bied regelmatig activiteiten aan die gericht zijn op het herkennen en uiten van emoties.\n" +
             "- Help het kind actief bij het vinden van oplossingen voor emotionele problemen.\n" +
             "- Leer kinderen complexere emotieregulatie-strategieën, zoals het gebruiken van een 'rustige hoek' of een 'emotiethermometer'.";
    case 'Veel':
      return "- Bied momenten van één-op-één begeleiding bij het herkennen, benoemen en reguleren van emoties.\n" +
             "- Creëer een gedetailleerd 'emotieplan' met het kind, met specifieke strategieën voor verschillende emotionele situaties.\n" +
             "- Gebruik rollenspel en sociale verhalen om emotieregulatie expliciet te oefenen.\n" +
             "- Bied ondersteuning en positieve bekrachtiging bij het toepassen van emotieregulatievaardigheden.\n" +
             "- Werk nauw samen met ouders om consistente emotieregulatietechnieken thuis en op de BSO te gebruiken.";
    default:
      return "Geen specifiek advies beschikbaar.";
  }
break;
case 'Positieve communicatie en waardering':
  switch (score) {
    case 'Weinig':
      return "- Gebruik een neutrale, respectvolle toon in de communicatie met het kind.\n" +
             "- Geef basiswaardering voor het voltooien van taken of het volgen van regels.\n" +
             "- Communiceer vooral over praktische zaken en dagelijkse routines.";
    case 'Minder':
      return "- Gebruik af en toe positieve bewoordingen in de communicatie met het kind.\n" +
             "- Geef korte, algemene complimenten voor goed gedrag of prestaties.\n" +
             "- Moedig het kind aan om positief met anderen te communiceren.";
    case 'Neutraal':
      return "- Gebruik regelmatig positieve en bemoedigende taal in interacties met het kind.\n" +
             "- Geef specifieke complimenten gericht op inspanning en proces, niet alleen op resultaat.\n" +
             "- Creëer dagelijks momenten om het kind te laten vertellen over zijn ervaringen en gevoelens.\n" +
             "- Stimuleer het kind om anderen complimenten te geven en waardering te uiten.";
    case 'Meer':
      return "- Pas actief 'actief luisteren' toe, herhaal en bevestig wat het kind zegt.\n" +
             "- Geef uitgebreide, persoonlijke complimenten die de unieke kwaliteiten van het kind benadrukken.\n" +
             "- Organiseer regelmatig activiteiten die positieve communicatie en waardering tussen kinderen stimuleren.\n" +
             "- Help het kind bij het formuleren van positieve feedback naar anderen.";
    case 'Veel':
      return "- Creëer een cultuur van voortdurende positieve bekrachtiging en waardering.\n" +
             "- Gebruik een persoonlijk systeem om de vooruitgang en prestaties van het kind te vieren.\n" +
             "- Bied één-op-één momenten om diepgaande, positieve gesprekken met het kind te voeren.\n" +
             "- Leer het kind expliciet hoe het positief over zichzelf kan praten en denken.\n" +
             "- Betrek ouders actief bij het benadrukken van positieve ontwikkelingen en prestaties van hun kind.";
    default:
      return "Geen specifiek advies beschikbaar.";
  }
break;
case 'Gevarieerd spel en beweging':
  switch (score) {
    case 'Weinig':
      return "- Bied een basisaanbod van speelgoed en materialen.\n" +
             "- Zorg voor een veilige buitenruimte waar het kind vrij kan bewegen.\n" +
             "- Laat het kind zelf hun speelactiviteiten kiezen zonder actieve begeleiding.";
    case 'Minder':
      return "- Bied een beperkte variatie aan speelgoed en materialen aan, wissel deze af en toe.\n" +
             "- Organiseer af en toe een bewegingsactiviteit.\n" +
             "- Moedig het kind aan om verschillende soorten spel te proberen.";
    case 'Neutraal':
      return "- Zorg voor een gevarieerd aanbod van speelgoed en materialen dat regelmatig wordt ververst.\n" +
             "- Bied dagelijks keuze uit verschillende soorten spel (bv. constructief, fantasie, beweging).\n" +
             "- Organiseer regelmatig begeleide sport- en spelactiviteiten, zowel binnen als buiten.\n" +
             "- Creëer uitdagende elementen in de speelomgeving die passen bij het ontwikkelingsniveau.";
    case 'Meer':
      return "- Bied een rijk en gevarieerd aanbod van speelmaterialen dat aansluit bij verschillende interesses en bij het ontwikkelingsniveau.\n" +
             "- Organiseer dagelijks gevarieerde bewegingsactiviteiten die verschillende motorische vaardigheden stimuleren.\n" +
             "- Creëer regelmatig nieuwe, uitdagende speelsituaties die het kind prikkelt om grenzen te verleggen.\n" +
             "- Betrek het kind actief bij het bedenken en organiseren van nieuwe spel- en bewegingsactiviteiten.";
    case 'Veel':
      return "- Bied een uitgebreid, steeds wisselend aanbod van speelmaterialen en -omgevingen.\n" +
             "- Organiseer dagelijks meerdere, gevarieerde bewegingsactiviteiten die aansluiten bij individuele behoeften en interesses.\n" +
             "- Creëer een dynamische speelomgeving die regelmatig wordt aangepast om nieuwe uitdagingen te bieden.\n" +
             "- Werk met een individueel 'speelplan' om ervoor te zorgen dat het kind een breed scala aan spel- en bewegingservaringen opdoet.";
    default:
      return "Geen specifiek advies beschikbaar.";
  }
break;
case 'Rust en ontspanning':
  switch (score) {
    case 'Weinig':
      return "- Bied een rustige hoek in de ruimte waar het kind zich kan terugtrekken als het dat wil.\n" +
             "- Respecteer het kind dat aangeeft even alleen te willen zijn.";
    case 'Minder':
      return "- Creëer dagelijks een kort rustmoment na het eten.\n" +
             "- Bied eenvoudige ontspanningsactiviteiten aan, zoals rustig tekenen of een boek lezen.\n" +
             "- Zorg voor comfortabele zitplekken waar het kind kan uitrusten.";
    case 'Neutraal':
      return "- Plan dagelijks rustmomenten in het programma, bijvoorbeeld na drukke activiteiten.\n" +
             "- Bied een gevarieerd aanbod van rustige activiteiten (bv. lezen, puzzelen, tekenen).\n" +
             "- Creëer een 'chillhoek' met zachte materialen waar het kind zich kan ontspannen.";
    case 'Meer':
      return "- Bied meerdere geplande rustmomenten gedurende de dag.\n" +
             "- Creëer verschillende rustige zones voor verschillende vormen van ontspanning (bv. leeshoek, knusselhoek).\n" +
             "- Help het kind actief bij het herkennen van hun behoefte aan rust en ontspanning.";
    case 'Veel':
      return "- Creëer een dagstructuur met een duidelijke balans tussen actieve en rustige momenten.\n" +
             "- Bied dagelijks begeleide ontspanningsoefeningen aan, afgestemd op individuele behoeften.\n" +
             "- Werk met een individuele 'ontspanningsplan' voor het kind dat extra ondersteuning nodig hebben bij het vinden van rust.\n" +
             "- Betrek ouders bij het ontwikkelen van consistente rust- en ontspanningsroutines.";
    default:
      return "Geen specifiek advies beschikbaar.";
  }
break;
case 'Individuele aandacht en ondersteuning':
  switch (score) {
    case 'Weinig':
      return "- Zorg dat je het kind begroet bij weerzien.\n" +
             "- Bied basishulp bij praktische zaken wanneer het kind erom vraagt.\n" +
             "- Observeer kinderen op afstand om eventuele problemen te signaleren.";
    case 'Minder':
      return "- Heb dagelijks een kort individueel gesprekje met het kind.\n" +
             "- Bied hulp aan bij activiteiten als het kind er zichtbaar moeite mee heeft.\n" +
             "- Reageer sensitief op individuele emotionele behoeften wanneer ze duidelijk zichtbaar zijn.";
    case 'Neutraal':
      return "- Plan dagelijks momenten in voor individuele aandacht voor het kind.\n" +
             "- Observeer actief de behoeften van het kind en speel hierop in.\n" +
             "- Bied gerichte ondersteuning bij activiteiten of sociale interacties waar nodig.\n" +
             "- Heb regelmatig individuele gesprekken met het kind over zijn ervaringen en gevoelens.";
    case 'Meer':
      return "- Creëer dagelijks meerdere één-op-één momenten met het kind.\n" +
             "- Bied proactief hulp aan bij uitdagingen, voordat het kind erom vraagt.\n" +
             "- Stem activiteiten en benaderingen af op de individuele interesses en behoeften van het kind.";
    case 'Veel':
      return "- Creëer dagelijks meerdere één-op-één momenten met het kind.\n" +
             "- Ontwikkel een individueel ondersteuningsplan voor het kind dat extra aandacht nodig heeft.\n" +
             "- Bied één-op-één begeleiding bij activiteiten die aansluiten bij de specifieke ontwikkelingsdoelen van het kind.\n" +
             "- Heb dagelijks uitgebreide individuele gesprekken om de ervaringen en behoeften van het kind te bespreken.\n" +
             "- Werk nauw samen met ouders en eventueel andere professionals om de individuele ondersteuning af te stemmen op de thuissituatie en andere contexten.";
    default:
      return "Geen specifiek advies beschikbaar.";
  }
break;
case 'Structuur en grenzen':
  switch (score) {
    case 'Weinig':
      return "- Hanteer enkele basisregels voor veiligheid en respect.\n" +
             "- Bied een globale dagindeling met vaste eet- en drinkmomenten.\n" +
             "- Grijp alleen in bij ernstige overtredingen van de regels.";
    case 'Minder':
      return "- Hanteer duidelijke basisregels en communiceer deze mondeling aan het kind.\n" +
             "- Bied een vaste dagstructuur met enige flexibiliteit in de invulling.\n" +
             "- Geef het kind verbale herinneringen aan de regels wanneer nodig.";
    case 'Neutraal':
      return "- Hanteer duidelijke regels die zichtbaar zijn opgehangen in de ruimte.\n" +
             "- Bied een vaste dagstructuur met een visueel dagprogramma.\n" +
             "- Bespreek regelmatig de regels en het belang ervan met het kind.\n" +
             "- Wees consequent in het handhaven van regels en afspraken.";
    case 'Meer':
      return "- Betrek het kind (en de anderen) actief bij het opstellen en evalueren van regels.\n" +
             "- Gebruik visuele ondersteuning (zoals pictogrammen) voor regels en dagstructuur.\n" +
             "- Bied extra structuur tijdens overgangsmomenten of bij nieuwe activiteiten.\n" +
             "- Pas de structuur en grenzen indien nodig aan voor het individuele kind, met behoud van duidelijkheid voor de groep.";
    case 'Veel':
      return "- Creëer een zeer gedetailleerde dagstructuur met duidelijke visuele ondersteuning.\n" +
             "- Bied individuele ondersteuning bij het volgen van de structuur en regels.\n" +
             "- Gebruik concrete hulpmiddelen (zoals timers of stappenplannen) om structuur te bieden.\n" +
             "- Hanteer een beloningssysteem voor het volgen van regels en structuur.\n" +
             "- Werk nauw samen met ouders om consistentie in structuur en grenzen tussen thuis en de BSO te waarborgen.";
    default:
      return "Geen specifiek advies beschikbaar.";
  }
break;
case 'Ondersteuning in communicatie':
  switch (score) {
    case 'Weinig':
      return "- Gebruik duidelijke, leeftijdsadequate taal in gesprekken met het kind.\n" +
             "- Reageer positief op communicatie-initiatieven van het kind.\n" +
             "- Bied basishulp bij het verwoorden van gedachten of gevoelens als het kind hier moeite mee heeft.";
    case 'Minder':
      return "- Stimuleer het kind om zijn gedachten en gevoelens onder woorden te brengen.\n" +
             "- Gebruik af en toe gebaren of visuele ondersteuning bij verbale communicatie.\n" +
             "- Help het kind bij het formuleren van vragen of verzoeken aan anderen.";
    case 'Neutraal':
      return "- Moedig het kind actief aan om zijn ervaringen, ideeën en gevoelens te delen.\n" +
             "- Gebruik een combinatie van verbale en non-verbale communicatie (gebaren, gezichtsuitdrukkingen).\n" +
             "- Bied ondersteuning bij het begrijpen en gebruiken van meer complexe taal en concepten.\n" +
             "- Help het kind bij het oplossen van kleine conflicten door effectieve communicatie.";
    case 'Meer':
      return "- Bied regelmatig activiteiten aan die specifiek gericht zijn op het verbeteren van communicatievaardigheden.\n" +
             "- Gebruik visuele ondersteuning (zoals pictogrammen of tekeningen) om complexere boodschappen te verduidelijken.\n" +
             "- Help het kind actief bij het interpreteren van non-verbale communicatie van anderen.\n" +
             "- Oefen met het kind hoe het in verschillende sociale situaties kunnen communiceren.";
    case 'Veel':
      return "- Bied momenten van, één-op-één ondersteuning bij het ontwikkelen van communicatievaardigheden.\n" +
             "- Gebruik gespecialiseerde communicatiehulpmiddelen indien nodig (bijvoorbeeld voor kinderen met taalachterstanden).\n" +
             "- Creëer een gedetailleerd plan om de communicatieve vaardigheden van het kind te verbeteren.\n" +
             "- Werk nauw samen met ouders en eventueel logopedisten om de communicatieve ontwikkeling te ondersteunen.";
    default:
      return "Geen specifiek advies beschikbaar.";
  }
  break;
default:
  return "Geen specifiek advies beschikbaar voor dit onderwerp.";
  }
};

return (
  <div style={{ 
    maxWidth: '800px', 
    margin: 'auto', 
    padding: '20px', 
    fontFamily: 'Arial, sans-serif',
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)'
  }}>
    <h1 style={{ color: '#4285F4', textAlign: 'center', marginBottom: '30px' }}>KindKernKaart 4-7</h1>
    {subjects.map(subject => (
      <SubjectRow
        key={subject}
        subject={subject}
        selectedScore={scores[subject]}
        onScoreSelect={handleScoreSelect}
      />
    ))}
    <div style={{ textAlign: 'center', marginTop: '30px' }}>
      <button
        onClick={handleShowAdvice}
        disabled={!allComponentsFilled}
        style={{
          padding: '10px 20px',
          borderRadius: '20px',
          border: 'none',
          background: allComponentsFilled ? '#4285F4' : '#E8E8E8',
          color: allComponentsFilled ? 'white' : '#999',
          fontWeight: 'bold',
          cursor: allComponentsFilled ? 'pointer' : 'not-allowed',
          transition: 'all 0.3s ease',
        }}
      >
        Toon adviezen
      </button>
    </div>
    {Object.entries(advices).map(([subject, advice]) => (
      <AdviceDisplay key={subject} advice={{ subject, text: advice }} />
    ))}
  </div>
);
}

export default KindKernKaart47;