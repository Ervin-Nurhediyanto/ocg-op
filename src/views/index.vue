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
      v-on:deleteDeck="deleteDeck"
    />
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
import C085 from '../assets/cards/085.png'
import CM085 from '../assets/mini-cards/085.png'
import C086 from '../assets/cards/086.png'
import CM086 from '../assets/mini-cards/086.png'
import C087 from '../assets/cards/087.png'
import CM087 from '../assets/mini-cards/087.png'
import C088 from '../assets/cards/088.png'
import CM088 from '../assets/mini-cards/088.png'
import C089 from '../assets/cards/089.png'
import CM089 from '../assets/mini-cards/089.png'
import C090 from '../assets/cards/090.png'
import CM090 from '../assets/mini-cards/090.png'
import C091 from '../assets/cards/091.png'
import CM091 from '../assets/mini-cards/091.png'
import C092 from '../assets/cards/092.png'
import CM092 from '../assets/mini-cards/092.png'
import C093 from '../assets/cards/093.png'
import CM093 from '../assets/mini-cards/093.png'
import C094 from '../assets/cards/094.png'
import CM094 from '../assets/mini-cards/094.png'
import C095 from '../assets/cards/095.png'
import CM095 from '../assets/mini-cards/095.png'
import C096 from '../assets/cards/096.png'
import CM096 from '../assets/mini-cards/096.png'
import C097 from '../assets/cards/097.png'
import CM097 from '../assets/mini-cards/097.png'
import C098 from '../assets/cards/098.png'
import CM098 from '../assets/mini-cards/098.png'
import C099 from '../assets/cards/099.png'
import CM099 from '../assets/mini-cards/099.png'
import C100 from '../assets/cards/100.png'
import CM100 from '../assets/mini-cards/100.png'
import C101 from '../assets/cards/101.png'
import CM101 from '../assets/mini-cards/101.png'
import C102 from '../assets/cards/102.png'
import CM102 from '../assets/mini-cards/102.png'
import C103 from '../assets/cards/103.png'
import CM103 from '../assets/mini-cards/103.png'
import C104 from '../assets/cards/104.png'
import CM104 from '../assets/mini-cards/104.png'
import C105 from '../assets/cards/105.png'
import CM105 from '../assets/mini-cards/105.png'
import C106 from '../assets/cards/106.png'
import CM106 from '../assets/mini-cards/106.png'
import C107 from '../assets/cards/107.png'
import CM107 from '../assets/mini-cards/107.png'
import C108 from '../assets/cards/108.png'
import CM108 from '../assets/mini-cards/108.png'
import C109 from '../assets/cards/109.png'
import CM109 from '../assets/mini-cards/109.png'
import C110 from '../assets/cards/110.png'
import CM110 from '../assets/mini-cards/110.png'
import C111 from '../assets/cards/111.png'
import CM111 from '../assets/mini-cards/111.png'
import C112 from '../assets/cards/112.png'
import CM112 from '../assets/mini-cards/112.png'
import C113 from '../assets/cards/113.png'
import CM113 from '../assets/mini-cards/113.png'
import C114 from '../assets/cards/114.png'
import CM114 from '../assets/mini-cards/114.png'
import C115 from '../assets/cards/115.png'
import CM115 from '../assets/mini-cards/115.png'
import C116 from '../assets/cards/116.png'
import CM116 from '../assets/mini-cards/116.png'
import C117 from '../assets/cards/117.png'
import CM117 from '../assets/mini-cards/117.png'
import C118 from '../assets/cards/118.png'
import CM118 from '../assets/mini-cards/118.png'
import C119 from '../assets/cards/119.png'
import CM119 from '../assets/mini-cards/119.png'
import C120 from '../assets/cards/120.png'
import CM120 from '../assets/mini-cards/120.png'
import C121 from '../assets/cards/121.png'
import CM121 from '../assets/mini-cards/121.png'
import C122 from '../assets/cards/122.png'
import CM122 from '../assets/mini-cards/122.png'
import C123 from '../assets/cards/123.png'
import CM123 from '../assets/mini-cards/123.png'
import C124 from '../assets/cards/124.png'
import CM124 from '../assets/mini-cards/124.png'
import C125 from '../assets/cards/125.png'
import CM125 from '../assets/mini-cards/125.png'
import C126 from '../assets/cards/126.png'
import CM126 from '../assets/mini-cards/126.png'
import C127 from '../assets/cards/127.png'
import CM127 from '../assets/mini-cards/127.png'
import C128 from '../assets/cards/128.png'
import CM128 from '../assets/mini-cards/128.png'
import C129 from '../assets/cards/129.png'
import CM129 from '../assets/mini-cards/129.png'
import C130 from '../assets/cards/130.png'
import CM130 from '../assets/mini-cards/130.png'
import C131 from '../assets/cards/131.png'
import CM131 from '../assets/mini-cards/131.png'
import C132 from '../assets/cards/132.png'
import CM132 from '../assets/mini-cards/132.png'
import C133 from '../assets/cards/133.png'
import CM133 from '../assets/mini-cards/133.png'
import C134 from '../assets/cards/134.png'
import CM134 from '../assets/mini-cards/134.png'
import C135 from '../assets/cards/135.png'
import CM135 from '../assets/mini-cards/135.png'
import C136 from '../assets/cards/136.png'
import CM136 from '../assets/mini-cards/136.png'
import C137 from '../assets/cards/137.png'
import CM137 from '../assets/mini-cards/137.png'
import C138 from '../assets/cards/138.png'
import CM138 from '../assets/mini-cards/138.png'
import C139 from '../assets/cards/139.png'
import CM139 from '../assets/mini-cards/139.png'
import C140 from '../assets/cards/140.png'
import CM140 from '../assets/mini-cards/140.png'
import C141 from '../assets/cards/141.png'
import CM141 from '../assets/mini-cards/141.png'
import C142 from '../assets/cards/142.png'
import CM142 from '../assets/mini-cards/142.png'
import C143 from '../assets/cards/143.png'
import CM143 from '../assets/mini-cards/143.png'
import C144 from '../assets/cards/144.png'
import CM144 from '../assets/mini-cards/144.png'
import C145 from '../assets/cards/145.png'
import CM145 from '../assets/mini-cards/145.png'
import C146 from '../assets/cards/146.png'
import CM146 from '../assets/mini-cards/146.png'
import C147 from '../assets/cards/147.png'
import CM147 from '../assets/mini-cards/147.png'
import C148 from '../assets/cards/148.png'
import CM148 from '../assets/mini-cards/148.png'
import C149 from '../assets/cards/149.png'
import CM149 from '../assets/mini-cards/149.png'
import C150 from '../assets/cards/150.png'
import CM150 from '../assets/mini-cards/150.png'
import C151 from '../assets/cards/151.png'
import CM151 from '../assets/mini-cards/151.png'
import C152 from '../assets/cards/152.png'
import CM152 from '../assets/mini-cards/152.png'
import C153 from '../assets/cards/153.png'
import CM153 from '../assets/mini-cards/153.png'
import C154 from '../assets/cards/154.png'
import CM154 from '../assets/mini-cards/154.png'
import C155 from '../assets/cards/155.png'
import CM155 from '../assets/mini-cards/155.png'
import C156 from '../assets/cards/156.png'
import CM156 from '../assets/mini-cards/156.png'
import C157 from '../assets/cards/157.png'
import CM157 from '../assets/mini-cards/157.png'
import C158 from '../assets/cards/158.png'
import CM158 from '../assets/mini-cards/158.png'
import C159 from '../assets/cards/159.png'
import CM159 from '../assets/mini-cards/159.png'
import C160 from '../assets/cards/160.png'
import CM160 from '../assets/mini-cards/160.png'
import C161 from '../assets/cards/161.png'
import CM161 from '../assets/mini-cards/161.png'
import C162 from '../assets/cards/162.png'
import CM162 from '../assets/mini-cards/162.png'
import C163 from '../assets/cards/163.png'
import CM163 from '../assets/mini-cards/163.png'
import C164 from '../assets/cards/164.png'
import CM164 from '../assets/mini-cards/164.png'
import C165 from '../assets/cards/165.png'
import CM165 from '../assets/mini-cards/165.png'
import C166 from '../assets/cards/166.png'
import CM166 from '../assets/mini-cards/166.png'
import C167 from '../assets/cards/167.png'
import CM167 from '../assets/mini-cards/167.png'
import C168 from '../assets/cards/168.png'
import CM168 from '../assets/mini-cards/168.png'
import C169 from '../assets/cards/169.png'
import CM169 from '../assets/mini-cards/169.png'
import C170 from '../assets/cards/170.png'
import CM170 from '../assets/mini-cards/170.png'
import C171 from '../assets/cards/171.png'
import CM171 from '../assets/mini-cards/171.png'
import C172 from '../assets/cards/172.png'
import CM172 from '../assets/mini-cards/172.png'
import C173 from '../assets/cards/173.png'
import CM173 from '../assets/mini-cards/173.png'
import C174 from '../assets/cards/174.png'
import CM174 from '../assets/mini-cards/174.png'
import C175 from '../assets/cards/175.png'
import CM175 from '../assets/mini-cards/175.png'
import C176 from '../assets/cards/176.png'
import CM176 from '../assets/mini-cards/176.png'
import C177 from '../assets/cards/177.png'
import CM177 from '../assets/mini-cards/177.png'
import C178 from '../assets/cards/178.png'
import CM178 from '../assets/mini-cards/178.png'
import C179 from '../assets/cards/179.png'
import CM179 from '../assets/mini-cards/179.png'
import C180 from '../assets/cards/180.png'
import CM180 from '../assets/mini-cards/180.png'
import C181 from '../assets/cards/181.png'
import CM181 from '../assets/mini-cards/181.png'
import C182 from '../assets/cards/182.png'
import CM182 from '../assets/mini-cards/182.png'
import C183 from '../assets/cards/183.png'
import CM183 from '../assets/mini-cards/183.png'
import C184 from '../assets/cards/184.png'
import CM184 from '../assets/mini-cards/184.png'
import C185 from '../assets/cards/185.png'
import CM185 from '../assets/mini-cards/185.png'
import C186 from '../assets/cards/186.png'
import CM186 from '../assets/mini-cards/186.png'
import C187 from '../assets/cards/187.png'
import CM187 from '../assets/mini-cards/187.png'
import C188 from '../assets/cards/188.png'
import CM188 from '../assets/mini-cards/188.png'
import C189 from '../assets/cards/189.png'
import CM189 from '../assets/mini-cards/189.png'
import C190 from '../assets/cards/190.png'
import CM190 from '../assets/mini-cards/190.png'
import C191 from '../assets/cards/191.png'
import CM191 from '../assets/mini-cards/191.png'
import C192 from '../assets/cards/192.png'
import CM192 from '../assets/mini-cards/192.png'
import C193 from '../assets/cards/193.png'
import CM193 from '../assets/mini-cards/193.png'
import C194 from '../assets/cards/194.png'
import CM194 from '../assets/mini-cards/194.png'
import C195 from '../assets/cards/195.png'
import CM195 from '../assets/mini-cards/195.png'
import C196 from '../assets/cards/196.png'
import CM196 from '../assets/mini-cards/196.png'
import C197 from '../assets/cards/197.png'
import CM197 from '../assets/mini-cards/197.png'
import C198 from '../assets/cards/198.png'
import CM198 from '../assets/mini-cards/198.png'
import C199 from '../assets/cards/199.png'
import CM199 from '../assets/mini-cards/199.png'
import C200 from '../assets/cards/200.png'
import CM200 from '../assets/mini-cards/200.png'
import C201 from '../assets/cards/201.png'
import CM201 from '../assets/mini-cards/201.png'
import C202 from '../assets/cards/202.png'
import CM202 from '../assets/mini-cards/202.png'
import C203 from '../assets/cards/203.png'
import CM203 from '../assets/mini-cards/203.png'
import C204 from '../assets/cards/204.png'
import CM204 from '../assets/mini-cards/204.png'
import C205 from '../assets/cards/205.png'
import CM205 from '../assets/mini-cards/205.png'
import C206 from '../assets/cards/206.png'
import CM206 from '../assets/mini-cards/206.png'
import C207 from '../assets/cards/207.png'
import CM207 from '../assets/mini-cards/207.png'
import C208 from '../assets/cards/208.png'
import CM208 from '../assets/mini-cards/208.png'
import C209 from '../assets/cards/209.png'
import CM209 from '../assets/mini-cards/209.png'
import C210 from '../assets/cards/210.png'
import CM210 from '../assets/mini-cards/210.png'
import C211 from '../assets/cards/211.png'
import CM211 from '../assets/mini-cards/211.png'
import C212 from '../assets/cards/212.png'
import CM212 from '../assets/mini-cards/212.png'
import C213 from '../assets/cards/213.png'
import CM213 from '../assets/mini-cards/213.png'
import C214 from '../assets/cards/214.png'
import CM214 from '../assets/mini-cards/214.png'
import C215 from '../assets/cards/215.png'
import CM215 from '../assets/mini-cards/215.png'
import C216 from '../assets/cards/216.png'
import CM216 from '../assets/mini-cards/216.png'
import C217 from '../assets/cards/217.png'
import CM217 from '../assets/mini-cards/217.png'
import C218 from '../assets/cards/218.png'
import CM218 from '../assets/mini-cards/218.png'
import C219 from '../assets/cards/219.png'
import CM219 from '../assets/mini-cards/219.png'
import C220 from '../assets/cards/220.png'
import CM220 from '../assets/mini-cards/220.png'
import C221 from '../assets/cards/221.png'
import CM221 from '../assets/mini-cards/221.png'
import C222 from '../assets/cards/222.png'
import CM222 from '../assets/mini-cards/222.png'
import C223 from '../assets/cards/223.png'
import CM223 from '../assets/mini-cards/223.png'
import C224 from '../assets/cards/224.png'
import CM224 from '../assets/mini-cards/224.png'
import C225 from '../assets/cards/225.png'
import CM225 from '../assets/mini-cards/225.png'
import C226 from '../assets/cards/226.png'
import CM226 from '../assets/mini-cards/226.png'
import C227 from '../assets/cards/227.png'
import CM227 from '../assets/mini-cards/227.png'
import C228 from '../assets/cards/228.png'
import CM228 from '../assets/mini-cards/228.png'
import C229 from '../assets/cards/229.png'
import CM229 from '../assets/mini-cards/229.png'
import C230 from '../assets/cards/230.png'
import CM230 from '../assets/mini-cards/230.png'
import C231 from '../assets/cards/231.png'
import CM231 from '../assets/mini-cards/231.png'
import C232 from '../assets/cards/232.png'
import CM232 from '../assets/mini-cards/232.png'
import C233 from '../assets/cards/233.png'
import CM233 from '../assets/mini-cards/233.png'
import C234 from '../assets/cards/234.png'
import CM234 from '../assets/mini-cards/234.png'
import C235 from '../assets/cards/235.png'
import CM235 from '../assets/mini-cards/235.png'
import C236 from '../assets/cards/236.png'
import CM236 from '../assets/mini-cards/236.png'
import C237 from '../assets/cards/237.png'
import CM237 from '../assets/mini-cards/237.png'
import C238 from '../assets/cards/238.png'
import CM238 from '../assets/mini-cards/238.png'
import C239 from '../assets/cards/239.png'
import CM239 from '../assets/mini-cards/239.png'
import C240 from '../assets/cards/240.png'
import CM240 from '../assets/mini-cards/240.png'
import C241 from '../assets/cards/241.png'
import CM241 from '../assets/mini-cards/241.png'
import C242 from '../assets/cards/242.png'
import CM242 from '../assets/mini-cards/242.png'
import C243 from '../assets/cards/243.png'
import CM243 from '../assets/mini-cards/243.png'
import C244 from '../assets/cards/244.png'
import CM244 from '../assets/mini-cards/244.png'
import C245 from '../assets/cards/245.png'
import CM245 from '../assets/mini-cards/245.png'
import C246 from '../assets/cards/246.png'
import CM246 from '../assets/mini-cards/246.png'
import C247 from '../assets/cards/247.png'
import CM247 from '../assets/mini-cards/247.png'
import C248 from '../assets/cards/248.png'
import CM248 from '../assets/mini-cards/248.png'
import C249 from '../assets/cards/249.png'
import CM249 from '../assets/mini-cards/249.png'
import C250 from '../assets/cards/250.png'
import CM250 from '../assets/mini-cards/250.png'
import C251 from '../assets/cards/251.png'
import CM251 from '../assets/mini-cards/251.png'
import C252 from '../assets/cards/252.png'
import CM252 from '../assets/mini-cards/252.png'
import C253 from '../assets/cards/253.png'
import CM253 from '../assets/mini-cards/253.png'
import C254 from '../assets/cards/254.png'
import CM254 from '../assets/mini-cards/254.png'
import C255 from '../assets/cards/255.png'
import CM255 from '../assets/mini-cards/255.png'
import C256 from '../assets/cards/256.png'
import CM256 from '../assets/mini-cards/256.png'
import C257 from '../assets/cards/257.png'
import CM257 from '../assets/mini-cards/257.png'
import C258 from '../assets/cards/258.png'
import CM258 from '../assets/mini-cards/258.png'
import C259 from '../assets/cards/259.png'
import CM259 from '../assets/mini-cards/259.png'
import C260 from '../assets/cards/260.png'
import CM260 from '../assets/mini-cards/260.png'
import C261 from '../assets/cards/261.png'
import CM261 from '../assets/mini-cards/261.png'
import C262 from '../assets/cards/262.png'
import CM262 from '../assets/mini-cards/262.png'
import C263 from '../assets/cards/263.png'
import CM263 from '../assets/mini-cards/263.png'
import C264 from '../assets/cards/264.png'
import CM264 from '../assets/mini-cards/264.png'
import C265 from '../assets/cards/265.png'
import CM265 from '../assets/mini-cards/265.png'
import C266 from '../assets/cards/266.png'
import CM266 from '../assets/mini-cards/266.png'
import C267 from '../assets/cards/267.png'
import CM267 from '../assets/mini-cards/267.png'
import C268 from '../assets/cards/268.png'
import CM268 from '../assets/mini-cards/268.png'
import C269 from '../assets/cards/269.png'
import CM269 from '../assets/mini-cards/269.png'
import C270 from '../assets/cards/270.png'
import CM270 from '../assets/mini-cards/270.png'
import C271 from '../assets/cards/271.png'
import CM271 from '../assets/mini-cards/271.png'
import C272 from '../assets/cards/272.png'
import CM272 from '../assets/mini-cards/272.png'
import C273 from '../assets/cards/273.png'
import CM273 from '../assets/mini-cards/273.png'
import C274 from '../assets/cards/274.png'
import CM274 from '../assets/mini-cards/274.png'
import C275 from '../assets/cards/275.png'
import CM275 from '../assets/mini-cards/275.png'
// import C276 from '../assets/cards/276.png'
// import CM276 from '../assets/mini-cards/276.png'

