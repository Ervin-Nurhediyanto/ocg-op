<template>
  <div>
    <router-view
      :data="data"
      v-on:changeDisplay="changeDisplay"
      v-on:addToDeck="addToDeck"
      v-on:removeCard="removeCard"
      v-on:changeTitle="changeTitle"
      v-on:loadDeck="loadDeck"
      v-on:sortData="sortData"
    />
    <!-- <router-view
      :data="data"
      v-on:removeCard="removeCard"
      v-on:changeDisplay="changeDisplay"
      v-on:changeTitle="changeTitle"
      v-on:loadDeck="loadDeck"
      v-on:deleteDeck="deleteDeck"
      v-on:addToDeck="addToDeck"
      v-on:sortData="sortData"
      v-on:selectPlayerDeck="selectPlayerDeck"
      v-on:selectOpponentDeck="selectOpponentDeck"
      v-on:ShowDeck="ShowDeck"
      v-on:ShowDrop="ShowDrop"
      v-on:ShowBind="ShowBind"
      v-on:changePhase="changePhase"
      v-on:unitAttack="unitAttack"
      v-on:unitCall="unitCall"
      v-on:handleToDo="handleToDo"
    /> -->
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import C001 from '../assets/cards/001.png'
import CM001 from '../assets/mini-cards/001.png'
import C002 from '../assets/cards/002.png'
import CM002 from '../assets/mini-cards/002.png'
import C003 from '../assets/cards/003.png'
import CM003 from '../assets/mini-cards/003.png'
import C004 from '../assets/cards/004.png'
import CM004 from '../assets/mini-cards/004.png'
import C005 from '../assets/cards/005.png'
import CM005 from '../assets/mini-cards/005.png'
import C006 from '../assets/cards/006.png'
import CM006 from '../assets/mini-cards/006.png'
import C007 from '../assets/cards/007.png'
import CM007 from '../assets/mini-cards/007.png'
import C008 from '../assets/cards/008.png'
import CM008 from '../assets/mini-cards/008.png'
import C009 from '../assets/cards/009.png'
import CM009 from '../assets/mini-cards/009.png'
import C010 from '../assets/cards/010.png'
import CM010 from '../assets/mini-cards/010.png'
import C011 from '../assets/cards/011.png'
import CM011 from '../assets/mini-cards/011.png'
import C012 from '../assets/cards/012.png'
import CM012 from '../assets/mini-cards/012.png'
import C013 from '../assets/cards/013.png'
import CM013 from '../assets/mini-cards/013.png'
import C014 from '../assets/cards/014.png'
import CM014 from '../assets/mini-cards/014.png'
import C015 from '../assets/cards/015.png'
import CM015 from '../assets/mini-cards/015.png'
import C016 from '../assets/cards/016.png'
import CM016 from '../assets/mini-cards/016.png'
import C017 from '../assets/cards/017.png'
import CM017 from '../assets/mini-cards/017.png'
import C018 from '../assets/cards/018.png'
import CM018 from '../assets/mini-cards/018.png'
import C019 from '../assets/cards/019.png'
import CM019 from '../assets/mini-cards/019.png'
import C020 from '../assets/cards/020.png'
import CM020 from '../assets/mini-cards/020.png'
import C021 from '../assets/cards/021.png'
import CM021 from '../assets/mini-cards/021.png'
import C022 from '../assets/cards/022.png'
import CM022 from '../assets/mini-cards/022.png'
import C023 from '../assets/cards/023.png'
import CM023 from '../assets/mini-cards/023.png'
import C024 from '../assets/cards/024.png'
import CM024 from '../assets/mini-cards/024.png'
import C025 from '../assets/cards/025.png'
import CM025 from '../assets/mini-cards/025.png'
import C026 from '../assets/cards/026.png'
import CM026 from '../assets/mini-cards/026.png'
import C027 from '../assets/cards/027.png'
import CM027 from '../assets/mini-cards/027.png'
import C028 from '../assets/cards/028.png'
import CM028 from '../assets/mini-cards/028.png'
import C029 from '../assets/cards/029.png'
import CM029 from '../assets/mini-cards/029.png'
import C030 from '../assets/cards/030.png'
import CM030 from '../assets/mini-cards/030.png'
import C031 from '../assets/cards/031.png'
import CM031 from '../assets/mini-cards/031.png'
import C032 from '../assets/cards/032.png'
import CM032 from '../assets/mini-cards/032.png'
import C033 from '../assets/cards/033.png'
import CM033 from '../assets/mini-cards/033.png'
import C034 from '../assets/cards/034.png'
import CM034 from '../assets/mini-cards/034.png'
import C035 from '../assets/cards/035.png'
import CM035 from '../assets/mini-cards/035.png'
import C036 from '../assets/cards/036.png'
import CM036 from '../assets/mini-cards/036.png'
import C037 from '../assets/cards/037.png'
import CM037 from '../assets/mini-cards/037.png'
import C038 from '../assets/cards/038.png'
import CM038 from '../assets/mini-cards/038.png'
import C039 from '../assets/cards/039.png'
import CM039 from '../assets/mini-cards/039.png'
import C040 from '../assets/cards/040.png'
import CM040 from '../assets/mini-cards/040.png'
import C041 from '../assets/cards/041.png'
import CM041 from '../assets/mini-cards/041.png'
import C042 from '../assets/cards/042.png'
import CM042 from '../assets/mini-cards/042.png'
import C043 from '../assets/cards/043.png'
import CM043 from '../assets/mini-cards/043.png'
import C044 from '../assets/cards/044.png'
import CM044 from '../assets/mini-cards/044.png'
import C045 from '../assets/cards/045.png'
import CM045 from '../assets/mini-cards/045.png'
import C046 from '../assets/cards/046.png'
import CM046 from '../assets/mini-cards/046.png'
import C047 from '../assets/cards/047.png'
import CM047 from '../assets/mini-cards/047.png'
import C048 from '../assets/cards/048.png'
import CM048 from '../assets/mini-cards/048.png'
import C049 from '../assets/cards/049.png'
import CM049 from '../assets/mini-cards/049.png'
import C050 from '../assets/cards/050.png'
import CM050 from '../assets/mini-cards/050.png'
import C051 from '../assets/cards/051.png'
import CM051 from '../assets/mini-cards/051.png'
import C052 from '../assets/cards/052.png'
import CM052 from '../assets/mini-cards/052.png'
import C053 from '../assets/cards/053.png'
import CM053 from '../assets/mini-cards/053.png'
import C054 from '../assets/cards/054.png'
import CM054 from '../assets/mini-cards/054.png'
import C055 from '../assets/cards/055.png'
import CM055 from '../assets/mini-cards/055.png'
import C056 from '../assets/cards/056.png'
import CM056 from '../assets/mini-cards/056.png'
import C057 from '../assets/cards/057.png'
import CM057 from '../assets/mini-cards/057.png'
import C058 from '../assets/cards/058.png'
import CM058 from '../assets/mini-cards/058.png'
import C059 from '../assets/cards/059.png'
import CM059 from '../assets/mini-cards/059.png'
import C060 from '../assets/cards/060.png'
import CM060 from '../assets/mini-cards/060.png'
import C061 from '../assets/cards/061.png'
import CM061 from '../assets/mini-cards/061.png'
import C062 from '../assets/cards/062.png'
import CM062 from '../assets/mini-cards/062.png'
import C063 from '../assets/cards/063.png'
import CM063 from '../assets/mini-cards/063.png'
import C064 from '../assets/cards/064.png'
import CM064 from '../assets/mini-cards/064.png'
import C065 from '../assets/cards/065.png'
import CM065 from '../assets/mini-cards/065.png'
import C066 from '../assets/cards/066.png'
import CM066 from '../assets/mini-cards/066.png'
import C067 from '../assets/cards/067.png'
import CM067 from '../assets/mini-cards/067.png'
import C068 from '../assets/cards/068.png'
import CM068 from '../assets/mini-cards/068.png'
import C069 from '../assets/cards/069.png'
import CM069 from '../assets/mini-cards/069.png'
import C070 from '../assets/cards/070.png'
import CM070 from '../assets/mini-cards/070.png'
import C071 from '../assets/cards/071.png'
import CM071 from '../assets/mini-cards/071.png'
import C072 from '../assets/cards/072.png'
import CM072 from '../assets/mini-cards/072.png'
import C073 from '../assets/cards/073.png'
import CM073 from '../assets/mini-cards/073.png'
import C074 from '../assets/cards/074.png'
import CM074 from '../assets/mini-cards/074.png'
import C075 from '../assets/cards/075.png'
import CM075 from '../assets/mini-cards/075.png'
import C076 from '../assets/cards/076.png'
import CM076 from '../assets/mini-cards/076.png'
import C077 from '../assets/cards/077.png'
import CM077 from '../assets/mini-cards/077.png'
import C078 from '../assets/cards/078.png'
import CM078 from '../assets/mini-cards/078.png'
import C079 from '../assets/cards/079.png'
import CM079 from '../assets/mini-cards/079.png'
import C080 from '../assets/cards/080.png'
import CM080 from '../assets/mini-cards/080.png'
import C081 from '../assets/cards/081.png'
import CM081 from '../assets/mini-cards/081.png'
import C082 from '../assets/cards/082.png'
import CM082 from '../assets/mini-cards/082.png'
import C083 from '../assets/cards/083.png'
import CM083 from '../assets/mini-cards/083.png'
import C084 from '../assets/cards/084.png'
import CM084 from '../assets/mini-cards/084.png'

