"use strict";(self.webpackChunktods_score_grid=self.webpackChunktods_score_grid||[]).push([[359],{"./src/components/ScoreGrid/ScoreGrid.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Grid:()=>Grid,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ScoreGrid_stories});var generateEventData=__webpack_require__("./src/components/Data/generateEventData.js"),compositions=__webpack_require__("./src/components/Data/compositions.js"),esm=__webpack_require__("./node_modules/storybook-dark-mode/dist/esm/index.js"),argTypes=__webpack_require__("./src/components/Data/argTypes.js"),Draw=__webpack_require__("./src/components/Draw/Draw.jsx"),jsx_runtime=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/react/jsx-runtime.js"));const ScoreGrid=({compositionName,eventData,eventHandlers})=>{const structures=eventData?.drawsData?.[0]?.structures||[],initialStructureId=structures[0]?.structureId,composition=compositions.E?.[compositionName]||compositions.E.Australian,className=composition.theme;return(0,jsx_runtime.jsx)(Draw.Z,{structureId:initialStructureId,composition,structures,className,eventHandlers})};ScoreGrid.displayName="ScoreGrid",ScoreGrid.__docgenInfo={description:"",methods:[],displayName:"ScoreGrid"};var dist=__webpack_require__("./node_modules/@stitches/react/dist/index.mjs"),themes=__webpack_require__("./src/components/themes/index.js");const ScoreGrid_stories={title:"Score Grid/Grid",component:ScoreGrid,parameters:{actions:{argTypesRegex:"^on.*"}},argTypes:(0,argTypes.P)("all")},Container=(0,dist.zo)("div",{backgroundColor:"$colors$backgroundColor",color:"$colors$color",height:"100%"}),Grid=args=>{const composition=compositions.E[args.composition],className=(0,esm.vs)()?themes.UA:composition?.theme,{eventData}=(0,generateEventData.c)({...args})||{};return(0,jsx_runtime.jsx)(Container,{className,style:{direction:args.direction},children:(0,jsx_runtime.jsx)("div",{style:{padding:"1rem"},children:(0,jsx_runtime.jsx)(ScoreGrid,{...args,compositionName:args.composition,eventData,eventHandlers:{}})})})};Grid.displayName="Grid",Grid.args={direction:"Left to Right",matchUpFormat:"standard",composition:"National",participantsCount:30,eventType:"Singles",completionGoal:100,drawType:"Feed In",drawSize:32},Grid.parameters={...Grid.parameters,docs:{...Grid.parameters?.docs,source:{originalSource:"args => {\n  const composition = compositions[args.composition];\n  const className = useDarkMode() ? nightTheme : composition?.theme;\n  const {\n    eventData\n  } = generateEventData({\n    ...args\n  }) || {};\n  const eventHandlers = {};\n  return <Container className={className} style={{\n    direction: args.direction\n  }}>\n      <div style={{\n      padding: '1rem'\n    }}>\n        <ScoreGrid {...args} compositionName={args.composition} eventData={eventData} eventHandlers={eventHandlers} />\n      </div>\n    </Container>;\n}",...Grid.parameters?.docs?.source}}};const __namedExportsOrder=["Grid"];Grid.__docgenInfo={description:"",methods:[],displayName:"Grid"}},"./src/components/Data/generateEventData.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>generateEventData});var tods_competition_factory__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tods-competition-factory/dist/index.mjs");function generateEventData({matchUpFormat="SET5-S:6/TB7",participantsCount=4,completionGoal,addQualifying,drawSize=4,eventType,drawType}={}){const drawProfile={completionGoal:completionGoal<100?Math.floor(.01*drawSize*completionGoal):void 0,participantsCount,matchUpFormat,seedsCount:8,eventType,drawType,drawSize,drawId:"drawId"};return addQualifying&&(drawProfile.qualifyingProfiles=[{structureProfiles:[{drawSize:16,qualifyingPositions:4}]}]),"AD_HOC"===drawType&&Object.assign(drawProfile,{drawMatic:!0,roundsCount:3}),function genData({drawProfile}){const drawId="drawId",venueId="venueId",startTime="08:00",endTime="20:00",startDate=tods_competition_factory__WEBPACK_IMPORTED_MODULE_0__.utilities.dateTime.extractDate((new Date).toISOString()),drawProfiles=[drawProfile],venueProfiles=[{venueId,venueName:"Venue",venueAbbreviation:"VNU",courtNames:["One","Two","Three"],courtIds:["c1","c2","c3"],courtsCount:8,startTime,endTime}],schedulingProfile=[{scheduleDate:startDate,venues:[{venueId,rounds:[{drawId,roundNumber:1},{drawId,roundNumber:2}]}]}],result=tods_competition_factory__WEBPACK_IMPORTED_MODULE_0__.QO.generateTournamentRecord({policyDefinitions:tods_competition_factory__WEBPACK_IMPORTED_MODULE_0__.RO.policies.POLICY_SCHEDULING_NO_DAILY_LIMITS,scheduleCompletedMatchUps:!0,completeAllMatchUps:!0,autoSchedule:!0,schedulingProfile,venueProfiles,drawProfiles,startDate});if(console.log({result,drawProfiles}),result.error)return{eventData};const{eventIds:[eventId],tournamentRecord}=result;tods_competition_factory__WEBPACK_IMPORTED_MODULE_0__.M6.setState(tournamentRecord);const{eventData}=tods_competition_factory__WEBPACK_IMPORTED_MODULE_0__.M6.getEventData({participantsProfile:{withIOC:!0,withISO2:!0},eventId})||{};return{eventData}}({drawProfile})}},"./src/components/Draw/Draw.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>Draw,Z:()=>Draw_Draw});var index_module=__webpack_require__("./node_modules/@radix-ui/react-dropdown-menu/dist/index.module.js"),dist=__webpack_require__("./node_modules/@stitches/react/dist/index.mjs"),colors=__webpack_require__("./node_modules/@radix-ui/colors/index.mjs");const slideUpAndFade=(0,dist.F4)({"0%":{opacity:0,transform:"translateY(2px)"},"100%":{opacity:1,transform:"translateY(0)"}}),slideRightAndFade=(0,dist.F4)({"0%":{opacity:0,transform:"translateX(-2px)"},"100%":{opacity:1,transform:"translateX(0)"}}),slideDownAndFade=(0,dist.F4)({"0%":{opacity:0,transform:"translateY(-2px)"},"100%":{opacity:1,transform:"translateY(0)"}}),slideLeftAndFade=(0,dist.F4)({"0%":{opacity:0,transform:"translateX(2px)"},"100%":{opacity:1,transform:"translateX(0)"}}),StyledContent=(0,dist.zo)(index_module.VY,{backgroundColor:"white",borderRadius:6,padding:5,boxShadow:"0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)","@media (prefers-reduced-motion: no-preference)":{animationDuration:"400ms",animationTimingFunction:"cubic-bezier(0.16, 1, 0.3, 1)",willChange:"transform, opacity",'&[data-state="open"]':{'&[data-side="top"]':{animationName:slideDownAndFade},'&[data-side="right"]':{animationName:slideLeftAndFade},'&[data-side="bottom"]':{animationName:slideUpAndFade},'&[data-side="left"]':{animationName:slideRightAndFade}}}}),itemStyles={all:"unset",fontSize:13,lineHeight:1,color:colors.ht.violet11,borderRadius:3,display:"flex",alignItems:"center",height:25,padding:"0 5px",position:"relative",userSelect:"none","&[data-disabled]":{color:colors.Fe.mauve8,pointerEvents:"none"},"&:focus":{backgroundColor:colors.ht.violet9,color:colors.ht.violet1}},StyledItem=(0,dist.zo)(index_module.ck,{...itemStyles}),DropdownMenu=((0,dist.zo)(index_module.oC,{...itemStyles}),(0,dist.zo)(index_module.Rk,{...itemStyles}),(0,dist.zo)(index_module.TriggerItem,{'&[data-state="open"]':{backgroundColor:colors.ht.violet4,color:colors.ht.violet11},...itemStyles}),(0,dist.zo)(index_module.__,{paddingInlineStart:25,fontSize:12,lineHeight:"25px",color:colors.Fe.mauve11}),(0,dist.zo)(index_module.Z0,{height:1,backgroundColor:colors.ht.violet6,margin:5}),(0,dist.zo)(index_module.wU,{position:"absolute",left:0,width:25,display:"inline-flex",alignItems:"center",justifyContent:"center"}),(0,dist.zo)(index_module.Eh,{fill:"white"}),index_module.fC),DropdownMenuTrigger=index_module.xz,DropdownMenuContent=StyledContent,DropdownMenuItem=StyledItem;index_module.Ee;var react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Box=(0,dist.zo)("div",{}),RightSlot=(0,dist.zo)("div",{marginInlineStart:"auto",paddingInlineStart:20,color:colors.Fe.mauve11,":focus > &":{color:"white"},"[data-disabled] &":{color:colors.Fe.mauve8}}),StructureButton=(0,dist.zo)("button",{all:"unset",fontFamily:"inherit",borderRadius:5,minWidth:50,height:35,paddingInlineStart:10,paddingInlineEnd:10,display:"inline-flex",alignItems:"center",justifyContent:"center",color:colors.ht.violet11,backgroundColor:"white",boxShadow:`0 2px 10px ${colors.U2.blackA7}`,"&:hover":{backgroundColor:colors.ht.violet3},"&:focus":{boxShadow:"0 0 0 2px black"}}),StructureSelector=({structures=[],structureId,onSelect})=>{const StructureItem=({structureName,structureId,keyCombo})=>(0,jsx_runtime.jsxs)(DropdownMenuItem,{onSelect:e=>((e,structureId)=>{"function"==typeof onSelect&&onSelect(structureId)})(0,structureId),children:[structureName,keyCombo?(0,jsx_runtime.jsx)(RightSlot,{children:keyCombo}):null]}),label=structures?.find((structure=>structure.structureId===structureId))?.structureName||"Select...";return(0,jsx_runtime.jsx)(Box,{children:(0,jsx_runtime.jsxs)(DropdownMenu,{children:[(0,jsx_runtime.jsx)(DropdownMenuTrigger,{asChild:!0,children:(0,jsx_runtime.jsxs)(StructureButton,{"aria-label":"Customise options",children:[label," "]})}),(0,jsx_runtime.jsx)(DropdownMenuContent,{sideOffset:-10,children:structures?.map((structure=>(0,jsx_runtime.jsx)(StructureItem,{structureName:structure.structureName,structureId:structure.structureId},structure.structureId)))})]})})};StructureSelector.displayName="StructureSelector",StructureSelector.__docgenInfo={description:"",methods:[],displayName:"StructureSelector",props:{structures:{defaultValue:{value:"[]",computed:!1},required:!1}}};const Draw_StructureSelector=StructureSelector;var Structure=__webpack_require__("./src/components/Structure/Structure.jsx");const Draw=({composition,eventHandlers,structures,structureId})=>{const[selectedStructureId,setSelectedStructureId]=react.useState(structureId),[selectedMatchUpId,setSelectedMatchUpId]=react.useState();(0,react.useEffect)((()=>setSelectedStructureId(structureId)),[structureId]),eventHandlers&&(eventHandlers.matchUpClick=({event,matchUpId})=>{event?.clientX,event?.clientY,event?.currentTarget?.getBoundingClientRect();setSelectedMatchUpId(selectedMatchUpId===matchUpId?void 0:matchUpId)});const structure=structures?.find((structure=>structure.structureId===selectedStructureId)),roundMatchUps=structure?.roundMatchUps,matchUps=roundMatchUps?Object.values(roundMatchUps)?.flat():[],Notice=(0,dist.zo)("div",{display:"flex",width:"auto",height:60,alignContent:"center",justifyContent:"center",justifyItems:"center"});return(0,jsx_runtime.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[structures?.length&&1!==structures.length?(0,jsx_runtime.jsx)(Draw_StructureSelector,{structures,structureId:selectedStructureId,onSelect:structureId=>setSelectedStructureId(structureId)}):null,(0,jsx_runtime.jsx)("div",{style:{height:"30px"},children:" "}),structures?.length?(0,jsx_runtime.jsx)(Structure.v,{selectedMatchUpId,composition,matchUps,eventHandlers}):(0,jsx_runtime.jsx)(Notice,{children:"Nothing to show with current configuration"})]})};Draw.displayName="Draw",Draw.__docgenInfo={description:"",methods:[],displayName:"Draw"};const Draw_Draw=Draw},"./src/components/Structure/Round.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>Round});var _MatchUp_MatchUp__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/MatchUp/MatchUp.jsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/react/jsx-runtime.js"));const Round=({composition,eventHandlers,isLucky,matchUps,selectedMatchUpId,roundNumber})=>{const roundMatchUps=matchUps.filter((matchUp=>matchUp.roundNumber===roundNumber)).sort(((a,b)=>(a.roundPosition||0)-(b.roundPosition||0)));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-around",marginInlineStart:"16px",marginInlineEnd:"16px",width:"460px"},children:[roundMatchUps.map(((matchUp,i)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_MatchUp_MatchUp__WEBPACK_IMPORTED_MODULE_0__.w,{selectedMatchUpId,composition,moeity:i%2==0,matchUp,isLucky,eventHandlers},`m-${i}`)))," "]})};Round.displayName="Round",Round.__docgenInfo={description:"",methods:[],displayName:"Round"}},"./src/components/Structure/Structure.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{v:()=>Structure});var tods_competition_factory__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tods-competition-factory/dist/index.mjs"),_Round__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Structure/Round.jsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/react/jsx-runtime.js"));const Structure=({composition,eventHandlers,matchUps,selectedMatchUpId})=>{const{roundNumbers,hasOddMatchUpsCount}=tods_competition_factory__WEBPACK_IMPORTED_MODULE_0__.y1.getRoundMatchUps({matchUps}),isLucky=hasOddMatchUpsCount;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{style:{marginInlineStart:"1rem",display:"flex",overflowX:"auto"},children:roundNumbers.map(((roundNumber,i)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Round__WEBPACK_IMPORTED_MODULE_1__.e,{selectedMatchUpId,composition,roundNumber,matchUps,isLucky,eventHandlers},`round-${i}`)))})};Structure.displayName="Structure",Structure.__docgenInfo={description:"",methods:[],displayName:"Structure"}}}]);