export default {
  name: 'Main',
  data () {
    return {
      data: {
        edit: {
          title: '',
          deck: [],
          display: {
            name: 'Hatchan',
            // image: C276,
            // imageM: CM276,
            grade: 1,
            type: {
              race: 'Fishman',
              job: 'Fighter',
              special: ''
            },
            text: '[Auto]: When this unit is placed on battlefield. If you control three or more "Fishman" unit, draw two cards.',
            power: 500,
            code: '276'
          },
          allCard: [],
          cards: [
            {
              name: 'Hatchan',
              image: C275,
              imageM: CM275,
              grade: 1,
              type: {
                race: 'Fishman',
                job: 'Fighter',
                special: ''
              },
              text: '[Auto]: When this unit is placed on battlefield. If you control three or more "Fishman" unit, draw two cards.',
              power: 500,
              code: '275'
            },
            {
              name: 'Duval',
              image: C274,
              imageM: CM274,
              grade: 1,
              type: {
                race: 'Human',
                job: 'Swordman',
                special: ''
              },
              text: '[Act][1/Turn]: Pay 500 life points. Add up to one "Vinsmoke Sanji" in its card name from deck into your hand. Shuffle your deck.',
              power: 500,
              code: '274'
            },
            {
              name: 'Pappug',
              image: C273,
              imageM: CM273,
              grade: 1,
              type: {
                race: 'Fishman',
                job: '',
                special: ''
              },
              text: '[Auto]: When this unit is placed on battlefield. Call up to one "Keimi" in its card name from your deck. Shuffle your deck.',
              power: 0,
              code: '273'
            },
            {
              name: 'Keimi',
              image: C272,
              imageM: CM272,
              grade: 1,
              type: {
                race: 'Fishman',
                job: '',
                special: ''
              },
              text: '[Auto]: When this unit is placed on battlefield. Call one Grade 1 from your hand. If you do, put this unit to bottom of your deck and draw a card.',
              power: 0,
              code: '272'
            },
            {
              name: 'Brook',
              image: C271,
              imageM: CM271,
              grade: 1,
              type: {
                race: 'Human',
                job: 'Swordman',
                special: 'Paramecia'
              },
              text: '[Act][1/Turn]: Pay 500 life points. Put three cards from the top of your deck into the drop zone.',
              power: 500,
              code: '271'
            },
            {
              name: 'Gekko Moriah',
              image: C270,
              imageM: CM270,
              grade: 3,
              type: {
                race: 'Undead',
                job: 'Spellcaster',
                special: 'Paramecia'
              },
              text: '[Auto]: When this unit attack. Pay 1000 life points and put a card from the top of your deck into the drop zone. Send one unit your control to drop zone and call up to one Grade 3 or 2 unit from drop zone.',
              power: 2500,
              code: '270'
            },
            {
              name: 'Oars',
              image: C269,
              imageM: CM269,
              grade: 3,
              type: {
                race: 'Undead',
                job: 'Fighter',
                special: ''
              },
              text: '[Auto]: When this unit block. Put a card from the top of your deck into the drop zone. If opponent unit is destroyed by the battle, your opponent take 2000 damage.',
              power: 2500,
              code: '269'
            },
            {
              name: 'Monkey D. Luffy',
              image: C268,
              imageM: CM268,
              grade: 3,
              type: {
                race: 'Undead',
                job: 'Swordman',
                special: 'Paramecia'
              },
              text: '[Auto]: When this unit is placed on battlefield. Pay 500 life points, then this unit get Power + 500 for each card in your opponent drop zone until end of turn. [Auto]: At the end of turn. Send this unit to drop zone.',
              power: 2500,
              code: '268'
            },
            {
              name: 'Bartholomew Kuma',
              image: C267,
              imageM: CM267,
              grade: 3,
              type: {
                race: 'Cyborg',
                job: 'Fighter',
                special: 'Paramecia'
              },
              text: '[Auto]: When this unit attack. Each player put all unit they control into bottom of player deck, then each player increase they life points equal total power units put into bottom deck by this effect.',
              power: 2500,
              code: '267'
            },
            {
              name: 'Tony Tony Chopper',
              image: C266,
              imageM: CM266,
              grade: 2,
              type: {
                race: 'Beast',
                job: 'Fighter',
                special: 'Zoan'
              },
              text: '[Auto]: At the end of this turn. Put this unit into the bottom of your deck. Call up to one random Grade 1 "Tony Tony Chopper" in its card name from your deck. Shuffle your deck. [Auto]: When your life points increase. This unit get Power + 1000 until end of turn.',
              power: 1500,
              code: '266'
            },
            {
              name: 'Tony Tony Chopper',
              image: C265,
              imageM: CM265,
              grade: 1,
              type: {
                race: 'Beast',
                job: 'Fighter',
                special: 'Zoan'
              },
              text: '[Auto]: When this unit is placed on battlefield. Put a card from the top of your deck into the drop zone. For each Grade unit that put into drop zone by this effect, increase 1500 life points.',
              power: 500,
              code: '265'
            },
            {
              name: 'Usopp',
              image: C264,
              imageM: CM264,
              grade: 1,
              type: {
                race: 'Human',
                job: 'Fighter',
                special: ''
              },
              text: '[Auto]: When this unit is placed on battlefield. Put a card from the top of your deck into the drop zone. Destroy all opponent units with Power 500 or less.',
              power: 500,
              code: '264'
            },
            {
              name: 'Oars',
              image: C263,
              imageM: CM263,
              grade: 3,
              type: {
                race: 'Undead',
                job: 'Fighter',
                special: ''
              },
              text: '[Cont]: For each "Undead" unit your control, this unit get Power + 500.',
              power: 2500,
              code: '263'
            },
            {
              name: 'Gekko Moriah',
              image: C262,
              imageM: CM262,
              grade: 3,
              type: {
                race: 'Undead',
                job: 'Spellcaster',
                special: 'Paramecia'
              },
              text: '[Cont]: All "Undead" units you control get Power + 500.',
              power: 2500,
              code: '262'
            },
            {
              name: 'Brook',
              image: C261,
              imageM: CM261,
              grade: 1,
              type: {
                race: 'Undead',
                job: 'Swordman',
                special: 'Paramecia'
              },
              text: '[Auto]: When this unit is sent to the drop zone. Put a card from the top of your deck into the drop zone. Select up to three cards from your bind zone and place them at the bottom of your deck.',
              power: 500,
              code: '261'
            },
            {
              name: 'Franky',
              image: C260,
              imageM: CM260,
              grade: 1,
              type: {
                race: 'Cyborg',
                job: 'Gunner',
                special: ''
              },
              text: '[Auto]: When this unit is placed on battlefield. Put a card from top of your deck to drop zone. Choose up to one Grade 2 your opponent unit and destroy that unit.',
              power: 500,
              code: '260'
            },
            {
              name: 'Jigoro',
              image: C259,
              imageM: CM259,
              grade: 1,
              type: {
                race: 'Undead',
                job: 'Swordman',
                special: ''
              },
              text: '[Act][1/Turn]: Pay 500 life points and put a card from top of your deck to drop zone. This unit get Power + 2000 until end of turn.',
              power: 500,
              code: '259'
            },
            {
              name: 'Kumashi',
              image: C258,
              imageM: CM258,
              grade: 1,
              type: {
                race: 'Undead',
                job: '',
                special: ''
              },
              text: '[Auto]: When this unit is placed on battlefield. Put a card from top of your deck to drop zone. Put up to one "Perona" in its card name from deck into your hand. Shuffle your deck.',
              power: 500,
              code: '258'
            },
            {
              name: 'Perona',
              image: C257,
              imageM: CM257,
              grade: 1,
              type: {
                race: 'Human',
                job: 'Spellcaster',
                special: 'Paramecia'
              },
              text: '[Auto]: When this unit is placed on battlefield. Put a card from top of your deck to drop zone. Put up to one "Undead" from deck into your hand. Shuffle your deck.',
              power: 500,
              code: '257'
            },
            {
              name: 'Lola',
              image: C256,
              imageM: CM256,
              grade: 1,
              type: {
                race: 'Undead',
                job: 'Swordman',
                special: ''
              },
              text: '[Act][1/Turn]: Pay 500 life points and put a card from top of your deck to drop zone. Put up to one "Absalom" in its card name from deck into your hand. Shuffle your deck.',
              power: 500,
              code: '256'
            },
            {
              name: 'Tararan',
              image: C255,
              imageM: CM255,
              grade: 1,
              type: {
                race: 'Undead',
                job: '',
                special: ''
              },
              text: '[Auto]: When this unit block. Put a card from top of your deck to drop zone. Rest a random unit your opponent control.',
              power: 500,
              code: '255'
            },
            {
              name: 'Inuppe',
              image: C254,
              imageM: CM254,
              grade: 1,
              type: {
                race: 'Undead',
                job: 'Fighter',
                special: ''
              },
              text: '[Auto]: When this unit block. Put a card from top of your deck to drop zone. This unit get Power + 500 for each "Undead" in your drop zone until end this turn.',
              power: 500,
              code: '254'
            },
            {
              name: 'Risky Brothers',
              image: C253,
              imageM: CM253,
              grade: 1,
              type: {
                race: 'Undead',
                job: '',
                special: ''
              },
              text: '[Auto]: When this unit is placed on battlefield. Put two cards from top of your deck into drop zone.',
              power: 500,
              code: '253'
            },
            {
              name: 'Absalom',
              image: C252,
              imageM: CM252,
              grade: 2,
              type: {
                race: 'Undead',
                job: 'Gunner',
                special: 'Paramecia'
              },
              text: '[Auto]: When this unit attack. Put top of your deck into drop zone. Destroy Grade 2 or less random unit your opponent control.',
              power: 1500,
              code: '252'
            },
            {
              name: 'Shimotsuki Ryuma',
              image: C251,
              imageM: CM251,
              grade: 2,
              type: {
                race: 'Undead',
                job: 'Swordman',
                special: ''
              },
              text: '[Act][1/Turn]: Pay 500 life points and put top of your deck into drop zone. This unit get Power + 500 for each "Undead" in your drop zone.',
              power: 1500,
              code: '251'
            },
            {
              name: 'Dr Hogback',
              image: C250,
              imageM: CM250,
              grade: 1,
              type: {
                race: 'Human',
                job: '',
                special: ''
              },
              text: '[Auto]: When this unit is placed on battlefield. Pay 1000 life points and put top of your deck into drop zone. Call up to one Grade 2 or less unit from your drop zone.',
              power: 500,
              code: '250'
            },
            {
              name: 'Victoria Cindry',
              image: C249,
              imageM: CM249,
              grade: 1,
              type: {
                race: 'Undead',
                job: 'Fighter',
                special: ''
              },
              text: '[Auto]: When this unit is placed on battlefield. Put top of your deck into drop zone. draw a card.',
              power: 500,
              code: '249'
            },
            {
              name: 'Cerberus',
              image: C248,
              imageM: CM248,
              grade: 1,
              type: {
                race: 'Undead',
                job: '',
                special: ''
              },
              text: '[Auto]: When this unit is placed on battlefield. Put top of your deck into drop zone. your opponent take damage 500 points.',
              power: 500,
              code: '248'
            },
            {
              name: 'Brook',
              image: C247,
              imageM: CM247,
              grade: 1,
              type: {
                race: 'Undead',
                job: 'Swordman',
                special: 'Paramecia'
              },
              text: '[Auto]: When this unit is send into drop zone. Pay 500 life points and bind this. Call up to one "Brook" from your deck and that unit get Power + 500 for each card in your drop zone until end this turn.',
              power: 500,
              code: '247'
            },
            {
              name: 'Monkey D. Garp',
              image: C246,
              imageM: CM246,
              grade: 3,
              type: {
                race: 'Human',
                job: 'Fighter',
                special: ''
              },
              text: '[Cont]: When "Fighter" unit is placed on your battlefield. This unit get Power + 500 (Stack Effect).',
              power: 2500,
              code: '246'
            },
            {
              name: 'Helmeppo',
              image: C245,
              imageM: CM245,
              grade: 2,
              type: {
                race: 'Human',
                job: 'Swordman',
                special: ''
              },
              text: '[Auto]: When this unit attack. Pay 500 life points. Call up to one Grade 2 "Fighter" random unit from your deck. Shuffle your deck.',
              power: 1500,
              code: '245'
            },
            {
              name: 'Coby',
              image: C244,
              imageM: CM244,
              grade: 2,
              type: {
                race: 'Human',
                job: 'Fighter',
                special: ''
              },
              text: '[Auto]: When this unit block. This unit get Power + 500 for each "Fighter" unit your control until end this turn.',
              power: 1500,
              code: '244'
            },
            {
              name: 'Monkey D. Luffy',
              image: C243,
              imageM: CM243,
              grade: 3,
              type: {
                race: 'Human',
                job: 'Fighter',
                special: 'Paramecia'
              },
              text: '[Auto]: At the end your turn. Put this unit to bottom deck. [Auto]: When this unit attack. This unit get Power + 1000 for each unit your control until end this turn.',
              power: 2500,
              code: '243'
            },
            {
              name: 'Rob Lucci',
              image: C242,
              imageM: CM242,
              grade: 3,
              type: {
                race: 'Human',
                job: 'Fighter',
                special: 'Zoan'
              },
              text: '[Auto]: At the end your turn. Put this unit to bottom deck and call up to one random Grade 2 "Rob Lucci" from your deck. Shuffle your deck. [Auto]: When this unit attack. Pay 1000 life points and put random unit your control other this unit to drop zone, then call up to one "Rob Lucci" from your deck. Shuffle your deck.',
              power: 2500,
              code: '242'
            },
            {
              name: 'Vinsmoke Sanji',
              image: C241,
              imageM: CM241,
              grade: 2,
              type: {
                race: 'Human',
                job: 'Fighter',
                special: ''
              },
              text: '[Act][1/Turn]: Discard random card from your hand and put random two cards from your deck to drop zone. For each Grade unit discarded, this unit get Power + 2000 until the end of this turn.',
              power: 1500,
              code: '241'
            },
            {
              name: 'Jabra',
              image: C240,
              imageM: CM240,
              grade: 3,
              type: {
                race: 'Human',
                job: 'Fighter',
                special: 'Zoan'
              },
              text: '[Auto]: At the end your turn. Put this unit to bottom your deck. Call up to one random Grade 2 "Jabra" in its card name from your deck. Shuffle your deck. [Auto]: When this unit attack. Bind random unit from your deck. For each Grade unit bound, this unit get Power + 1000 until the end of this turn.',
              power: 2500,
              code: '240'
            },
            {
              name: 'Roronoa Zoro',
              image: C239,
              imageM: CM239,
              grade: 2,
              type: {
                race: 'Human',
                job: 'Swordman',
                special: ''
              },
              text: '[Act][1/Turn]: Pay 500 life points and discard random "Swordman" unit from your hand. For each Grade unit discarded, this unit get Power + 2000 until the end of this turn.',
              power: 1500,
              code: '239'
            },
            {
              name: 'Kaku',
              image: C238,
              imageM: CM238,
              grade: 3,
              type: {
                race: 'Human',
                job: 'Fighter',
                special: 'Zoan'
              },
              text: '[Auto]: At the end your turn. Put this unit to bottom your deck. Call up to one random Grade 2 "Kaku" in its card name from your deck. Shuffle your deck. [Auto]: When this unit attack. Discard random card from your hand. For each Grade unit discarded, this unit get Power + 1000 until the end of this turn.',
              power: 2500,
              code: '238'
            },
            {
              name: 'Jerry',
              image: C237,
              imageM: CM237,
              grade: 1,
              type: {
                race: 'Human',
                job: 'Fighter',
                special: ''
              },
              text: '[Auto]: When this unit attack. This unit get Power + 1000 until end this turn.',
              power: 500,
              code: '237'
            },
            {
              name: 'Nami',
              image: C236,
              imageM: CM236,
              grade: 1,
              type: {
                race: 'Human',
                job: 'Spellcaster',
                special: ''
              },
              text: '[Auto]: When this unit is placed on battlefield. Bind this unit and random Grade 2 or less opponent unit.',
              power: 500,
              code: '236'
            },
            {
              name: 'Nami',
              image: C235,
              imageM: CM235,
              grade: 1,
              type: {
                race: 'Human',
                job: 'Spellcaster',
                special: ''
              },
              text: '[Auto]: When this unit is placed on battlefield. Call up to one "Nami" in its card name from your bind zone.',
              power: 500,
              code: '235'
            },
            {
              name: 'Kalifa',
              image: C234,
              imageM: CM234,
              grade: 1,
              type: {
                race: 'Human',
                job: 'Spellcaster',
                special: 'Paramecia'
              },
              text: '[Cont]: CP9. [Act][1/Turn]: Put the top card of your deck to drop zone. If that card is Grade 1, put random Grade 2 or less opponent unit to opponent hand.',
              power: 500,
              code: '234'
            },
            {
              name: 'Tony Tony Chopper',
              image: C233,
              imageM: CM233,
              grade: 3,
              type: {
                race: 'Beast',
                job: 'Fighter',
                special: 'Zoan'
              },
              text: '[Auto]: At the end your turn. you take damage 500 points.',
              power: 4000,
              code: '233'
            },
            {
              name: 'Baskerville',
              image: C232,
              imageM: CM232,
              grade: 1,
              type: {
                race: 'Human',
                job: 'Swordman',
                special: ''
              },
              text: '[Act][1/Turn]: Pay 500 life points. This unit get Power + 1500 until end this turn.',
              power: 500,
              code: '232'
            },
            {
              name: 'Aokiji',
              image: C231,
              imageM: CM231,
              grade: 3,
              type: {
                race: 'Human',
                job: 'Spellcaster',
                special: 'Logia'
              },
              text: '[Cont]: When your opponent unit become Rest. Draw a card. [Act][1/Turn]: Choose up to one opponent unit, then Rest that unit.',
              power: 2500,
              code: '231'
            },
            {
              name: 'Nico Robin',
              image: C230,
              imageM: CM230,
              grade: 1,
              type: {
                race: 'Human',
                job: 'Fighter',
                special: 'Paramecia'
              },
              text: '[Cont]: This unit name become "Miss All Sunday". [Cont]: When you draw a card. This unit get Power + 500 (Stack Effect).',
              power: 500,
              code: '230'
            },
            {
              name: 'Nico Olvia',
              image: C229,
              imageM: CM229,
              grade: 1,
              type: {
                race: 'Human',
                job: 'Gunner',
                special: ''
              },
              text: '[Auto]: When this unit is placed on battlefield. Draw two cards, then put a random card from your hand into bottom deck.',
              power: 500,
              code: '229'
            },
            {
              name: 'Jaguar D. Saul',
              image: C228,
              imageM: CM228,
              grade: 3,
              type: {
                race: 'Giant',
                job: 'Fighter',
                special: ''
              },
              text: '[Cont]: All "Giant" unit your control get Power + 500.',
              power: 2500,
              code: '228'
            },
            {
              name: 'Monkey D. Luffy',
              image: C227,
              imageM: CM227,
              grade: 3,
              type: {
                race: 'Human',
                job: 'Fighter',
                special: 'Paramecia'
              },
              text: '[Auto]: When this unit attack. Pay 1000 life point and put random unit your control other this unit to bottom your deck. Call up to one "Monkey D. Luffy" from your deck. Shuffle your deck.',
              power: 2500,
              code: '227'
            },
            {
              name: 'Blueno',
              image: C226,
              imageM: CM226,
              grade: 1,
              type: {
                race: 'Human',
                job: 'Fighter',
                special: 'Paramecia'
              },
              text: '[Cont]: CP9. [Auto]: When this unit attack. Put a random Rest unit your control other this unit to bottom your deck, then put a random unit your opponent control to bottom opponent deck.',
              power: 500,
              code: '226'
            },
            {
              name: 'Watchdog',
              image: C225,
              imageM: CM225,
              grade: 2,
              type: {
                race: 'Human',
                job: 'Swordman',
                special: ''
              },
              text: '',
              power: 1000,
              code: '225'
            },
            {
              name: 'Kashi',
              image: C224,
              imageM: CM224,
              grade: 2,
              type: {
                race: 'Giant',
                job: 'Fighter',
                special: ''
              },
              text: '[Cont]: If you control "Sogeking" unit. This unit get Power + 1500. [Auto]: When this unit block. This unit get Power + 500 for each "Giant" unit your control until end this turn.',
              power: 1500,
              code: '224'
            },
            {
              name: 'Oimo',
              image: C223,
              imageM: CM223,
              grade: 2,
              type: {
                race: 'Giant',
                job: 'Fighter',
                special: ''
              },
              text: '[Cont]: If you control "Sogeking" unit. This unit get Power + 1500. [Auto]: When this unit attack. This unit get Power + 500 for each "Giant" unit your control until end this turn.',
              power: 1500,
              code: '223'
            },
            {
              name: 'Kumadori',
              image: C222,
              imageM: CM222,
              grade: 1,
              type: {
                race: 'Human',
                job: 'Fighter',
                special: ''
              },
              text: '[Cont]: CP9. [Auto]: When this unit is placed on battlefield. All your "CP9" unit get Power + 500 until end this turn.',
              power: 500,
              code: '222'
            },
            {
              name: 'Jabra',
              image: C221,
              imageM: CM221,
              grade: 2,
              type: {
                race: 'Human',
                job: 'Fighter',
                special: 'Zoan'
              },
              text: '[Cont]: CP9. [Act]: Put this unit into bottom your deck. Call up to one Grade 3 "Jabra" in its card name from your deck. Shuffle your deck.',
              power: 1500,
              code: '221'
            },
            {
              name: 'Fukuro',
              image: C220,
              imageM: CM220,
              grade: 1,
              type: {
                race: 'Human',
                job: 'Fighter',
                special: ''
              },
              text: '[Cont]: CP9. [Auto]: When this unit attack or block. This unit get Power + 500 for each CP9 your control until end this turn.',
              power: 500,
              code: '220'
            },
            {
              name: 'Yokozuna',
              image: C219,
              imageM: CM219,
              grade: 1,
              type: {
                race: 'Beast',
                job: '',
                special: ''
              },
              text: '',
              power: 1000,
              code: '219'
            },
            {
              name: 'Wanze',
              image: C218,
              imageM: CM218,
              grade: 1,
              type: {
                race: 'Human',
                job: 'Fighter',
                special: ''
              },
              text: '[Auto]: When this unit attack. This unit get Power + 1000, until end this turn.',
              power: 500,
              code: '218'
            },
            {
              name: 'Nero',
              image: C217,
              imageM: CM217,
              grade: 1,
              type: {
                race: 'Human',
                job: 'Fighter',
                special: ''
              },
              text: '[Auto]: When this unit block. This unit get Power + 2000, until end this turn.',
              power: 500,
              code: '217'
            },
            {
              name: 'T Bone',
              image: C216,
              imageM: CM216,
              grade: 1,
              type: {
                race: 'Human',
                job: 'Swordman',
                special: ''
              },
              text: '[Act][1/Turn]: Pay 500 life poitns. This unit get Power + 1500 until end this turn.',
              power: 500,
              code: '216'
            },
            {
              name: 'Usopp',
              image: C215,
              imageM: CM215,
              grade: 1,
              type: {
                race: 'Human',
                job: 'Gunner',
                special: ''
              },
              text: '[Cont]: This name become "Sogeking". [Act][1/Turn]: Discard a card from your hand. Destroy random unit your opponent control.',
              power: 500,
              code: '215'
            },
            {
              name: 'Rob Lucci',
              image: C214,
              imageM: CM214,
              grade: 2,
              type: {
                race: 'Human',
                job: 'Fighter',
                special: 'Zoan'
              },
              text: '[Cont]: CP9. [Act]: Put this unit into bottom your deck. Call up to one Grade 3 "Rob Lucci" in its card name from your deck. Shuffle your deck.',
              power: 1500,
              code: '214'
            },
            {
              name: 'Kaku',
              image: C213,
              imageM: CM213,
              grade: 2,
              type: {
                race: 'Human',
                job: 'Swordman',
                special: 'Zoan'
              },
              text: '[Cont]: CP9. [Act]: Put this unit into bottom your deck. Call up to one Grade 3 "Kaku" in its card name from your deck. Shuffle your deck.',
              power: 1500,
              code: '213'
            },
            {
              name: 'Kalifa',
              image: C212,
              imageM: CM212,
              grade: 1,
              type: {
                race: 'Human',
                job: 'Spellcaster',
                special: 'Paramecia'
              },
              text: '[Cont]: CP9. [Auto]: When this unit is placed on battlefield. Discard a card from your hand, then draw two cards.',
              power: 500,
              code: '212'
            },
            {
              name: 'Blueno',
              image: C211,
              imageM: CM211,
              grade: 1,
              type: {
                race: 'Human',
                job: 'Fighter',
                special: 'Paramecia'
              },
              text: '[Cont]: CP9. [Auto]: When this unit is placed on battlefield. Put a random Grade 1 unit your opponent control to your opponent bottom deck.',
              power: 500,
              code: '211'
            },
            {
              name: 'Spandam',
              image: C210,
              imageM: CM210,
              grade: 3,
              type: {
                race: 'Human',
                job: 'Swordman',
                special: ''
              },
              text: '[Cont]: CP9. [Act][1/Turn]: Pay 1000 life points. Call up to one "CP9" unit other "Spandam" from your deck. Shuffle your deck.',
              power: 0,
              code: '210'
            },
            {
              name: 'Usopp',
              image: C209,
              imageM: CM209,
              grade: 1,
              type: {
                race: 'Human',
                job: 'Gunner',
                special: ''
              },
              text: '[Auto]: When this unit blocks. Pay 1000 life points. Destroy the unit blocked by this unit.',
              power: 500,
              code: '209'
            },
            {
              name: 'Tom',
              image: C208,
              imageM: CM208,
              grade: 1,
              type: {
                race: 'Fishman',
                job: '',
                special: ''
              },
              text: '[Auto]: When this unit is send to drop zone. Search your deck. Put up to one "Franky" or "Iceburg" from your deck to your hand. Shuffle your deck.',
              power: 500,
              code: '208'
            },
            {
              name: 'Franky',
              image: C207,
              imageM: CM207,
              grade: 1,
              type: {
                race: 'Cyborg',
                job: 'Fighter',
                special: ''
              },
              text: '[Cont]: For each Grade 1 your control, this unit get Power + 500.',
              power: 500,
              code: '207'
            },
            {
              name: 'mozu',
              image: C206,
              imageM: CM206,
              grade: 1,
              type: {
                race: 'Human',
                job: '',
                special: ''
              },
              text: '[Auto]: When this unit is placed on battlefield. Put up to one "Franky" from your drop zone into your hand.',
              power: 0,
              code: '206'
            },
            {
              name: 'kiwi',
              image: C205,
              imageM: CM205,
              grade: 1,
              type: {
                race: 'Human',
                job: '',
                special: ''
              },
              text: '[Auto]: When this unit is placed on battlefield. Add up to one "Franky" from your deck into your hand, then shuffle your deck.',
              power: 0,
              code: '205'
            },
            {
              name: 'Kaikiri Destroyer 2',
              image: C204,
              imageM: CM204,
              grade: 1,
              type: {
                race: 'Human',
                job: 'Gunner',
                special: ''
              },
              text: '[Auto]: When this unit is placed on battlefield. If you control "Franky" unit. Choose up to one Grade 1 your opponent unit, and destroy that unit.',
              power: 500,
              code: '204'
            },
            {
              name: 'Kaikiri Destroyer 1',
              image: C203,
              imageM: CM203,
              grade: 1,
              type: {
                race: 'Human',
                job: 'Swordman',
                special: ''
              },
              text: '[Act][1/Turn]: If you control "Franky" unit. Pay 500 life points. All Grade 1 unit your control get Power + 1000 until end this turn.',
              power: 500,
              code: '203'
            },
            {
              name: 'Zambai',
              image: C202,
              imageM: CM202,
              grade: 1,
              type: {
                race: 'Human',
                job: 'Swordman',
                special: ''
              },
              text: '[Act][1/Turn]: If you control "Franky" unit. Pay 500 life points. All Grade 1 unit your control get Power + 1000 until end this turn.',
              power: 500,
              code: '202'
            },
            {
              name: 'Rob Lucci',
              image: C201,
              imageM: CM201,
              grade: 2,
              type: {
                race: 'Human',
                job: 'Swordman',
                special: ''
              },
              text: '[Cont]: Galleyla Company. [Auto]: When this unit attack. This unit get Power + 1000, until end this turn. You may pay 500 life points, then this unit get Power + 1000, until end this turn.',
              power: 1500,
              code: '201'
            },
            {
              name: 'Kaku',
              image: C200,
              imageM: CM200,
              grade: 2,
              type: {
                race: 'Human',
                job: 'Fighter',
                special: ''
              },
              text: '[Cont]: Galleyla Company. [Auto]: When this unit block. This unit get Power + 2000, until end this turn.',
              power: 1500,
              code: '200'
            },
            {
              name: 'Kalifa',
              image: C199,
              imageM: CM199,
              grade: 1,
              type: {
                race: 'Human',
                job: '',
                special: ''
              },
              text: '[Cont]: Galleyla Company. [Auto]: When this unit is placed on battlefield. Draw a card.',
              power: 500,
              code: '199'
            },
            {
              name: 'Peeply Lulu',
              image: C198,
              imageM: CM198,
              grade: 1,
              type: {
                race: 'Human',
                job: 'Swordman',
                special: ''
              },
              text: '[Cont]: Galleyla Company. [Act][1/Turn]: If you control "Iceburg" unit. Pay 500 life points. All "Galleyla Company" unit get Power + 1000 until end this turn.',
              power: 500,
              code: '198'
            },
            {
              name: 'Tilestone',
              image: C197,
              imageM: CM197,
              grade: 1,
              type: {
                race: 'Human',
                job: 'Fighter',
                special: ''
              },
              text: '[Cont]: Galleyla Company. [Cont]: If you control "Iceburg" unit. This unit get Power + 1500.',
              power: 500,
              code: '197'
            },
            {
              name: 'Paulie',
              image: C196,
              imageM: CM196,
              grade: 1,
              type: {
                race: 'Human',
                job: 'Fighter',
                special: ''
              },
              text: '[Cont]: Galleyla Company. [Act][1/Turn]: Rest up to one Grade 1 random unit your opponent control.',
              power: 500,
              code: '196'
            },
            {
              name: 'Iceburg',
              image: C195,
              imageM: CM195,
              grade: 3,
              type: {
                race: 'Human',
                job: '',
                special: ''
              },
              text: '[Act][1/Turn]: Pay 1000 life points. Call up to one "Galleyla Company" unit from your deck. Shuffle your deck.',
              power: 0,
              code: '195'
            },
            {
              name: 'Enel',
              image: C194,
              imageM: CM194,
              grade: 3,
              type: {
                race: 'God',
                job: 'Spellcaster',
                special: 'Logia'
              },
              text: '[Cont]: This unit get Power + 500 for each card in the bind zone for each player. [Act][1/Turn]: Choose up to one your unit and bind that unit. Your opponent bind two random unit with power less then equal your unit power bind by this effect.',
              power: 2500,
              code: '194'
            },
            {
              name: 'Nami',
              image: C193,
              imageM: CM193,
              grade: 1,
              type: {
                race: 'Human',
                job: 'Spellcaster',
                special: ''
              },
              text: '[Act][1/Turn]: Bind one unit your control . Draw two cards.',
              power: 500,
              code: '193'
            },
            {
              name: 'Monkey D. Luffy',
              image: C192,
              imageM: CM192,
              grade: 3,
              type: {
                race: 'Human',
                job: 'Fighter',
                special: 'Paramecia'
              },
              text: '[Auto]: When this unit is send to bind zone. Call this unit from bind zone, then this unit get Power + 2000 until end this turn. [Act][1/Turn]: Discard a card from your hand. This unit get Power + 2000 until end this turn.',
              power: 2500,
              code: '192'
            },
            {
              name: 'Nola',
              image: C191,
              imageM: CM191,
              grade: 2,
              type: {
                race: 'Beast',
                job: '',
                special: ''
              },
              text: '[Cont]: If you control "Kalgara" or "Montblanc Noland". This unit get Power + 2000.',
              power: 1500,
              code: '191'
            },
            {
              name: 'Kalgara',
              image: C190,
              imageM: CM190,
              grade: 2,
              type: {
                race: 'Shandia',
                job: 'Swordman',
                special: ''
              },
              text: '[Cont]: All "Shandia" unit your control get Power + 500.',
              power: 1500,
              code: '190'
            },
            {
              name: 'Ohm',
              image: C189,
              imageM: CM189,
              grade: 2,
              type: {
                race: 'Shandia',
                job: 'Swordman',
                special: ''
              },
              text: '[Act][1/Turn]: Pay 500 life poits. This unit get Power + 2000 until end this turn.',
              power: 1500,
              code: '189'
            },
            {
              name: 'Enel',
              image: C188,
              imageM: CM188,
              grade: 1,
              type: {
                race: 'God',
                job: 'Spellcaster',
                special: 'Logia'
              },
              text: '[Cont]: When your opponent card is send to bind zone. This unit get Power + 500 (Stack Effect). [Act][1/Turn] : Choose up to one your opponent unit, and bind that unit.',
              power: 2500,
              code: '188'
            },
            {
              name: 'Yama',
              image: C187,
              imageM: CM187,
              grade: 1,
              type: {
                race: 'Shandia',
                job: 'Fighter',
                special: ''
              },
              text: '[Auto]: When this unit block. This unit get Power + 2000, until end this turn.',
              power: 500,
              code: '187'
            },
            {
              name: 'Kamakiri',
              image: C186,
              imageM: CM186,
              grade: 1,
              type: {
                race: 'Shandia',
                job: 'Swordman',
                special: ''
              },
              text: '[Act][1/Turn]: If you control "Wyper" unit. Pay 500 life points. All "Shandia" unit get Power + 1000 until end this turn.',
              power: 500,
              code: '186'
            },
            {
              name: 'Genbo',
              image: C185,
              imageM: CM185,
              grade: 1,
              type: {
                race: 'Shandia',
                job: 'Gunner',
                special: ''
              },
              text: '[Auto]: When this unit is send into drop zone. Increase 2000 life points.',
              power: 500,
              code: '185'
            },
            {
              name: 'Laki',
              image: C184,
              imageM: CM184,
              grade: 1,
              type: {
                race: 'Shandia',
                job: 'Gunner',
                special: ''
              },
              text: '[Auto]: When this unit is send into drop zone. If you control "Wyper" unit. Put this unit to bottom your deck. Put up to two random "Shandia" from drop zone into your hand.',
              power: 500,
              code: '184'
            },
            {
              name: 'Braham',
              image: C183,
              imageM: CM183,
              grade: 1,
              type: {
                race: 'Shandia',
                job: 'Gunner',
                special: ''
              },
              text: '[Auto]: When this unit is placed on battlefield. If you control "Wyper" unit. All "Shandia" unit get Power + 1000 until end this turn.',
              power: 500,
              code: '183'
            },
            {
              name: 'Wyper',
              image: C182,
              imageM: CM182,
              grade: 2,
              type: {
                race: 'Shandia',
                job: 'Gunner',
                special: ''
              },
              text: '[Auto]: When this unit is placed on battlefield. Destroy random Grade 2 or less your opponent control.',
              power: 1500,
              code: '182'
            },
            {
              name: 'Shura',
              image: C181,
              imageM: CM181,
              grade: 2,
              type: {
                race: 'Shandia',
                job: 'Swordman',
                special: ''
              },
              text: '[Auto]: When this unit attack. Pay 500 life points. Destroy random Grade 2 or less your opponent control.',
              power: 1500,
              code: '181'
            },
            {
              name: 'Gedatsu',
              image: C180,
              imageM: CM180,
              grade: 1,
              type: {
                race: 'Shandia',
                job: 'Fighter',
                special: ''
              },
              text: '[Auto]: When this unit attack. This unit get Power + 1000 until end this turn.',
              power: 500,
              code: '180'
            },
            {
              name: 'Satori',
              image: C179,
              imageM: CM179,
              grade: 1,
              type: {
                race: 'Shandia',
                job: 'Spellcaster',
                special: ''
              },
              text: '[Auto]: When this unit is placed on battlefield. Deal damage 500 to your opponent.',
              power: 500,
              code: '179'
            },
            {
              name: 'Conis',
              image: C178,
              imageM: CM178,
              grade: 1,
              type: {
                race: 'Shandia',
                job: 'Gunner',
                special: ''
              },
              text: '[Auto]: When this unit is placed on battlefield. Search your deck. Add up to one "Shandia" unit other "Conis" into your hand. Shuffle your deck.',
              power: 500,
              code: '178'
            },
            {
              name: 'Pierre',
              image: C177,
              imageM: CM177,
              grade: 1,
              type: {
                race: 'Beast',
                job: '',
                special: 'Zoan'
              },
              text: '[Cont]: All "Gan Fall "Knight of the sky"" unit your control get Power + 1000.',
              power: 500,
              code: '177'
            },
            {
              name: 'Gan Fall "Knight of the sky"',
              image: C176,
              imageM: CM176,
              grade: 2,
              type: {
                race: 'God',
                job: 'Swordman',
                special: ''
              },
              text: '[Act][1/Turn]: Pay 500 life points. Search your deck. Call up to one "Pierre" in its card name or "Shandia" unit from your deck. Shuffle your deck.',
              power: 1500,
              code: '176'
            },
            {
              name: 'Montblanc Noland',
              image: C175,
              imageM: CM175,
              grade: 2,
              type: {
                race: 'Human',
                job: 'Swordman',
                special: ''
              },
              text: '[Cont]: When a card is put into your deck, this unit get Power + 500 (Stuck Effect). [Act][1/turn]: Pay 500 life points. Draw three cards, then put random three cards from your hand into bottom deck.',
              power: 1500,
              code: '175'
            },
            {
              name: 'Shoujou',
              image: C174,
              imageM: CM174,
              grade: 1,
              type: {
                race: 'Beast',
                job: 'Fighter',
                special: ''
              },
              text: '[Auto]: When you draw this card. Call up to one "Masira" from your deck. Shuffle your deck.',
              power: 500,
              code: '174'
            },
            {
              name: 'Masira',
              image: C173,
              imageM: CM173,
              grade: 1,
              type: {
                race: 'Beast',
                job: 'Fighter',
                special: ''
              },
              text: '[Auto]: When you draw this card. Call up to one "Shoujou" from your deck. Shuffle your deck.',
              power: 500,
              code: '173'
            },
            {
              name: 'Montblanc Cricket',
              image: C172,
              imageM: CM172,
              grade: 1,
              type: {
                race: 'Human',
                job: 'Fighter',
                special: ''
              },
              text: '[Auto]: When this unit is placed on battlefield. Draw three cards, then put random three cards from your hand into bottom deck.',
              power: 500,
              code: '172'
            },
            {
              name: 'Marshall D. Teach',
              image: C171,
              imageM: CM171,
              grade: 3,
              type: {
                race: 'Human',
                job: 'Fighter',
                special: 'Logia'
              },
              text: '[Cont]: If you take damage, you take double damage. [Auto]: When this unit attack or block. If this unit battle with "Paramecia" or "Logia" or "Zoan" unit, this unit get Power + equal Power that opponent unit until end this turn.',
              power: 2500,
              code: '171'
            },
            {
              name: 'Sarkies',
              image: C170,
              imageM: CM170,
              grade: 1,
              type: {
                race: 'Human',
                job: 'Swordman',
                special: ''
              },
              text: '[Auto]: When this unit attack. This unit get Power + 1000, until end this turn. You can pay 500 life points, then this unit get Power + 1000, until end this turn.',
              power: 500,
              code: '170'
            },
            {
              name: 'Bellamy',
              image: C169,
              imageM: CM169,
              grade: 2,
              type: {
                race: 'Human',
                job: 'Fighter',
                special: 'Paramecia'
              },
              text: '[Auto]: When this unit attack or block. This unit get Power + 1000, until end this turn.',
              power: 1500,
              code: '169'
            },
            {
              name: 'Hina',
              image: C168,
              imageM: CM168,
              grade: 2,
              type: {
                race: 'Human',
                job: 'Fighter',
                special: 'Paramecia'
              },
              text: '[Act][1/Turn]: Choose up to one Grade 2 or less your opponent control, then Rest that unit.',
              power: 1500,
              code: '168'
            },
            {
              name: 'Koshiro',
              image: C167,
              imageM: CM167,
              grade: 3,
              type: {
                race: 'Human',
                job: 'Swordman',
                special: ''
              },
              text: '[Cont]: All "Swordman" unit your control get Power + 500.',
              power: 2500,
              code: '167'
            },
            {
              name: 'Daz Bone "Mr 1"',
              image: C166,
              imageM: CM166,
              grade: 2,
              type: {
                race: 'Human',
                job: 'Fighter',
                special: 'Paramecia'
              },
              text: '[Auto]: When this unit attack. If you control "Zala "Miss Doublefinger"" unit. Destroy random unit your opponent control',
              power: 1500,
              code: '166'
            },
            {
              name: 'Zala "Miss Doublefinger"',
              image: C165,
              imageM: CM165,
              grade: 1,
              type: {
                race: 'Human',
                job: 'Fighter',
                special: 'Paramecia'
              },
              text: '[Cont]: When your opponent call Grade 1 unit. This unit get Power + 500. (Stuck Effect)',
              power: 500,
              code: '165'
            },
            {
              name: 'Miss Merry Christmas',
              image: C164,
              imageM: CM164,
              grade: 1,
              type: {
                race: 'Human',
                job: 'Fighter',
                special: 'Zoan'
              },
              text: '[Auto]: When this unit is placed on battlefield. All "Mr 4" unit your control get Power + 1000 until end this turn.',
              power: 500,
              code: '164'
            },
            {
              name: 'Mr 4',
              image: C163,
              imageM: CM163,
              grade: 1,
              type: {
                race: 'Human',
                job: 'Fighter',
                special: ''
              },
              text: '[Cont]: If you control "Miss Merry Christmas" in its card name. This unit get Power + 1500.',
              power: 500,
              code: '163'
            },
            {
              name: 'Karoo',
              image: C162,
              imageM: CM162,
              grade: 1,
              type: {
                race: 'Beast',
                job: '',
                special: ''
              },
              text: '[Act]: Bind this unit. Search your deck. Call up to two "Karoo" from your deck. Shuffle your deck.',
              power: 500,
              code: '162'
            },
            {
              name: 'Bananawani',
              image: C161,
              imageM: CM161,
              grade: 1,
              type: {
                race: 'Beast',
                job: '',
                special: ''
              },
              text: '[Cont]: This unit get Power + 500 for each "Bananawani" your control.',
              power: 500,
              code: '161'
            },
            {
              name: 'Nico Robin',
              image: C160,
              imageM: CM160,
              grade: 1,
              type: {
                race: 'Human',
                job: 'Fighter',
                special: 'Paramecia'
              },
              text: '[Cont]: When this unit is on battlefield. This unit name become "Miss All Sunday". [Auto]: when you draw a card, draw one more time.',
              power: 500,
              code: '160'
            },
            {
              name: 'Sir Crocodile "Mr 0"',
              image: C159,
              imageM: CM159,
              grade: 3,
              type: {
                race: 'Human',
                job: 'Spellcaster',
                special: 'Logia'
              },
              text: '[Cont]: All your opponent unit get Power - 500 for each "Mr" or "Miss" unit your control. [Act][1/Turn]: Pay 1000 life points, discard a card from your hand. Call up to one "Mr" or "Miss" in its card name other "Sir Crocodile "Mr 0"" from your deck. Shuffle your deck',
              power: 2500,
              code: '159'
            },
            {
              name: 'Pell',
              image: C158,
              imageM: CM158,
              grade: 2,
              type: {
                race: 'Human',
                job: 'Gunner',
                special: 'Zoan'
              },
              text: '[Auto]: At the end your phase. Put this unit into bottom your deck. Call up to one random Grade 1 "Pell" in its card name from your deck. Shuffle your deck. [Act][1/Turn]: If you control "Nefertari" unit. Put top of your deck into drop zone. Put up to one Grade 2 or less from your drop zone into your hand.',
              power: 1500,
              code: '158'
            },
            {
              name: 'Pell',
              image: C157,
              imageM: CM157,
              grade: 1,
              type: {
                race: 'Human',
                job: 'Swordman',
                special: 'Zoan'
              },
              text: '[Act]: Put this unit into bottom your deck. Call up to one Grade 2 "Pell" in its card name from your deck. Shuffle your deck.',
              power: 500,
              code: '157'
            },
            {
              name: 'Chaka',
              image: C156,
              imageM: CM156,
              grade: 2,
              type: {
                race: 'Human',
                job: 'Swordman',
                special: 'Zoan'
              },
              text: '[Auto]: At the end your phase. Put this unit into bottom your deck. Call up to one random Grade 1 "Chaka" in its card name from your deck. Shuffle your deck. [Auto]: When this unit attack. If you control "Nefertari" unit. Pay 500 life points. Destroy random Grade 2 or less your opponent control.',
              power: 1500,
              code: '156'
            },
            {
              name: 'Chaka',
              image: C155,
              imageM: CM155,
              grade: 1,
              type: {
                race: 'Human',
                job: 'Swordman',
                special: 'Zoan'
              },
              text: '[Act]: Put this unit into bottom your deck. Call up to one Grade 2 "Chaka" in its card name from your deck. Shuffle your deck.',
              power: 500,
              code: '155'
            },
            {
              name: 'Nefertari Cobra',
              image: C154,
              imageM: CM154,
              grade: 1,
              type: {
                race: 'Human',
                job: '',
                special: ''
              },
              text: '[Act][1/Turn]: Search your deck. Call up to one Grade 1 "Chaka" or "Pell" in its card name from your deck. Shuffle your deck.',
              power: 0,
              code: '154'
            },
            {
              name: 'Kohza',
              image: C153,
              imageM: CM153,
              grade: 1,
              type: {
                race: 'Human',
                job: 'Swordman',
                special: ''
              },
              text: '',
              power: 1000,
              code: '153'
            },
            {
              name: 'Sandora Lizard',
              image: C152,
              imageM: CM152,
              grade: 1,
              type: {
                race: 'Beast',
                job: '',
                special: ''
              },
              text: '[Act]: Bind this unit. Search your deck. Call up to two "Sandora Lizard" from your deck. Shuffle your deck.',
              power: 500,
              code: '152'
            },
            {
              name: 'Portgas D. Ace',
              image: C151,
              imageM: CM151,
              grade: 3,
              type: {
                race: 'Human',
                job: 'Fighter',
                special: 'Logia'
              },
              text: '[Auto]: When this unit is send into drop zone. Pay 1000 life points and call this unit from your drop zone. [Act][1/Turn] : Choose up to one your opponent unit, and destroy that unit.',
              power: 2500,
              code: '151'
            },
            {
              name: 'Bon Clay "Mr 2"',
              image: C150,
              imageM: CM150,
              grade: 2,
              type: {
                race: 'Human',
                job: 'Fighter',
                special: 'Paramecia'
              },
              text: '[Act][1/Turn]: Choose up to one your unit. This unit power become equal that unit power until end this turn.',
              power: 1500,
              code: '150'
            },
            {
              name: 'Dr Hiluluk',
              image: C149,
              imageM: CM149,
              grade: 2,
              type: {
                race: 'Human',
                job: '',
                special: ''
              },
              text: '[Auto]: When this unit is send into drop zone. Increase 2000 life points.',
              power: 500,
              code: '149'
            },
            {
              name: 'Tony Tony Chopper',
              image: C148,
              imageM: CM148,
              grade: 2,
              type: {
                race: 'Beast',
                job: 'Fighter',
                special: 'Zoan'
              },
              text: '[Auto]: At the end your phase. Put this unit into bottom your deck. Call up to one random Grade 1 "Tony Tony Chopper" in its card name from your deck. Shuffle your deck. [Auto]: When this unit attack. If your life point is higher than your opponent, this unit get Power + 2000 until end this turn.',
              power: 1500,
              code: '148'
            },
            {
              name: 'Tony Tony Chopper',
              image: C147,
              imageM: CM147,
              grade: 1,
              type: {
                race: 'Beast',
                job: 'Fighter',
                special: 'Zoan'
              },
              text: '[Act]: Put this unit into bottom your deck. Call up to one Grade 2 "Tony Tony Chopper" in its card name from your deck. Shuffle your deck.',
              power: 500,
              code: '147'
            },
            {
              name: 'Robson',
              image: C146,
              imageM: CM146,
              grade: 1,
              type: {
                race: 'Beast',
                job: '',
                special: ''
              },
              text: '[Auto]: When this unit is placed on battlefield. Search your deck. Put up to one "Wapol" in its card name into your hand. Shuffle your deck.',
              power: 500,
              code: '146'
            },
            {
              name: 'Lapahn',
              image: C145,
              imageM: CM145,
              grade: 1,
              type: {
                race: 'Beast',
                job: '',
                special: ''
              },
              text: '',
              power: 1000,
              code: '145'
            },
            {
              name: 'Dr Kureha',
              image: C144,
              imageM: CM144,
              grade: 1,
              type: {
                race: 'Human',
                job: '',
                special: ''
              },
              text: '[Auto]: When this unit is placed on battlefield. Increase 2000 life points.',
              power: 500,
              code: '144'
            },
            {
              name: 'Dalton',
              image: C143,
              imageM: CM143,
              grade: 2,
              type: {
                race: 'Human',
                job: 'Swordman',
                special: 'Zoan'
              },
              text: '[Auto]: At the end your phase. Put this unit into bottom your deck. Call up to one random Grade 1 "Dalton" in its card name from your deck. Shuffle your deck. [Auto]: When this unit attack. Pay 500 life points. this unit get power + 2000 until end this turn.',
              power: 1500,
              code: '143'
            },
            {
              name: 'Dalton',
              image: C142,
              imageM: CM142,
              grade: 1,
              type: {
                race: 'Human',
                job: 'Swordman',
                special: 'Zoan'
              },
              text: '[Act]: Put this unit into bottom your deck. Call up to one Grade 2 "Dalton" in its card name from your deck. Shuffle your deck.',
              power: 500,
              code: '142'
            },
            {
              name: 'Chessmarimo',
              image: C141,
              imageM: CM141,
              grade: 2,
              type: {
                race: 'Human',
                job: 'Fighter',
                special: ''
              },
              text: '[Cont]: If you control "Wapol" unit. This unit get Power + 500 for each "Chess" or "Kuromarimo" in your drop zone.',
              power: 1500,
              code: '141'
            },
            {
              name: 'Kuromarimo',
              image: C140,
              imageM: CM140,
              grade: 1,
              type: {
                race: 'Human',
                job: 'Fighter',
                special: ''
              },
              text: '[Act]: If you control "Wapol" and "Chess" unit. Put this unit to drop zone. Choose "Chess" your control and put that unit to drop zone. Seacrh your deck. Call up to one "Chessmarimo" from your deck. Shuffle your deck.',
              power: 500,
              code: '140'
            },
            {
              name: 'Chess',
              image: C139,
              imageM: CM139,
              grade: 1,
              type: {
                race: 'Human',
                job: 'Archer',
                special: ''
              },
              text: '[Act]: If you control "Wapol" and "Kuromarimo" unit. Put this unit to drop zone. Choose "Kuromarimo" your control and put that unit to drop zone. Seacrh your deck. Call up to one "Chessmarimo" from your deck. Shuffle your deck.',
              power: 500,
              code: '139'
            },
            {
              name: 'Wapol',
              image: C138,
              imageM: CM138,
              grade: 1,
              type: {
                race: 'Human',
                job: 'Fighter',
                special: 'Paramecia'
              },
              text: '[Act][1/Turn]: Search your deck. Call up to one "Chess" or "Kuromarimo" from your deck. Shuffle your deck.',
              power: 500,
              code: '138'
            },
            {
              name: 'Miss Goldenweek',
              image: C137,
              imageM: CM137,
              grade: 1,
              type: {
                race: 'Human',
                job: 'Spellcaster',
                special: ''
              },
              text: '[Cont]: When your opponent unit is call on the battlefield. Put top of your deck into drop zone. If that card send into drop zone is Grade 1, Rest that opponent call unit.',
              power: 500,
              code: '137'
            },
            {
              name: 'Galdino "Mr 3"',
              image: C136,
              imageM: CM136,
              grade: 2,
              type: {
                race: 'Human',
                job: 'Swordman',
                special: 'Paramecia'
              },
              text: '[Auto]: When this unit block. Pay 500 life points. Rest a random unit your opponent control.',
              power: 1500,
              code: '136'
            },
            {
              name: 'Dorry',
              image: C135,
              imageM: CM135,
              grade: 3,
              type: {
                race: 'Giant',
                job: 'Swordman',
                special: ''
              },
              text: '[Auto]: When this unit block. This unit get Power + 2000, until end this turn. If your life points is grether than 500, pay 500 life points and this unit get Power + 1000, until end this turn.',
              power: 2500,
              code: '135'
            },
            {
              name: 'Brogy',
              image: C134,
              imageM: CM134,
              grade: 3,
              type: {
                race: 'Giant',
                job: 'Fighter',
                special: ''
              },
              text: '[Act][1/Turn]: Discard a random card from your hand and put top of your deck into drop zone. This unit get Power + 3000 until end this turn.',
              power: 2500,
              code: '134'
            },
            {
              name: 'Nico Robin',
              image: C133,
              imageM: CM133,
              grade: 1,
              type: {
                race: 'Human',
                job: 'Fighter',
                special: 'Paramecia'
              },
              text: '[Auto]: When this unit is send into drop zone. Draw two cards, then discard a random card from your hand.',
              power: 500,
              code: '133'
            },
            {
              name: 'Mr 13 and Miss Friday',
              image: C132,
              imageM: CM132,
              grade: 1,
              type: {
                race: 'Beast',
                job: '',
                special: ''
              },
              text: '[Auto]: When this unit is placed on battlefield. Bind this card and Draw a card.',
              power: 500,
              code: '132'
            },
            {
              name: 'Nami',
              image: C131,
              imageM: CM131,
              grade: 1,
              type: {
                race: 'Human',
                job: 'Spellcaster',
                special: ''
              },
              text: '[Auto]: When this unit is send into drop zone. Draw a card.',
              power: 500,
              code: '131'
            },
            {
              name: 'Mr 5',
              image: C130,
              imageM: CM130,
              grade: 1,
              type: {
                race: 'Human',
                job: 'Gunner',
                special: 'Paramecia'
              },
              text: '[Auto]: When this unit is placed on battlefield. Destroy up to one random Grade 1 your opponent control.',
              power: 500,
              code: '130'
            },
            {
              name: 'Miss Valentine',
              image: C129,
              imageM: CM129,
              grade: 1,
              type: {
                race: 'Human',
                job: 'Fighter',
                special: 'Paramecia'
              },
              text: '[Auto]: When this unit is placed on battlefield. Rest up to one random Grade 1 your opponent control.',
              power: 500,
              code: '129'
            },
            {
              name: 'Igaram "Mr 8"',
              image: C128,
              imageM: CM128,
              grade: 1,
              type: {
                race: 'Human',
                job: 'Gunner',
                special: ''
              },
              text: '[Auto]: When this unit is send into drop zone. Destroy up to one random Grade 1 your opponent control.',
              power: 500,
              code: '128'
            },
            {
              name: 'Karoo',
              image: C127,
              imageM: CM127,
              grade: 1,
              type: {
                race: 'Beast',
                job: '',
                special: ''
              },
              text: '[Auto]: When this unit is send into drop zone. Search your deck. Put up to one "Nefertari Vivi" in its card name into your hand. Shuffle your deck.',
              power: 500,
              code: '127'
            },
            {
              name: 'Miss Monday',
              image: C126,
              imageM: CM126,
              grade: 1,
              type: {
                race: 'Human',
                job: 'Fighter',
                special: ''
              },
              text: '[Auto]: When this unit is send into drop zone. All Grade 1 unit your control get Power + 500 until end this turn.',
              power: 500,
              code: '126'
            },
            {
              name: 'Nefertari Vivi',
              image: C125,
              imageM: CM125,
              grade: 1,
              type: {
                race: 'Human',
                job: 'Fighter',
                special: ''
              },
              text: '[Auto]: When this unit is placed on battlefield. Search your deck. Put up to one grade 1 into drop zone, then shuffle your deck and draw two cards.',
              power: 500,
              code: '125'
            },
            {
              name: 'Mr 9',
              image: C124,
              imageM: CM124,
              grade: 1,
              type: {
                race: 'Human',
                job: 'Fighter',
                special: ''
              },
              text: '[Auto]: When this unit is placed on battlefield. Put this unit to drop zone. Call up to one "Nefertari Vivi" from your deck. Shuffle your deck.',
              power: 500,
              code: '124'
            },
            {
              name: 'Laboon',
              image: C123,
              imageM: CM123,
              grade: 1,
              type: {
                race: 'Beast',
                job: '',
                special: ''
              },
              text: '[Auto]: When this unit is send into drop zone. Seacrh your deck. put up to one "Laboon" or "Brook" in its card name into drop zone. Shuffle your deck.',
              power: 500,
              code: '123'
            },
            {
              name: 'Crocus',
              image: C122,
              imageM: CM122,
              grade: 1,
              type: {
                race: 'Human',
                job: 'Fighter',
                special: ''
              },
              text: '[Auto]: When this unit is placed on battlefield. Increase 1000 life points for each "Laboon" in your drop zone.',
              power: 500,
              code: '122'
            },
            {
              name: 'Tashigi',
              image: C121,
              imageM: CM121,
              grade: 1,
              type: {
                race: 'Human',
                job: 'Swordman',
                special: ''
              },
              text: '[Act][1/Turn]: Pay 500 life points. Seacrh your deck. Put up to one "Swordman" from your deck into your hand. Shuffle your deck.',
              power: 500,
              code: '121'
            },
            {
              name: 'Smoker',
              image: C120,
              imageM: CM120,
              grade: 2,
              type: {
                race: 'Human',
                job: 'Swordman',
                special: 'Logia'
              },
              text: '[Act][1/Turn]: Pay 500 life points. Choose up to one "Paramecia" your opponent control, then Rest that unit. [Auto]: When this unit is placed on battlefield. Pay 500 life points. Choose up to one "Paramecia" your opponent control, then Rest that unit.',
              power: 1500,
              code: '120'
            },
            {
              name: 'Alvida',
              image: C119,
              imageM: CM119,
              grade: 1,
              type: {
                race: 'Human',
                job: 'Fighter',
                special: 'Paramecia'
              },
              text: '[Act][1/Turn]: Discard a card from your hand. Call up to one "Buggy" in its card name from your deck. Shuffle your deck.',
              power: 500,
              code: '119'
            },
            {
              name: 'Hatchan',
              image: C118,
              imageM: CM118,
              grade: 1,
              type: {
                race: 'Fishman',
                job: 'Swordman',
                special: ''
              },
              text: '[Act][1/Turn]: Pay 500 life points. Choose unit your control and destroy that unit. Call up to one "Fishman" Grade 1 from your drop zone.',
              power: 500,
              code: '118'
            },
            {
              name: 'Kuroobi',
              image: C117,
              imageM: CM117,
              grade: 1,
              type: {
                race: 'Fishman',
                job: 'Fighter',
                special: ''
              },
              text: '[Act][1/Turn]: Choose unit your control and destroy that unit. Search your deck. Put up to one "Fishman" Grade 1 from your deck into your hand. Shuffle your deck.',
              power: 500,
              code: '117'
            },
            {
              name: 'Chew',
              image: C116,
              imageM: CM116,
              grade: 1,
              type: {
                race: 'Fishman',
                job: 'Gunner',
                special: ''
              },
              text: '[Auto]: When this unit is placed on battlefield. Call up to one "Fishman" Grade 1 unit from your drop zone.',
              power: 500,
              code: '116'
            },
            {
              name: 'Arlong',
              image: C115,
              imageM: CM115,
              grade: 1,
              type: {
                race: 'Fishman',
                job: 'Fighter',
                special: ''
              },
              text: '[Auto]: When this unit is send into drop zone. Destroy random "Human" unit your opponent control.',
              power: 500,
              code: '115'
            },
            {
              name: 'Dracule Mihawk',
              image: C114,
              imageM: CM114,
              grade: 3,
              type: {
                race: 'Human',
                job: 'Swordman',
                special: ''
              },
              text: '[Auto]: When you take damage. Call this unit from your hand. Pay 500 life points, then destroy all your opponent unit with power less than equal damage you take.',
              power: 2500,
              code: '114'
            },
            {
              name: 'Gin',
              image: C113,
              imageM: CM113,
              grade: 1,
              type: {
                race: 'Human',
                job: 'Fighter',
                special: ''
              },
              text: '[Auto]: When this unit is send into drop zone. Call up to one "Don Krieg" from your deck. Shuffle your deck.',
              power: 500,
              code: '113'
            },
            {
              name: 'Pearl',
              image: C112,
              imageM: CM112,
              grade: 1,
              type: {
                race: 'Human',
                job: 'Fighter',
                special: ''
              },
              text: '[Auto]: When this unit is send into drop zone. Stand All "Don Krieg" unit your control.',
              power: 500,
              code: '112'
            },
            {
              name: 'Don Krieg',
              image: C111,
              imageM: CM111,
              grade: 1,
              type: {
                race: 'Human',
                job: 'Fighter',
                special: ''
              },
              text: '[Auto]: When this unit attack. Destroy other unit your control. This unit get Power + 2000 until end this turn.',
              power: 500,
              code: '111'
            },
            {
              name: 'Jango',
              image: C110,
              imageM: CM110,
              grade: 1,
              type: {
                race: 'Human',
                job: 'Spellcaster',
                special: ''
              },
              text: '[Act][1/Turn]: Put a random card from drop zone into bottom of your deck. Draw a card',
              // text: '[Auto]: When this unit is placed on battlefield. Put all unit your control other "Klahadore "Captain Kuro"" into bottom your deck. Draw a card for each unit put into bottom deck by this effect.',
              power: 500,
              code: '110'
            },
            {
              name: 'Buchi',
              image: C109,
              imageM: CM109,
              grade: 1,
              type: {
                race: 'Human',
                job: 'Fighter',
                special: ''
              },
              text: '[Auto]: When this card is discarded. Stand all "Klahadore "Captain Kuro"" unit your control.',
              // text: '[Auto]: When this unit is placed on battlefield. Stand all "Klahadore "Captain Kuro"" unit your control.',
              power: 500,
              code: '109'
            },
            {
              name: 'Sham',
              image: C108,
              imageM: CM108,
              grade: 1,
              type: {
                race: 'Human',
                job: 'Fighter',
                special: ''
              },
              text: '[Auto]: When this card is discarded. All "Klahadore "Captain Kuro"" unit your control get Power + 1000 until end this turn.',
              // text: '[Auto]: When this unit is placed on battlefield. All "Klahadore "Captain Kuro"" unit your control get Power + 1000 until end this turn.',
              power: 500,
              code: '108'
            },
            {
              name: 'Klahadore "Captain Kuro"',
              image: C107,
              imageM: CM107,
              grade: 1,
              type: {
                race: 'Human',
                job: 'Swordman',
                special: ''
              },
              text: '[Auto]: When this unit attack. Pay 500 life points and discard a random card from your hand. Call up to one `Klahadore "Captain Kuro"` from your deck. Shuffle your deck.',
              // text: '[Auto]: When this unit attack. Pay 500 life points. Call random card from your hand.',
              power: 500,
              code: '107'
            },
            {
              name: 'Mohji',
              image: C106,
              imageM: CM106,
              grade: 1,
              type: {
                race: 'Human',
                job: 'Fighter',
                special: ''
              },
              text: '[Auto]: When this unit attack. This unit get Power + 1000, until end of turn.',
              // text: '[Auto]: When this unit is placed on battlefield. All your grade 1 unit get Power + 500 until end this turn.',
              power: 500,
              code: '106'
            },
            {
              name: 'Cabaji',
              image: C105,
              imageM: CM105,
              grade: 1,
              type: {
                race: 'Human',
                job: 'Swordman',
                special: ''
              },
              text: '[Act][1/Turn]: Pay 500 life points. All your grade 1 unit get Power + 1000 until end this turn.',
              power: 500,
              code: '105'
            },
            {
              name: 'Buggy',
              image: C104,
              imageM: CM104,
              grade: 1,
              type: {
                race: 'Human',
                job: 'Fighter',
                special: 'Paramecia'
              },
              text: '[Auto]: When this unit is placed on battlefield. Discard a random card from your hand. Call up to one "Cabaji" and "Mohji" from your deck. Shuffle your deck.',
              // text: '[Auto]: When this unit is placed on battlefield. Call up to one "Cabaji" and "Mohji" from your deck. Shuffle your deck.',
              power: 500,
              code: '104'
            },
            {
              name: 'Morgan',
              image: C103,
              imageM: CM103,
              grade: 2,
              type: {
                race: 'Human',
                job: 'Fighter',
                special: ''
              },
              text: '',
              power: 2000,
              code: '103'
            },
            {
              name: 'Higuma',
              image: C102,
              imageM: CM102,
              grade: 1,
              type: {
                race: 'Human',
                job: 'Swordman',
                special: ''
              },
              text: '',
              power: 1000,
              code: '102'
            },
            {
              name: 'Alvida',
              image: C101,
              imageM: CM101,
              grade: 1,
              type: {
                race: 'Human',
                job: 'Fighter',
                special: ''
              },
              text: '',
              power: 1000,
              code: '101'
            },
            {
              name: 'Kozuki Hiyori Komurasaki',
              image: C100,
              imageM: CM100,
              grade: 3,
              type: {
                race: 'Human',
                job: '',
                special: ''
              },
              text: '[Act][1/Turn]: Pay 1000 life points. Call up to one "Swordman" from your deck. Shuffle your deck',
              power: 0,
              code: '100'
            },
            {
              name: 'Shirahoshi',
              image: C099,
              imageM: CM099,
              grade: 3,
              type: {
                race: 'Fishman',
                job: '',
                special: ''
              },
              text: '[Act][1/Turn]: Pay 1000 life points. Call up to one "Fishman" other "Shirahoshi" from your deck. Shuffle your deck',
              power: 0,
              code: '099'
            },
            {
              name: 'Charlotte Linlin "Big Mom"',
              image: C098,
              imageM: CM098,
              grade: 3,
              type: {
                race: 'Human',
                job: 'Spellcaster',
                special: 'Paramecia'
              },
              text: '[Act][1/Turn]: Pay 1000 life points, send one unit your control to drop zone. Call up to one "Charlotte" in its card name other "Charlotte Linlin "Big Mom"" from your deck. Shuffle your deck',
              power: 2500,
              code: '098'
            },
            {
              name: 'Charlotte Katakuri',
              image: C097,
              imageM: CM097,
              grade: 3,
              type: {
                race: 'Human',
                job: 'Swordman',
                special: 'Paramecia'
              },
              text: '[Act][1/Turn]: Pay 500 life points. Choose up to three "Charlotte" in its card name in your drop zone and put to bottom your deck. This unit get Power + 1000 for each card put to deck by this effect until end this turn.',
              power: 2500,
              code: '097'
            },
            {
              name: 'Charlotte Smoothie',
              image: C096,
              imageM: CM096,
              grade: 2,
              type: {
                race: 'Human',
                job: 'Swordman',
                special: 'Paramecia'
              },
              text: '[Act][1/Turn]: Pay 500 life points. Choose up to one your opponent unit, then put that unit to bottom your opponent deck. This unit get Power + equal that unit put to bottom deck by this effect until end this turn.',
              power: 1500,
              code: '096'
            },
            {
              name: 'Charlotte Cracker',
              image: C095,
              imageM: CM095,
              grade: 2,
              type: {
                race: 'Human',
                job: 'Swordman',
                special: 'Paramecia'
              },
              text: '[Auto]: When this unit blocks. Pay 500 life points. Destroy the unit blocked by this unit.',
              power: 1500,
              code: '095'
            },
            {
              name: 'Charlotte Oven',
              image: C094,
              imageM: CM094,
              grade: 1,
              type: {
                race: 'Human',
                job: 'Fighter',
                special: 'Paramecia'
              },
              text: '[Auto]: When this unit is placed on battlefield. Put top of your deck into drop zone and destroy random opponent unit.',
              power: 500,
              code: '094'
            },
            {
              name: 'Charlotte Daifuku',
              image: C093,
              imageM: CM093,
              grade: 1,
              type: {
                race: 'Human',
                job: 'Fighter',
                special: 'Paramecia'
              },
              text: '[Auto]: When this unit is placed on battlefield. Call up to one "Charlotte Daifuku" from your drop zone.',
              power: 500,
              code: '093'
            },
            {
              name: 'Charlotte Pudding',
              image: C092,
              imageM: CM092,
              grade: 1,
              type: {
                race: 'Human',
                job: 'Spellcaster',
                special: 'Paramecia'
              },
              text: '[Auto]: When this unit is send into drop zone. Draw two cards.',
              power: 500,
              code: '092'
            },
            {
              name: 'Charlotte Brulee',
              image: C091,
              imageM: CM091,
              grade: 1,
              type: {
                race: 'Human',
                job: 'Spellcaster',
                special: 'Paramecia'
              },
              text: '[Act]: Bind this unit. Bind random Grade 2 or less your opponent unit.',
              power: 500,
              code: '091'
            },
            {
              name: 'Charlotte Flampe',
              image: C090,
              imageM: CM090,
              grade: 1,
              type: {
                race: 'Human',
                job: 'Gunner',
                special: ''
              },
              text: '[Act][1/Turn]: Rest this unit. Choose up to one "Charlotte Katakuri" in its card name and that unit get Power + 1000 until end this turn.',
              power: 500,
              code: '090'
            },
            {
              name: 'Charlotte Amande',
              image: C089,
              imageM: CM089,
              grade: 1,
              type: {
                race: 'Human',
                job: 'Swordman',
                special: ''
              },
              text: '[Act][1/Turn]: Pay 500 life points. Destroy random Grade 2 your opponent unit.',
              power: 500,
              code: '089'
            },
            {
              name: 'Carrot',
              image: C088,
              imageM: CM088,
              grade: 3,
              type: {
                race: 'Beast',
                job: 'Fighter',
                special: 'Sulong'
              },
              text: '[Auto]: At the end of your turn. Put this unit into bottom of your deck. Call up to one Grade 2 "Carrot" from your deck. Shuffle your deck. [Act][1/Turn]: Discard a random card from your hand. All "Sulong" unit your control get Power + 1000 until end of turn.',
              // text: '[Auto]: At the end your phase. Put this unit into bottom your deck. Call up to one random Grade 2 "Carrot" in its card name from your deck. Shuffle your deck. [Cont]: All "Sulong" unit your control get Power + 1000.',
              power: 2500,
              code: '088'
            },
            {
              name: 'Carrot',
              image: C087,
              imageM: CM087,
              grade: 2,
              type: {
                race: 'Beast',
                job: 'Fighter',
                special: ''
              },
              text: '[Auto]: When this unit block. Draw a card. [Act]: Put this unit into bottom of your deck. Call up to one Grade 3 "Carrot" from your deck. Shuffle your deck.',
              // text: '[Act]: Put this unit into bottom your deck. Call up to one Grade 3 "Carrot" in its card name from your deck. Shuffle your deck.',
              power: 1500,
              code: '087'
            },
            {
              name: 'Baby 5',
              image: C086,
              imageM: CM086,
              grade: 1,
              type: {
                race: 'Human',
                job: 'Gunner',
                special: 'Paramecia'
              },
              text: '[Cont]: if you control "Don Sai" unit. This unit get Power + 1000 and this unit Grade become 2.',
              power: 500,
              code: '086'
            },
            {
              name: 'Denjiro',
              image: C085,
              imageM: CM085,
              grade: 1,
              type: {
                race: 'Human',
                job: 'Swordman',
                special: ''
              },
              text: '[Cont]: if you control "Kozuki" unit. This unit get Power + 1000.',
              power: 500,
              code: '085'
            },
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
              text: '[Act][1/Turn]: Pay 1 mana. Call random "Commander SHP" from your deck. Shuffle your deck.',
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
              text: '[Cont]: Commander SHP. [Act][1/Turn]: Discard a random card from your hand. Put up to one "Monkey D. Luffy" from deck into your hand. Shuffle your deck.',
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
              text: '[Cont]: Commander SHP. [Auto]: When this unit attack. Pay 500 life points and 1 mana. Stand this unit. (Still attack and can attact again)',
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
              text: '[Cont]: This unit cannot be destroy. [Auto]: At the end of turn. Discard a random card from your hand or put this unit to bind zone.',
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
              text: '[Auto]: When this unit is send into drop zone from your field. Call up to one "Edward Newgate `Shirohige`" or "Portgas D. Ace" from your deck, then shuffle your deck.',
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
              text: '[Cont]: If you control "Edward Newgate `Shirohige`". This unit get Power + 1000. [Auto]: When this card is discarded. Pay 500 life points. Stand up to one "Edward Newgate `Shirohige`" your control.',
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
              text: '[Cont]: If you control "Edward Newgate `Shirohige`". This unit get Power + 1000. [Auto]: When this card is discarded. Destroy up to one Grade 2 or less random unit your opponent control.',
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
              text: '[Cont]: If you control "Edward Newgate `Shirohige`". This unit get Power + 1000. [Auto]: When this unit block. This unit get Power + 2000, until of this turn. ',
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
              text: '[Cont]: If you control "Edward Newgate `Shirohige`". This unit get Power + 1000. [Act][1/Turn]: Pay 500 life points. Add up to one "Edward Newgate `Shirohige`" into your hand from your deck.',
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
              text: '[Cont]: If you control "Edward Newgate `Shirohige`". This unit get Power + 1000. [Act][1/Turn]: Pay 500 life points. Put up to one "Edward Newgate `Shirohige`" from drop zone into your hand.',
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
              text: '[Cont]: If you control "Edward Newgate `Shirohige`". This unit get Power + 1000. [Act][1/Turn]: Pay 500 life points. This unit get Power + 1500 until end of turn.',
              power: 500,
              code: '071'
            },
            {
              name: 'Edward Newgate "Shirohige"',
              image: C070,
              imageM: CM070,
              grade: 3,
              type: {
                race: 'Human',
                job: 'Swordman',
                special: 'Paramecia'
              },
              text: '[Auto]: When this unit attack. This unit get Power + 1000 until end of turn. [Auto]: When this unit attack. Pay 500 life points, pay 1 mana, and discard a random card from your hand. This unit get Power + 4500 until end of turn.',
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
              text: '[Auto]: When your unit is destroy. Call this unit from your hand. [Auto]: When this unit is placed on battlefield. Pay 1 mana. Destroy random unit your opponent control. [Auto]: When this unit block. Destroy up to one random unit your opponent control.',
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
              text: '[Cont]: For each "Fighter" unit your control, this unit get Power + 500.',
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
              text: '[Auto]: When you take damage. Call this unit from your hand. Destroy all opposing units with power equal to or less than the damage you take.',
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
              text: '[Auto]: When this unit is placed on battlefield. Increase 2000 life points. [Auto] At the end of turn. If this card is in your drop zone. Pay 1 mana and discard a random card from your hand. Call this unit to open circle.',
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
              text: '[Auto]: At the beginning of your battle phase. All "Zoan" unit your control get Power + 500 until end of turn.',
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
              text: '[Act][1/Turn]: Pay 500 life points and 1 mana. Destroy random unit your opponent control and this unit get Power equal that unit destroy by this effect until end of turn.',
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
              text: '[Auto]: When this unit attack. your opponent call a random unit from opponent hand to open circle. this unit get Power equal that unit call by this effect until end of turn. Otherwise, this unit get Power + 3000 until end of turn.',
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
              text: '[Auto]: When this unit attack. This unit get Power + 1000, until end of turn. [Auto]: When this unit block. This unit get Power + 2000, until end of turn.',
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
              text: '[Auto]: At the beginning of opponent battle phase. Pay 1 mana. Rest random unit your opponent control.',
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
              text: '[Auto]: At the end of your turn. Put this unit into bottom of your deck. Call up to one Grade 2 "Jack" from your deck. Shuffle your deck. [Auto]: When this unit attack. Pay 1 mana. Put up to one Grade 2 or less random unit your opponent control into your opponent hand.',
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
              text: '[Auto]: When this unit is send into drop zone. Pay 1000 life points and pay 1 mana. Call up to one random unit from your deck to open circle.',
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
              text: '[Auto]: When this unit is send into drop zone. Pay 1000 life points and pay 1 mana. Call up to one random unit from drop zone to open circle.',
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
              text: '[Act][1/Turn]: Rest this unit. Rest up to one Grade 1 random your opponent unit.',
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
              text: '[Auto]: At the end of your turn. Put this unit into bottom of your deck. Call up to one Grade 2 "Nekomamushi" from your deck. Shuffle your deck. [Auto]: When this unit attack. Pay 1 mana. Destroy Grade 2 or less random unit your opponent control.',
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
              text: '[Auto]: When this unit block. Pay 500 life points. This unit get Power + 500 for each "Beast" your control, until of turn. [Act]: Put this unit into bottom of your deck. Call up to one Grade 3 "Nekomamushi" from your deck. Shuffle your deck.',
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
              text: '[Auto]: At the end of your turn. Put this unit into bottom of your deck. Call up to one Grade 2 "Inuarashi" from your deck. Shuffle your deck. [Auto]: When this unit attack. Pay 500 life points. This unit get Power + 500 for each "Beast" your control, until of turn.',
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
              text: '[Auto]: When this unit block. Pay 500 life points. This unit get Power + 500 for each "Beast" your control, until of turn. [Act]: Put this unit into bottom of your deck. Call up to one Grade 3 "Inuarashi" from your deck. Shuffle your deck.',
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
              text: '[Cont]: Commander SHP. [Cont]: For each "Commander SHP" and "Monkey D. Luffy" your control, this unit get Power + 500.',
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
              text: '[Auto]: When this unit block. This unit get Power + 2000, until end of turn. [Auto]: When this unit block. Pay 500 life points and this unit get Power + 1500, until end of turn.',
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
                job: 'Fighter',
                special: 'Paramecia'
              },
              text: '[Act][1/Turn]: Pay 3 mana. Put up to one your opponent unit into bottom of deck.',
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
              text: '[Act][1/Turn]: Pay 500 life points. Change the position of one column of your opponent units',
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
              text: '[Auto]: When this unit is placed on battlefield. Pay 1 mana. Destroy random unit your opponent control. [Auto]: When this unit is send to drop zone from your field. Call up to one "Kizaru" from your deck. Shuffle your deck.',
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
              text: '[Auto]: When this unit is placed on battlefield. Pay 1 mana. Rest up to one your opponent unit. [Act][1/Turn]: Pay 2 mana. Rest up to one your opponent unit.',
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
              text: '[Auto]: When this unit is placed on battlefield. Pay 1 mana. Destroy random unit your opponent control. [Act][1/Turn]: Pay 3 mana. Destroy up to one your opponent unit.',
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
              text: '[Auto]: When this unit block. Pay 500 life points. Put Grade 2 or less random unit your opponent control into opponent hand. [Act]: Put this unit into bottom of your deck. Call up to one Grade 3 "Jack" from your deck. Shuffle your deck.',
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
              text: '[Auto]: At the end of your turn. Put this unit into bottom of your deck. Call up to one Grade 2 "Tony Tony Chopper" from your deck. Shuffle your deck.',
              power: 4500,
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
              text: '[Auto]: When this unit block. This unit get Power + 2000, until of turn. [Act]: Put this unit into bottom of your deck. Call up to one Grade 3 "Tony Tony Chopper" from your deck. Shuffle your deck.',
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
              text: '[Auto]: When your opponent discard a card. this unit get Power + 1000 until end of turn. [Act][1/Turn]: Discard up to one random card from your opponent hand.',
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
              text: '[Auto]: When this unit attack. This unit get Power + 1000, until end of turn',
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
              text: '[Auto]: At the beginning of your battle phase. All "Fishman" unit your control get Power + 500 until end of turn.',
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
              text: '[Auto]: At the end of turn. Send this unit to drop zone. [Auto]: When this unit is placed on battlefield. Pay 500 life points. This unit get Power + 500 for each cards in your drop zone until end of turn.',
              power: 2500,
              code: '034'
            },
            {
              name: 'Gekko Moriah',
              image: C033,
              imageM: CM033,
              grade: 3,
              type: {
                race: 'Undead',
                job: 'Spellcaster',
                special: 'Paramecia'
              },
              text: '[Act][1/Turn]: Pay 1000 life points and pay 1 mana. Call up to one "Undead" random unit from drop zone to open circle.',
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
              text: '[Auto]: When this unit is send into drop zone from your field. Call up to one "Buggy" from your deck. Shuffle your deck.',
              power: 500,
              code: '032'
            },
            {
              name: 'Sir Crocodile "Mr 0"',
              image: C031,
              imageM: CM031,
              grade: 3,
              type: {
                race: 'Human',
                job: 'Spellcaster',
                special: 'Logia'
              },
              text: '[Auto]: When this unit is placed on battlefield. Pay 1 mana. All your opponent unit get Power - 500 until end of turn. [Act][1/Turn]: Pay 2 mana. All your opponent unit get Power - 500 until end of turn',
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
              text: '[Auto]: When this unit is placed on battlefield. Add up to one Grade 2 or less random "Swordman" card from deck into your hand. Shuffle your deck.',
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
              text: '[Auto]: When this unit is placed on battlefield. Add up to one Grade 2 or less random "Beast" card from deck into your hand. Shuffle your deck.',
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
              text: '[Auto]: When this unit is placed on battlefield. Pay 1 mana, choose up to one your opponent unit and rest that unit. [Act][1/Turn]: Pay 500 life points. Choose up to one grade 2 or less your opponent unit and rest that unit.',
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
              text: '[Auto]: When this card is discarded. Put up to two "Vinsmoke" other "Vinsmoke Sora" from drop zone into your hand. [Act][1/Turn]: Discard a random "Vinsmoke" card from your hand. Put up to two "Vinsmoke" other "Vinsmoke Sora" from drop zone into your hand.',
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
              text: '[Auto]: When this card is discarded. Call up to one Grade 2 or less "Vinsmoke" from your deck to open circle. Shuffle your deck. [Act][1/Turn]: Discard a random "Vinsmoke" card from your hand. Call up to one Grade 2 or less "Vinsmoke" from your deck to open circle. Shuffle your deck.',
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
              text: '[Auto]: When this card is discarded. Draw two cards. [Act][1/Turn]: Discard a random "Vinsmoke" card from your hand. Draw two cards.',
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
              text: '[Auto]: When this card is discarded. Destroy up to one Grade 2 or less random unit your opponent control. [Act][1/Turn]: Discard a random "Vinsmoke" card from your hand. Choose up to one Grade 2 or less your opponent unit, and destroy that unit.',
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
              text: '[Auto]: When this card is discarded. Bind up to one Grade 2 or less random unit your opponent control. [Act][1/Turn]: Discard a random "Vinsmoke" card from your hand. Choose up to one Grade 2 or less your opponent unit, and bind that unit.',
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
              text: '[Auto]: When you discard a card. This unit get Power + 1000 until end of turn. [Act][1/Turn]: Discard a random "Vinsmoke" card from your hand. This unit get Power + 2000, until end of turn.',
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
              text: '[Auto]: When this card is discarded. All "Vinsmoke" unit your control get Power + 1000, until end of turn. [Act][1/Turn]: Discard a random "Vinsmoke" card from your hand. This unit get Power + 2000, until end of turn.',
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
              text: '[Auto]: When this unit block. This unit get Power + 2000, until end of turn. [Auto]: When this unit block. Pay 500 life points and this unit get Power + 1500, until end of turn.',
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
              text: '[Auto]: When this unit attack. This unit get Power + 1000, until end of turn. [Act][1/Turn]: Discard a random card from your hand. This unit get Power + 1500, until end of turn.',
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
              text: '[Auto]: When this unit is placed on battlefield. Call up to one Grade 1 other "Usopp" in its card name from your deck to an open circle, then shuffle your deck.',
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
              text: '[Auto]: When you gain life points. Increase 2000 life points .',
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
              text: '[Cont]: This unit get Power + 500 for each rest of your mana.',
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
              text: '[Cont]: This unit get Power + 500 for each your opponent open circle. [Auto]: When this unit attack. Destroy random unit your control.',
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
              text: '[Auto]: When this unit is send into drop zone from your field. Bind this card, then call up to one "Brook" in its card name from your drop zone.',
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
              text: '[Auto]: When this unit is send into drop zone from your field. Call up to one "Brook" in its card name from your deck, then shuffle your deck.',
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
              text: '[Auto]: When this unit is placed on battlefield. Increase your max mana by 1.',
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
              text: '[Auto]: When this unit is placed on battlefield. Add up to one random Grade 1 card from your deck into your hand, then shuffle your deck.',
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
              text: '[Auto]: When this unit block. This unit get Power + 2000, until of this turn. [Act][1/Turn]: Discard a random card from your hand. This unit get Power + 1500, until end of turn.',
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
              text: '[Auto]: When this unit attack. This unit get Power + 1000, until end of turn. [ACT][1/Turn]: Pay 500 life points. This unit get Power + 1500, until end of turn',
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
              text: '[Auto]: When this unit attack. This unit get Power + 1000, until end of turn. [Auto]: When this unit block. This unit get Power + 2000, until end of turn.',
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
    deleteDeck (data) {
      this.data.edit.title = ''
      this.data.edit.deck = []
    },
    sortData (byKey, search) {
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
      if (byKey === 'text') {
        console.log('masuk sort by text')
        sortedData = []
        this.data.edit.allCard.map((card) => {
          if (card.text.search(search) >= 0) {
            sortedData.push(card)
          }
        })
        this.data.edit.cards = sortedData
      }
      return sortedData
    }
  },
  created () {
    this.data.edit.allCard = this.data.edit.cards
  }
}
</script>