export default {
  name: 'Main',
  data () {
    return {
      data: {
        edit: {
          title: '',
          deck: [],
          display: {
            name: 'Monkey D. Luffy',
            image: C084,
            imageM: CM084,
            grade: 3,
            type: {
              race: 'Human',
              job: 'Fighter',
              special: 'Paramecia'
            },
            text: '[Act][1/Turn]: Call random "Commander SHP" from your deck. Shuffle your deck.',
            power: 2500,
            code: '084'
          },
          cards: [
            {
              name: 'Monkey D. Luffy',
              image: C084,
              imageM: CM084,
              grade: 3,
              type: {
                race: 'Human',
                job: 'Fighter',
                special: 'Paramecia'
              },
              text: '[Act][1/Turn]: Call random "Commander SHP" from your deck. Shuffle your deck.',
              power: 2500,
              code: '084'
            },
            {
              name: 'Leo',
              image: C083,
              imageM: CM083,
              grade: 2,
              type: {
                race: 'Tontatta',
                job: 'Swordman',
                special: 'Paramecia'
              },
              text: '[Cont]: Commander SHP. [Act][1/Turn]: Pay 500 life points. Rest random unit your opponent control.',
              power: 1500,
              code: '083'
            },
            {
              name: 'Ideo',
              image: C082,
              imageM: CM082,
              grade: 2,
              type: {
                race: 'Human',
                job: 'Fighter',
                special: ''
              },
              text: '[Cont]: Commander SHP. [Auto]: When this unit attack. All your grade 2 unit get Power + 500 until end this turn.',
              power: 1500,
              code: '082'
            },
            {
              name: 'Don Sai',
              image: C081,
              imageM: CM081,
              grade: 2,
              type: {
                race: 'Human',
                job: 'Swordman',
                special: ''
              },
              text: '[Cont]: Commander SHP. [Act][1/Turn]: Pay 500 life points. All your grade 2 unit get Power + 1000 until end this turn.',
              power: 1500,
              code: '081'
            },
            {
              name: 'Bartolomeo',
              image: C080,
              imageM: CM080,
              grade: 2,
              type: {
                race: 'Human',
                job: 'Fighter',
                special: 'Paramecia'
              },
              text: '[Cont]: Commander SHP. [Act][1/Turn]: Choose up to one your unit. That unit cannot be destroy until end this turn.',
              power: 1500,
              code: '080'
            },
            {
              name: 'Cavendish',
              image: C079,
              imageM: CM079,
              grade: 2,
              type: {
                race: 'Human',
                job: 'Swordman',
                special: ''
              },
              text: '[Cont]: Commander SHP. [Auto][1/Turn]: When this unit attack. Pay 500 life points. Stand this unit. (Still attack and can attact again)',
              power: 1500,
              code: '079'
            },
            {
              name: 'Diamond Jozu',
              image: C078,
              imageM: CM078,
              grade: 2,
              type: {
                race: 'Human',
                job: 'Fighter',
                special: 'Paramecia'
              },
              text: '[Cont]: If you control "Edward Newgate". This unit cannot be destroy.',
              power: 1500,
              code: '078'
            },
            {
              name: 'Thatch',
              image: C077,
              imageM: CM077,
              grade: 2,
              type: {
                race: 'Human',
                job: 'Fighter',
                special: ''
              },
              text: '[Auto]: When this unit send into drop zone. call "Edward Newgate" from your drop zone.',
              power: 1500,
              code: '077'
            },
            {
              name: 'Blenheim',
              image: C076,
              imageM: CM076,
              grade: 1,
              type: {
                race: 'Human',
                job: 'Swordman',
                special: ''
              },
              text: '[Auto]: When this unit attack. Pay 500 life points. All "Edward Newgate" unit your control get Power + 1000 until end this turn.',
              power: 500,
              code: '076'
            },
            {
              name: 'Curiel',
              image: C075,
              imageM: CM075,
              grade: 1,
              type: {
                race: 'Human',
                job: 'Gunner',
                special: ''
              },
              text: '[Act][1/Turn]: If you control "Edward Newgate" unit. Choose up to one your opponent unit, then destroy that unit.',
              power: 500,
              code: '075'
            },
            {
              name: 'Kingdew',
              image: C074,
              imageM: CM074,
              grade: 1,
              type: {
                race: 'Human',
                job: 'Fighter',
                special: ''
              },
              text: '[Act][1/Turn]: Choose up to one "Edward Newgate". That unit get Power + 1000 until end this turn.',
              power: 500,
              code: '074'
            },
            {
              name: 'Haruta',
              image: C073,
              imageM: CM073,
              grade: 1,
              type: {
                race: 'Human',
                job: 'Swordman',
                special: ''
              },
              text: '[Act][1/Turn]: Pay 500 life points. Add up to one "Edward Newgate" into your hand from your deck.',
              power: 500,
              code: '073'
            },
            {
              name: 'Squard',
              image: C072,
              imageM: CM072,
              grade: 1,
              type: {
                race: 'Human',
                job: 'Swordman',
                special: ''
              },
              text: '[Act][1/Turn]: Pay 500 life points. Put up to one "Edward Newgate" from drop zone into your hand.',
              power: 500,
              code: '072'
            },
            {
              name: 'Bohemian',
              image: C071,
              imageM: CM071,
              grade: 1,
              type: {
                race: 'Human',
                job: 'Swordman',
                special: ''
              },
              text: '[Auto]: When this unit attack. Pay 500 life points. Stand up to one "Edward Newgate" your control.',
              power: 500,
              code: '071'
            },
            {
              name: 'Edward Newgate',
              image: C070,
              imageM: CM070,
              grade: 3,
              type: {
                race: 'Human',
                job: 'Swordman',
                special: 'Paramecia'
              },
              text: '[Auto]: When this unit attack. Pay 500 life points. This unit get Power + 5000 until end this turn. At the end of turn, deal damage 500 to your life points.',
              power: 2500,
              code: '070'
            },
            {
              name: 'Portgas D. Ace',
              image: C069,
              imageM: CM069,
              grade: 3,
              type: {
                race: 'Human',
                job: 'Fighter',
                special: 'Logia'
              },
              text: '[Cont]: When your opponent card is send into drop zone. Deal damage 500 to your opponent. [Auto]: When this unit blocks. Destroy the unit blocked by this unit. ',
              power: 2500,
              code: '069'
            },
            {
              name: 'Monkey D. Garp',
              image: C068,
              imageM: CM068,
              grade: 3,
              type: {
                race: 'Human',
                job: 'Fighter',
                special: ''
              },
              text: '[Cont]: When your "Fighter" unit attack. This unit get Power + 1000. (Stuck)',
              power: 2500,
              code: '068'
            },
            {
              name: 'Dracule Mihawk',
              image: C067,
              imageM: CM067,
              grade: 3,
              type: {
                race: 'Human',
                job: 'Swordman',
                special: ''
              },
              text: '[Auto]: When this unit attack. Pay 500 life points, destroy all opponent unit with power less than this power. (Effect send into opponent drop zone cannot be actived)',
              power: 2500,
              code: '067'
            },
            {
              name: 'Marco',
              image: C066,
              imageM: CM066,
              grade: 2,
              type: {
                race: 'Human',
                job: 'Fighter',
                special: 'Zoan'
              },
              text: '[Auto]: At the end of turn. Call this unit from your drop zone, then increase 2000 life points.',
              power: 1500,
              code: '066'
            },
            {
              name: 'Kaido',
              image: C065,
              imageM: CM065,
              grade: 3,
              type: {
                race: 'Human',
                job: 'Fighter',
                special: 'Zoan'
              },
              text: '[Cont]: For each "Zoan" unit your control, this unit get Power + 500.',
              power: 2500,
              code: '065'
            },
            {
              name: 'Kaido',
              image: C064,
              imageM: CM064,
              grade: 3,
              type: {
                race: 'Human',
                job: 'Fighter',
                special: 'Zoan'
              },
              text: '[Cont]: All "Zoan" unit your control get Power + 500.',
              power: 2500,
              code: '064'
            },
            {
              name: 'Oars Jr',
              image: C063,
              imageM: CM063,
              grade: 2,
              type: {
                race: 'Giant',
                job: 'Fighter',
                special: ''
              },
              text: '',
              power: 2000,
              code: '063'
            },
            {
              name: 'Fujitora',
              image: C062,
              imageM: CM062,
              grade: 3,
              type: {
                race: 'Human',
                job: 'Swordman',
                special: 'Paramecia'
              },
              text: '[Cont]: When your opponent card is send into drop zone. Deal damage 500 to your opponent.',
              power: 2500,
              code: '062'
            },
            {
              name: 'Eustass Kid',
              image: C061,
              imageM: CM061,
              grade: 3,
              type: {
                race: 'Human',
                job: 'Fighter',
                special: 'Paramecia'
              },
              text: '[Auto]: When this unit attack. Put top of your deck into drop zone. This unit get Power equal that unit send into drop zone by this effect.',
              power: 2500,
              code: '061'
            },
            {
              name: 'Coby',
              image: C060,
              imageM: CM060,
              grade: 2,
              type: {
                race: 'Human',
                job: 'Fighter',
                special: ''
              },
              text: '[Auto]: When this unit attack. This unit get Power + 500 for each "Fighter" unit your control until end this turn.',
              power: 1500,
              code: '060'
            },
            {
              name: 'Boa Hancock',
              image: C059,
              imageM: CM059,
              grade: 3,
              type: {
                race: 'Human',
                job: 'Fighter',
                special: 'Paramecia'
              },
              text: '[Cont]: During opponent Stanby Phase. Rest unit your opponent control cannot be Stand.',
              power: 2500,
              code: '059'
            },
            {
              name: 'Jack',
              image: C058,
              imageM: CM058,
              grade: 3,
              type: {
                race: 'Fishman',
                job: 'Fighter',
                special: 'Zoan'
              },
              text: '[Cont]: At the end of your turn. This unit get Power + 1000. (Stack)',
              power: 2500,
              code: '058'
            },
            {
              name: 'Basil Hawkins',
              image: C057,
              imageM: CM057,
              grade: 2,
              type: {
                race: 'Human',
                job: 'Spellcaster',
                special: 'Paramecia'
              },
              text: '[Auto]: When this unit is send into drop zone. Pay 500 life points, then call a random unit from your deck.',
              power: 1500,
              code: '057'
            },
            {
              name: 'Brook',
              image: C056,
              imageM: CM056,
              grade: 1,
              type: {
                race: 'Undead',
                job: 'Swordman',
                special: 'Paramecia'
              },
              text: '[Auto]: When this unit is send into drop zone. Pay 500 life points, then call a random unit from your drop zone.',
              power: 500,
              code: '056'
            },
            {
              name: 'Arlong',
              image: C055,
              imageM: CM055,
              grade: 1,
              type: {
                race: 'Fishman',
                job: 'Fighter',
                special: ''
              },
              text: '[Auto]: When this unit is placed on battlefield. Add up to one "Fishman" card from your deck into your hand, then shuffle your deck.',
              power: 500,
              code: '055'
            },
            {
              name: 'Gordon',
              image: C054,
              imageM: CM054,
              grade: 1,
              type: {
                race: 'Human',
                job: '',
                special: ''
              },
              text: '[Act][1/Turn]: Rest this unit. Choose up to one your opponent Grade 1 and Rest that unit.',
              power: 0,
              code: '054'
            },
            {
              name: 'Uta',
              image: C053,
              imageM: CM053,
              grade: 2,
              type: {
                race: 'Human',
                job: 'Swordman',
                special: 'Paramecia'
              },
              text: '[Auto]: When this unit attack. Pay 500 life points, then this unit get Power + 500 for each Rest unit on battlefield until end this turn.',
              power: 1500,
              code: '053'
            },
            {
              name: 'Nekomamushi',
              image: C052,
              imageM: CM052,
              grade: 3,
              type: {
                race: 'Beast',
                job: 'Gunner',
                special: 'Sulong'
              },
              text: '[Auto]: At the end your phase. Put this unit into bottom your deck. Call up to one random Grade 2 "Nekomamushi" in its card name from your deck. Shuffle your deck. [Act][1/Turn]: Search your deck. Choose up to one "Beast" unit other "Nekomamushi" and put that into your hand. Shuffle your deck.',
              power: 2500,
              code: '052'
            },
            {
              name: 'Nekomamushi',
              image: C051,
              imageM: CM051,
              grade: 2,
              type: {
                race: 'Beast',
                job: 'Swordman',
                special: ''
              },
              text: '[Act]: Put this unit into bottom your deck. Call up to one Grade 3 "Nekomamushi" in its card name from your deck. Shuffle your deck.',
              power: 1500,
              code: '051'
            },
            {
              name: 'Inuarashi',
              image: C050,
              imageM: CM050,
              grade: 3,
              type: {
                race: 'Beast',
                job: 'Swordman',
                special: 'Sulong'
              },
              text: '[Auto]: At the end your phase. Put this unit into bottom your deck. Call up to one random Grade 2 "Inuarashi" in its card name from your deck. Shuffle your deck. [Auto]: When this unit attack. Pay 500 life points, this unit get Power + 500 for each "Beast" unit your control until end this turn.',
              power: 2500,
              code: '050'
            },
            {
              name: 'Inuarashi',
              image: C049,
              imageM: CM049,
              grade: 2,
              type: {
                race: 'Beast',
                job: 'Swordman',
                special: ''
              },
              text: '[Act]: Put this unit into bottom your deck. Call up to one Grade 3 "Inuarashi" in its card name from your deck. Shuffle your deck.',
              power: 1500,
              code: '049'
            },
            {
              name: 'Bartolomeo',
              image: C048,
              imageM: CM048,
              grade: 2,
              type: {
                race: 'Human',
                job: 'Fighter',
                special: 'Paramecia'
              },
              text: '[Cont]: Commander SHP. [Auto]: When this unit block. If you control "Monkey D. Luffy", this unit get Power + 3500 until end this turn.',
              power: 1500,
              code: '048'
            },
            {
              name: 'Charlotte Cracker',
              image: C047,
              imageM: CM047,
              grade: 2,
              type: {
                race: 'Human',
                job: 'Swordman',
                special: 'Paramecia'
              },
              text: '[Auto]: When this unit block. This unit get Power + 2000, until end this turn. If your life points is grether than 500, pay 500 life points and this unit get Power + 500 for each opponent unit until end this turn.',
              power: 1500,
              code: '047'
            },
            {
              name: 'Bartholomew Kuma',
              image: C046,
              imageM: CM046,
              grade: 3,
              type: {
                race: 'Cyborg',
                job: 'fighter',
                special: 'Paramecia'
              },
              text: '[Act][1/Turn]: Choose up to one your opponent unit, and put that unit into bottom your opponent deck.',
              power: 2500,
              code: '046'
            },
            {
              name: 'Trafalgal D. Water Law',
              image: C045,
              imageM: CM045,
              grade: 3,
              type: {
                race: 'Human',
                job: 'Swordman',
                special: 'Paramecia'
              },
              text: '[Act][1/Turn]: Pay 500 life points. Choose up to one other unit your control. Send that unit to your drop zone, then opponent deal damage equal power that unit send by this effect.',
              power: 2500,
              code: '045'
            },
            {
              name: 'Kizaru',
              image: C044,
              imageM: CM044,
              grade: 3,
              type: {
                race: 'Human',
                job: 'Spellcaster',
                special: 'Logia'
              },
              text: '[Cont]: When this unit become Stand, this unit get Power + 500 (Stack Effect). [Auto][1/Turn]: When this unit attack. Stand this unit (Still attack and can attact again).',
              power: 2500,
              code: '044'
            },
            {
              name: 'Aokiji',
              image: C043,
              imageM: CM043,
              grade: 3,
              type: {
                race: 'Human',
                job: 'Spellcaster',
                special: 'Logia'
              },
              text: '[Cont]: this unit get Power + 500 for each your opponent Rest unit. [Act][1/Turn]: Choose up to one opponent unit, then Rest that unit.',
              power: 2500,
              code: '043'
            },
            {
              name: 'Akainu',
              image: C042,
              imageM: CM042,
              grade: 3,
              type: {
                race: 'Human',
                job: 'Spellcaster',
                special: 'Logia'
              },
              text: '[Cont]: When your opponent card is send into drop zone. This unit get Power + 500 (Stack Effect). [Act][1/Turn] : Choose up to one your opponent unit, and destroy that unit.',
              power: 2500,
              code: '042'
            },
            {
              name: 'Aladdin',
              image: C041,
              imageM: CM041,
              grade: 1,
              type: {
                race: 'Fishman',
                job: 'Fighter',
                special: ''
              },
              text: '[Auto]: When this unit is placed on battlefield. Choose up to one Grade 1 your opponent unit, and put that unit into opponent hand.',
              power: 500,
              code: '041'
            },
            {
              name: 'Jack',
              image: C040,
              imageM: CM040,
              grade: 2,
              type: {
                race: 'Fishman',
                job: 'Swordman',
                special: 'Zoan'
              },
              text: '[Act]: Put this unit into bottom your deck. Call up to one Grade 3 "Jack" in its card name from your deck. Shuffle your deck.',
              power: 1500,
              code: '040'
            },
            {
              name: 'Tony Tony Chopper',
              image: C039,
              imageM: CM039,
              grade: 3,
              type: {
                race: 'Beast',
                job: 'Fighter',
                special: 'Zoan'
              },
              text: '[Auto]: At the end your phase. Put this unit into bottom your deck. Call up to one Grade 2 or less "Tony Tony Chopper" in its card name from your deck. Shuffle your deck.',
              power: 4000,
              code: '039'
            },
            {
              name: 'Tony Tony Chopper',
              image: C038,
              imageM: CM038,
              grade: 2,
              type: {
                race: 'Beast',
                job: 'Fighter',
                special: 'Zoan'
              },
              text: '[Act]: Put this unit into bottom your deck. Call up to one Grade 3 "Tony Tony Chopper" in its card name from your deck. Shuffle your deck.',
              power: 1500,
              code: '038'
            },
            {
              name: 'Donquixote Doflamingo',
              image: C037,
              imageM: CM037,
              grade: 3,
              type: {
                race: 'Human',
                job: 'Fighter',
                special: 'Paramecia'
              },
              text: '[Act][1/Turn]: Discard up to one random card from your opponent hand, and this unit get Power + 1000 until end this turn.',
              power: 2500,
              code: '037'
            },
            {
              name: 'Hody Jones',
              image: C036,
              imageM: CM036,
              grade: 1,
              type: {
                race: 'Fishman',
                job: 'Fighter',
                special: ''
              },
              text: '[Auto]: When this card send into your drop zone. Put this unit into your hand.',
              power: 500,
              code: '036'
            },
            {
              name: 'Fisher Tiger',
              image: C035,
              imageM: CM035,
              grade: 3,
              type: {
                race: 'Fishman',
                job: 'Fighter',
                special: ''
              },
              text: '[Cont]: All "Fishman" unit your control get Power + 500.',
              power: 2500,
              code: '035'
            },
            {
              name: 'Monkey D. Luffy',
              image: C034,
              imageM: CM034,
              grade: 3,
              type: {
                race: 'Undead',
                job: 'Swordman',
                special: 'Paramecia'
              },
              text: '[Auto]: When this unit is placed on battlefield from your drop zone. Pay 500 life points, then this unit get Power + 500 for each card in your drop zone until end this turn.',
              power: 2500,
              code: '034'
            },
            {
              name: 'Gecko Moria',
              image: C033,
              imageM: CM033,
              grade: 3,
              type: {
                race: 'Undead',
                job: 'Spellcaster',
                special: 'Paramecia'
              },
              text: '[Act][1/Turn]: Pay 1000 life points, send one other unit your control into drop zone. Call up to one unit from drop zone.',
              power: 2500,
              code: '033'
            },
            {
              name: 'Buggy',
              image: C032,
              imageM: CM032,
              grade: 1,
              type: {
                race: 'Human',
                job: 'Fighter',
                special: 'Paramecia'
              },
              text: '[Auto]: When this unit destroyed by battle. Put this unit into your hand.',
              power: 500,
              code: '032'
            },
            {
              name: 'Sir Crocodile',
              image: C031,
              imageM: CM031,
              grade: 3,
              type: {
                race: 'Human',
                job: 'Spellcaster',
                special: 'Logia'
              },
              text: '[Cont]: All your opponent unit get Power - 500 for each your Grade 2 or less unit on the Field. [Act][1/Turn]: Put top of your deck into drop zone. This unit get Power + 1000 until end this turn.',
              power: 2500,
              code: '031'
            },
            {
              name: 'Kozuki Momonosuke',
              image: C030,
              imageM: CM030,
              grade: 1,
              type: {
                race: 'Human',
                job: 'Swordman',
                special: 'Zoan'
              },
              text: '[Auto]: When this unit is placed on battlefield. Add up to one "Swordman" card from your deck into your hand, then shuffle your deck.',
              power: 0,
              code: '030'
            },
            {
              name: 'Tama',
              image: C029,
              imageM: CM029,
              grade: 1,
              type: {
                race: 'Human',
                job: '',
                special: 'Paramecia'
              },
              text: '[Auto]: When this unit is placed on battlefield. Add up to one "Beast" or "Zoan" card from your deck into your hand, then shuffle your deck.',
              power: 0,
              code: '029'
            },
            {
              name: 'Smoker',
              image: C028,
              imageM: CM028,
              grade: 2,
              type: {
                race: 'Human',
                job: 'Swordman',
                special: 'Logia'
              },
              text: '[Act][1/Turn]: Pay 500 life points. Choose up to one Grade 2 or less opponent control, then Rest that unit. [Auto]: When this unit attack. Pay 500 life points. Choose up to one Grade 2 or less opponent control, then Rest that unit.',
              power: 1500,
              code: '028'
            },
            {
              name: 'Vinsmoke Sora',
              image: C027,
              imageM: CM027,
              grade: 1,
              type: {
                race: 'Human',
                job: '',
                special: ''
              },
              text: '[Auto]: When this unit send into drop zone. Put this unit into bottom of your deck, then choose up to two "Vinsmoke" in its card name from your drop zone, and put that card into your hand.',
              power: 0,
              code: '027'
            },
            {
              name: 'Vinsmoke Judge',
              image: C026,
              imageM: CM026,
              grade: 3,
              type: {
                race: 'Human',
                job: 'Fighter',
                special: ''
              },
              text: '[Act][1/Turn]: Discard a card with "Vinsmoke" in its card name from your hand. Call up to one "Vinsmoke" in its card name other "Vinsmoke Judge" from your deck. Shuffle your deck',
              power: 2500,
              code: '026'
            },
            {
              name: 'Vinsmoke Reiju',
              image: C025,
              imageM: CM025,
              grade: 1,
              type: {
                race: 'Human',
                job: 'Fighter',
                special: 'Paramecia'
              },
              text: '[Auto]: When this unit send into drop zone. Put this unit into bottom of your deck, then all "Vinsmoke" unit your control get Power + 1000, until end this turn.',
              power: 500,
              code: '025'
            },
            {
              name: 'Vinsmoke Ichiji',
              image: C024,
              imageM: CM024,
              grade: 1,
              type: {
                race: 'Human',
                job: 'Fighter',
                special: ''
              },
              text: '[Act][1/Turn]: Discard a card with "Vinsmoke" in its card name from your hand. Choose up to one Grade 1 your opponent unit, and destroy that unit.',
              power: 500,
              code: '024'
            },
            {
              name: 'Vinsmoke Niji',
              image: C023,
              imageM: CM023,
              grade: 1,
              type: {
                race: 'Human',
                job: 'Fighter',
                special: ''
              },
              text: '[Act][1/Turn]: Discard a card with "Vinsmoke" in its card name from your hand. Choose up to one Grade 1 your opponent unit, and bind that unit.',
              power: 500,
              code: '023'
            },
            {
              name: 'Vinsmoke Sanji',
              image: C022,
              imageM: CM022,
              grade: 2,
              type: {
                race: 'Human',
                job: 'Fighter',
                special: ''
              },
              text: '[Act][1/Turn]: Discard a card with "Vinsmoke" in its card name from your hand. This unit get Power + 3000 until end this turn.',
              power: 1500,
              code: '022'
            },
            {
              name: 'Vinsmoke Yonji',
              image: C021,
              imageM: CM021,
              grade: 1,
              type: {
                race: 'Human',
                job: 'Fighter',
                special: ''
              },
              text: '[Auto]: When this unit attack. If you control another "Vinsmoke", this unit get Power + 1500 until end this turn.',
              power: 500,
              code: '021'
            },
            {
              name: 'Nefertari Vivi',
              image: C020,
              imageM: CM020,
              grade: 1,
              type: {
                race: 'Human',
                job: 'Gunner',
                special: ''
              },
              text: '[Auto]: When this unit is placed on battlefield. You may bind this unit, then call up to one Grade 1 other "Nefertari VIvi" in its card name from your deck. Shuffle your deck',
              power: 500,
              code: '020'
            },
            {
              name: 'Monkey D. Luffy',
              image: C019,
              imageM: CM019,
              grade: 3,
              type: {
                race: 'Human',
                job: 'Fighter',
                special: 'Paramecia'
              },
              text: '[Cont]: For each Grade 2 or less unit your control, this unit get Power + 500.',
              power: 2500,
              code: '019'
            },
            {
              name: 'Roronoa Zoro',
              image: C018,
              imageM: CM018,
              grade: 2,
              type: {
                race: 'Human',
                job: 'Swordman',
                special: ''
              },
              text: '[Auto]: When this unit block. This unit get Power + 2000, until end this turn. If your life points is grether than 500, pay 500 life points and this unit get Power + 1000, until end this turn.',
              power: 1500,
              code: '018'
            },
            {
              name: 'Vinsmoke Sanji',
              image: C017,
              imageM: CM017,
              grade: 2,
              type: {
                race: 'Human',
                job: 'Fighter',
                special: ''
              },
              text: '[Act][1/Turn]: Discard a card from your hand. This unit get Power + 2000.',
              power: 1500,
              code: '017'
            },
            {
              name: 'Nami',
              image: C016,
              imageM: CM016,
              grade: 1,
              type: {
                race: 'Human',
                job: 'Spellcaster',
                special: ''
              },
              text: '[Auto]: When this unit is placed on battlefield. Choose up to one Grade 1 your opponent unit, and bind that unit.',
              power: 500,
              code: '016'
            },
            {
              name: 'Usopp',
              image: C015,
              imageM: CM015,
              grade: 1,
              type: {
                race: 'Human',
                job: 'Gunner',
                special: ''
              },
              text: '[Auto]: When this unit is placed on battlefield. Call up to one Grade 1 other "Usopp" in its card name from your deck, then shuffle your deck.',
              power: 500,
              code: '015'
            },
            {
              name: 'Tony Tony Chopper',
              image: C014,
              imageM: CM014,
              grade: 1,
              type: {
                race: 'Beast',
                job: 'Fighter',
                special: 'Zoan'
              },
              text: '[Cont]: When you gain life points. Increase 2000 life points .',
              power: 500,
              code: '014'
            },
            {
              name: 'Nico Robin',
              image: C013,
              imageM: CM013,
              grade: 1,
              type: {
                race: 'Human',
                job: 'Fighter',
                special: 'Paramecia'
              },
              text: '[Cont]: When you draw a card. This unit get Power + 500 (Stack Effect).',
              power: 500,
              code: '013'
            },
            {
              name: 'Franky',
              image: C012,
              imageM: CM012,
              grade: 1,
              type: {
                race: 'Cyborg',
                job: 'Fighter',
                special: ''
              },
              text: '[Cont]: When your opponent card is send into drop zone. This unit get Power + 500 (Stack Effect).',
              power: 500,
              code: '012'
            },
            {
              name: 'Brook',
              image: C011,
              imageM: CM011,
              grade: 1,
              type: {
                race: 'Undead',
                job: 'Swordman',
                special: 'Paramecia'
              },
              text: '[Auto]: When this unit is send into drop zone. Bind this card, then call up to one "Brook" in its card name from your drop zone.',
              power: 500,
              code: '011'
            },
            {
              name: 'Jinbei',
              image: C010,
              imageM: CM010,
              grade: 2,
              type: {
                race: 'Fishman',
                job: 'Fighter',
                special: ''
              },
              text: '[Auto]: When this unit is placed on battlefield. Choose up to one Grade 2 or less your opponent unit, and put that unit into opponent hand.',
              power: 1500,
              code: '010'
            },
            {
              name: 'Brook',
              image: C009,
              imageM: CM009,
              grade: 1,
              type: {
                race: 'Undead',
                job: 'Swordman',
                special: 'Paramecia'
              },
              text: '[Auto]: When this unit is send into drop zone. Call up to one "Brook" in its card name from your deck, then shuffle your deck.',
              power: 500,
              code: '009'
            },
            {
              name: 'Franky',
              image: C008,
              imageM: CM008,
              grade: 1,
              type: {
                race: 'Cyborg',
                job: 'Gunner',
                special: ''
              },
              text: '[Auto]: When this unit is placed on battlefield. Choose up to one Grade 1 your opponent unit, and destroy that unit.',
              power: 500,
              code: '008'
            },
            {
              name: 'Nico Robin',
              image: C007,
              imageM: CM007,
              grade: 1,
              type: {
                race: 'Human',
                job: 'Fighter',
                special: 'Paramecia'
              },
              text: '[Auto]: When this unit is placed on battlefield. Draw two cards, then put a card from your hand into bottom deck.',
              power: 500,
              code: '007'
            },
            {
              name: 'Tony Tony Chopper',
              image: C006,
              imageM: CM006,
              grade: 1,
              type: {
                race: 'Beast',
                job: 'Fighter',
                special: 'Zoan'
              },
              text: '[Auto]: When this unit is placed on battlefield. Increase 2000 life points.',
              power: 500,
              code: '006'
            },
            {
              name: 'Usopp',
              image: C005,
              imageM: CM005,
              grade: 1,
              type: {
                race: 'Human',
                job: 'Gunner',
                special: ''
              },
              text: '[Auto]: When this unit is placed on battlefield. Add up to one Grade 1 from your deck into your hand, then shuffle your deck.',
              power: 500,
              code: '005'
            },
            {
              name: 'Nami',
              image: C004,
              imageM: CM004,
              grade: 1,
              type: {
                race: 'Human',
                job: 'Spellcaster',
                special: ''
              },
              text: '[Auto]: When this unit is placed on battlefield. Draw a card.',
              power: 500,
              code: '004'
            },
            {
              name: 'Vinsmoke Sanji',
              image: C003,
              imageM: CM003,
              grade: 2,
              type: {
                race: 'Human',
                job: 'Fighter',
                special: ''
              },
              text: '[Auto]: When this unit block. This unit get Power + 2000, until end this turn.',
              power: 1500,
              code: '003'
            },
            {
              name: 'Roronoa Zoro',
              image: C002,
              imageM: CM002,
              grade: 2,
              type: {
                race: 'Human',
                job: 'Swordman',
                special: ''
              },
              text: '[Auto]: When this unit attack. This unit get Power + 1000, until end this turn. You can pay 500 life points, then this unit get Power + 1000, until end this turn.',
              power: 1500,
              code: '002'
            },
            {
              name: 'Monkey D. Luffy',
              image: C001,
              imageM: CM001,
              grade: 3,
              type: {
                race: 'Human',
                job: 'Fighter',
                special: 'Paramecia'
              },
              text: '[Auto]: When this unit attack or block. This unit get Power + 1000, until end this turn.',
              power: 2500,
              code: '001'
            }
          ]
        }
      }
    }
  },
  computed: {
    ...mapGetters({
      deckPlay: 'deckPlay'
    })
  },
  methods: {
    ...mapActions([
      // 'add_numb_a'
    ]),
    changeDisplay (data) {
      this.data.edit.display = data
      // this.data.arena.display = data
    },
    addToDeck (data) {
      this.checkDeck(data)
    },
    checkDeck (data) {
      if (this.data.edit.deck.length < 40) {
        this.checkCard(data)
      } else {
        console.log('Deck Harus 40 Kartu')
      }
    },
    checkCard (data) {
      let copy = 0
      this.data.edit.deck.map((card) => {
        if (card.name === data.name) {
          copy += 1
        }
      })
      if (copy < 4) {
        this.data.edit.deck.push(data)
      } else {
        console.log('Maksimal Kartu 4 Copy')
      }
    },
    removeCard (data, index) {
      this.data.edit.deck.splice(index, 1)
    },
    changeTitle (title) {
      this.data.edit.title = title
    },
    loadDeck (data) {
      this.data.edit.title = data.title
      this.data.edit.deck = data.deck
    },
    sortData (byKey) {
      let sortedData
      if (byKey === 'name') {
        sortedData = this.data.edit.cards.sort((a, b) => {
          const x = a.name.toLowerCase()
          const y = b.name.toLowerCase()
          if (x > y) { return 1 }
          if (x < y) { return -1 }
          return 0
        })
      }
      if (byKey === 'grade') {
        sortedData = this.data.edit.cards.sort((a, b) => {
          const x = a.grade
          const y = b.grade
          if (x > y) { return 1 }
          if (x < y) { return -1 }
          return 0
        })
      }
      if (byKey === 'power') {
        sortedData = this.data.edit.cards.sort((a, b) => {
          const x = a.power
          const y = b.power
          if (x > y) { return 1 }
          if (x < y) { return -1 }
          return 0
        })
      }
      if (byKey === 'race') {
        sortedData = this.data.edit.cards.sort((a, b) => {
          const x = a.type.race
          const y = b.type.race
          if (x > y) { return 1 }
          if (x < y) { return -1 }
          return 0
        })
      }
      if (byKey === 'job') {
        sortedData = this.data.edit.cards.sort((a, b) => {
          const x = a.type.job
          const y = b.type.job
          if (x > y) { return 1 }
          if (x < y) { return -1 }
          return 0
        })
      }
      if (byKey === 'special') {
        sortedData = this.data.edit.cards.sort((a, b) => {
          const x = a.type.special
          const y = b.type.special
          if (x > y) { return 1 }
          if (x < y) { return -1 }
          return 0
        })
      }
      return sortedData
    }
  }
}
</script>
