define("5ed085d",function(e,n){"use strict";function o(e,n,o,i,t,d){return{configure:d.configure.bind(d),doValidation:d.doValidation.bind(d),parseStylesheet:e.parseStylesheet.bind(e),doComplete:n.doComplete.bind(n),setCompletionParticipants:n.setCompletionParticipants.bind(n),doHover:o.doHover.bind(o),findDefinition:i.findDefinition.bind(i),findReferences:i.findReferences.bind(i),findDocumentHighlights:i.findDocumentHighlights.bind(i),findDocumentLinks:i.findDocumentLinks.bind(i),findDocumentSymbols:i.findDocumentSymbols.bind(i),doCodeActions:t.doCodeActions.bind(t),doCodeActions2:t.doCodeActions2.bind(t),findColorSymbols:function(e,n){return i.findDocumentColors(e,n).map(function(e){return e.range})},findDocumentColors:i.findDocumentColors.bind(i),getColorPresentations:i.getColorPresentations.bind(i),doRename:i.doRename.bind(i),getFoldingRanges:w.getFoldingRanges,getSelectionRanges:p.getSelectionRanges}}function i(e){e&&e.customDataProviders&&v.cssDataManager.addDataProviders(e.customDataProviders)}function t(e){return i(e),o(new S.Parser,new s.CSSCompletion,new c.CSSHover,new f.CSSNavigation,new C.CSSCodeActions,new u.CSSValidation)}function d(e){return i(e),o(new g.SCSSParser,new l.SCSSCompletion,new c.CSSHover,new f.CSSNavigation,new C.CSSCodeActions,new u.CSSValidation)}function a(e){return i(e),o(new b.LESSParser,new m.LESSCompletion,new c.CSSHover,new f.CSSNavigation,new C.CSSCodeActions,new u.CSSValidation)}Object.defineProperty(n,"__esModule",{value:!0});var r=e("849c8c1"),S=e("f65c4e4"),s=e("81478b3"),c=e("dda58db"),f=e("ab5a974"),C=e("c8c7fe4"),u=e("b3e3fff"),g=e("0ef8562"),l=e("012257c"),b=e("fd6aacf"),m=e("beeda39"),w=e("8292f2f"),v=e("4b90411"),p=e("252f842");r.__exportStar(e("1ea32d2"),n),r.__exportStar(e("6b31927"),n),n.getCSSLanguageService=t,n.getSCSSLanguageService=d,n.getLESSLanguageService=a});