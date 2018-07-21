import React from 'react'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class WhatWeDo extends React.Component {
  render() {
    return (
      <div className="what-we-do-root">
        <h1>DETAILY PRÁC</h1>
        <ExpansionPanel className="expansion-panel">
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <h2>Výstavba rodinných domov - hrubá stavba - Systém strateného <b>polystyrénového debnenia</b></h2>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div className="expansion-panel-details">
              <p>
                Pri výstavbe obvodových múrov systémom strateného polystyrénového debnenia Vám zaručíme 20%
                úsporu z ceny materiálu oproti výstavbe obvodových múrov klasickým spôsobom
                (YTONG, POROTHERM). Ak sú Vaše náklady na obvodové múry
                napríklad 5000 eur, my Vám dodáme polystyrénové tvárnice spolu so
                železobetónom v hodnote 4000 eur. Základným stavebným prvkom je debniaca
                polystyrénová tvárnica tvorená 5cm vnútorným polystyrénom a 15cm vonkajším
                polystyrénom medzi ktorými je 15cm medzera. Do medzery sú vložené zvislé a
                vodorovné oceľové drôty ktoré zalejeme betónom. Takto nám vznikne kompaktná betónová
                stena bez tepelných mostov. Táto konštrukcia obvodových múrov už nevyžaduje zateplenie
                polystyrénom, čo prináša ďalšie nemalé úspory a zároveň výrazne uľahčuje elektroinštalačne
                a vodoinštalačné práce. Tento systém je určený na výstavbu nízkoenergetických a pasívnych domov.
              </p>
              <p><b>Čomu sa venujeme?</b></p>
              <ul>
                <li>Zameranie stavby za prítomnosti majiteľa</li>
                <li>Výkopové práce + Základy</li>
                <li>Uzemnenie a rozvody TZB pod úrovňou základovej dosky, Základová doska</li>
                <li>Obvodové múry (polystyrénové debnenie)</li>
                <li>Nosné múry (YTONG, POROTHERM)</li>
                <li>Vodorovné nosné konštrukcie (strop, deka)</li>
                <li>Priečky, Schodiská, Komín</li>
                <li>Krov nosná konštrukcia (typ strechy - sedlová, pultová alebo plochá)</li>
                <li>Krytina</li>
                <li>Klampiarske práce</li>
                <li>Ďalšie práce po vzájomnej dohode</li>
              </ul>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <h2>Výstavba rodinných domov - hrubá stavba - Murované domy <b>YTONG, POROTHERM</b></h2>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div className="expansion-panel-details">
              <p><b>Čomu sa venujeme?</b></p>
              <ul>
                <li>Zameranie stavby za prítomnosti majiteľa</li>
                <li>Výkopové práce</li>
                <li>Základy</li>
                <li>Uzemnenie a rozvody TZB pod úrovňou základovej dosky</li>
                <li> Základová doska</li>
                <li>Obvodové a nosné múry</li>
                <li>Vodorovné nosné konštrukcie (strop, deka)</li>
                <li>Priečky, Schodiská, Komín</li>
                <li>Krov nosná konštrukcia (typ strechy - sedlová, pultová alebo plochá)</li>
                <li>Krytina</li>
                <li>Klampiarske práce</li>
                <li>Ďalšie práce po vzájomnej dohode</li>
              </ul>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <h2>Rekonštrukcie rodinných domov a bytov</h2>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div className="expansion-panel-details">
              <p><b>Čomu sa venujeme?</b></p>
              <ul>
                <li>Búracie práce</li>
                <li>Elektroinštalácia, vodoinštalácia</li>
                <li>Rekonštrukcia kúpeľne a WC (obklady a dlažby) </li>
                <li>Omietky a stierky, Sadrokartón</li>
                <li>Maľovanie</li>
                <li>Vyrovnávanie podláh nivelizáciou, Podlahy</li>
              </ul>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <h2>Terénne úpravy, vonkajšie práce, terasy</h2>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div className="expansion-panel-details">
              <p><b>Čomu sa venujeme?</b></p>
              <p> Altánky, Terasy, Oplotenia, Dlažba</p>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <h2>Ako dlho trvá prestavba?</h2>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div className="expansion-panel-details">
              <p><b>Prestavba trvá zvyčajne 10 dní + 3 dni rezerva. <br />Priebeh prestavby:</b></p>
              <ol>
                <li> deň: Odpojenie rozvodov vody, odpadu, plynu a elektrického prúdu. Demontáž existujúceho jadra, odvoz vybúraného odpadu. Navozenie a presun stavebného materiálu.</li>
                <li> deň: Založenie priečok a ich postupná stavba.</li>
                <li> deň: Stavba priečok a ich dokončenie.</li>
                <li> deň: Natiahnutie rozvodov elektrických káblov, vody a odpadov. Vyrovnanie podlahy.</li>
                <li> deň: Začistenie škár po inštalácii rozvodov. Vyrovnanie stien pod obklad.</li>
                <li> deň: Montáž konštrukcie a osadenie sadrokartónového stropu.</li>
                <li> deň: Obklad.</li>
                <li> deň: Obklad + dlažba.</li>
                <li> deň: Vyškárovanie obkladov a dlažby. Vymaľovanie stien. Osadenie zriaďovacích predmetov. </li>
                <li> deň: Inštalácia kúpeľňového nábytku. Finálne osadenie elektrospotrebičov, zásuviek a vypínačov. Upratovanie staveniska.</li>
              </ol>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    )
  }
}

export default WhatWeDo

