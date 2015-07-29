




/*
     FILE ARCHIVED ON 2:27:13 May 22, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:37:34 Jul 29, 2015.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/

/* Copyright (c) 2014, ReachForce, Inc. All rights reserved. */
if (typeof sfjq$ === "undefined") {
    if (window.console) window.console.log("(!) SmartForms jQuery alias \"sfjq$\" is not defined.");
} else if (!(/^[1]\.([7-9]|[1-9][0-9]+)(\.[0-9]+)?$/.test(sfjq$().jquery)) && !(/^[2]\.([0-9]|[1-9][0-9]+)(\.[0-9]+)?$/.test(sfjq$().jquery))) {
    if (window.console) window.console.log("(!) SmartForms requires jQuery 1.7 or higher. SmartForms is using jQuery " + sfjq$().jquery + ".");
}

var ReachForce = {};
ReachForce.SmartForms = {};
var sf$ = ReachForce.SmartForms;

sf$.rfAppVersion="3.0.7.11";
sf$.serviceURL="/web/20150522022713/https://smartforms-gtw.reachforce.com/SmartForms3-0/";

sf$.doSetup=true;
sf$.canRun=true;
sf$.showSmartFormAlerts=true;
sf$.showCriticalAlerts=true;
sf$.showJSONPAlerts=false;
sf$.overrideSubmit=true;
sf$.oquery=true;
sf$.assignIDsByName=false;
sf$.selectListDivID="RFDisplayFrame";
sf$.doFindByIPFlag=false;
sf$.doAppendByIPOnLoadFlag=false;
sf$.doCompanySelectFlag=true;
sf$.autoDeploySelectListEventsFlag=true;
sf$.deployDropDownFlag=false;
sf$.revIPFilterFlag=true;
sf$.resultLength=5;
sf$.allowEmailOnlyFilter=false;
sf$.emailOnlyFilterFlag=false;
sf$.phoneFilterFlag=true;
sf$.phoneAutoFillFlag=false; // drop-down mode
sf$.phoneFormatUsed="###-###-####";
sf$.selectListTitlePhrase="<caption><h3>Please select to verify your company</h3><hr style='color:#CCCCCC;background-color:#CCCCCC;height:1px;border:none;'></caption>";
sf$.notaPhrase="None of the Above";
sf$.selectListFooterPhrase="";
sf$.selectListDivFade="fast";
sf$.selectListDivTopOffset=7;
sf$.remediateCompanyFlag=true;
sf$.remediateCompanyLevelUsed="review";
sf$.useStateText=false;
sf$.useCountryText=false;
sf$.formCheckIDs=[];
sf$.deployDynaInput=false;
sf$.dynaInputIDs=[];
sf$.isDynaInputVisible=true;
sf$.junkNames=["abc", "acme", "adf", "admin", "asd", "asdf", "co name", "college", "company", "company name", "confidential",
               "consultant", "consulting", "contact", "contractor", "customer", "default", "demo", "false", "freelance", "freelancer",
               "home", "home office", "independant", "independant consultant", "independent", "independent consultant", "individual",
               "internet marketing company", "it", "it conlsultant", "me", "my", "myself", "na", "name", "no", "no company", "no name yet",
               "nocompany", "non", "none", "not provided", "null", "other", "personal", "privat", "private", "qwe", "qwer", "qwert",
               "qwerty", "qwertyu", "retired", "self", "self employed", "student", "system", "tbd" , "test", "test inc", "testing",
               "true", "undisclosed", "unemployed", "university", "unk", "unknown", "valued", "xxx", "xyz"];

sf$.frmChanged=true;
sf$.sessionID;
sf$.compID="";
sf$.revIPCompID;
sf$.revIPCty;
sf$.revIPSt;
sf$.revIPCntry;
sf$.revIPAreaCd;
sf$.revIPLat;
sf$.revIPLong;
sf$.callIndex=0; // to keep from displaying an old data set
sf$.lastSearch="";
sf$.lastEmail="";
sf$.lastRFID="";
sf$.fieldFocus=false;
sf$.mouseOver=false;
sf$.fillByIP=false;
sf$.dropFilled=false;
sf$.savingOnExit=false; // not used
sf$.formSaved=false;
sf$.junkNameDetected=false;
sf$.junkEmailDetected=true;
sf$.rqurl="";
sf$.latestSearchResultsNames=null;
sf$.latestSearchResultsData=null;
sf$.latestSearchResultsIDs=null;
sf$.allowDropDownHide=true;
sf$.dataSubmitInProcess=false;
sf$.dataReady=false;
sf$.hrefLoc;
sf$.httpProtocol=(("https:" == document.location.protocol) ? "https://" : "http://");
sf$.ieVer;
sf$.ieMode;
sf$.ipLoc;
sf$.techFilled=false;
sf$.frmElt;

// these should be user defined:
sf$.token;
sf$.dropDownDisplayDivID;
sf$.doFindByIP;
sf$.doAppendByIPOnLoad;
sf$.doCompanySelect;
sf$.autoDeploySelectListEvents;
sf$.deployDropDown;
sf$.useInferredFilter;
sf$.searchResultCount;
sf$.selectListHoverColor;
sf$.selectListColor1;
sf$.selectListColor2;
sf$.selectListNAColor1;
sf$.selectListNAColor2;
sf$.usePhoneFilter;
sf$.autoFillPhone;
sf$.phoneFormat;
sf$.selectListTitle;
sf$.noneOfTheAbove;
sf$.selectListFooter;
sf$.remediateCompany;
sf$.remediateCompanyLevel;

sf$.smartFormID;
sf$.firstNameFieldAlias;
sf$.lastNameFieldAlias;
sf$.emailFieldAlias;

sf$.companyNameFieldAlias;
sf$.addr1FieldAlias;
sf$.addr2FieldAlias;
sf$.cityFieldAlias;
sf$.stateFieldAlias;
sf$.zipFieldAlias;
sf$.countryFieldAlias;
sf$.phoneFieldAlias;

sf$.confidenceLevelFieldAlias;
sf$.confidenceDescFieldAlias;
sf$.matchScoreFieldAlias;
sf$.thresholdScoreFieldAlias;
sf$.rpmEngFieldAlias;

sf$.mCompXIDFieldAlias;
sf$.mCompanyNameFieldAlias;
sf$.mAddr1FieldAlias;
sf$.mAddr2FieldAlias;
sf$.mCityFieldAlias;
sf$.mStateFieldAlias;
sf$.mZipFieldAlias;
sf$.mCountryFieldAlias;
sf$.mPhoneFieldAlias;
sf$.mTradeNameFieldAlias;
sf$.mStateCodeFieldAlias;
sf$.mCountryCodeFieldAlias;
sf$.mEmplyeeCountFieldAlias;
sf$.mEmplyeeHereFieldAlias;
sf$.mAnnualRevFieldAlias;
sf$.mSicFieldAlias;
sf$.mSicNameFieldAlias;
sf$.mAltSicFieldAlias;
sf$.mNaicsFieldAlias;
sf$.mNaicsNameFieldAlias;
sf$.mAltNaicsFieldAlias;
sf$.mUrlFieldAlias;
sf$.mLocationTypeFieldAlias;
sf$.mSubsidiaryFieldAlias;
sf$.mFamilyMemsFieldAlias;
sf$.mGlobal2KFieldAlias;
sf$.mFortune500FieldAlias;

sf$.hqCompXIDFieldAlias;
sf$.hqCompanyNameFieldAlias;
sf$.hqAddr1FieldAlias;
sf$.hqAddr2FieldAlias;
sf$.hqCityFieldAlias;
sf$.hqStateFieldAlias;
sf$.hqZipFieldAlias;
sf$.hqCountryFieldAlias;
sf$.hqPhoneFieldAlias;
sf$.hqTradeNameFieldAlias;
sf$.hqStateCodeFieldAlias;
sf$.hqCountryCodeFieldAlias;
sf$.hqEmplyeeCountFieldAlias;
sf$.hqEmplyeeHereFieldAlias;
sf$.hqAnnualRevFieldAlias;
sf$.hqSicFieldAlias;
sf$.hqSicNameFieldAlias;
sf$.hqAltSicFieldAlias;
sf$.hqNaicsFieldAlias;
sf$.hqNaicsNameFieldAlias;
sf$.hqAltNaicsFieldAlias;
sf$.hqUrlFieldAlias;
sf$.hqLocationTypeFieldAlias;
sf$.hqSubsidiaryFieldAlias;
sf$.hqFamilyMemsFieldAlias;
sf$.hqGlobal2KFieldAlias;
sf$.hqFortune500FieldAlias;

sf$.dhqCompXIDFieldAlias;
sf$.dhqCompanyNameFieldAlias;
sf$.dhqAddr1FieldAlias;
sf$.dhqAddr2FieldAlias;
sf$.dhqCityFieldAlias;
sf$.dhqStateFieldAlias;
sf$.dhqZipFieldAlias;
sf$.dhqCountryFieldAlias;
sf$.dhqPhoneFieldAlias;
sf$.dhqTradeNameFieldAlias;
sf$.dhqStateCodeFieldAlias;
sf$.dhqCountryCodeFieldAlias;
sf$.dhqEmplyeeCountFieldAlias;
sf$.dhqEmplyeeHereFieldAlias;
sf$.dhqAnnualRevFieldAlias;
sf$.dhqSicFieldAlias;
sf$.dhqSicNameFieldAlias;
sf$.dhqAltSicFieldAlias;
sf$.dhqNaicsFieldAlias;
sf$.dhqNaicsNameFieldAlias;
sf$.dhqAltNaicsFieldAlias;
sf$.dhqUrlFieldAlias;
sf$.dhqLocationTypeFieldAlias;
sf$.dhqSubsidiaryFieldAlias;
sf$.dhqFamilyMemsFieldAlias;
sf$.dhqGlobal2KFieldAlias;
sf$.dhqFortune500FieldAlias;

sf$.ghqCompXIDFieldAlias;
sf$.ghqCompanyNameFieldAlias;
sf$.ghqAddr1FieldAlias;
sf$.ghqAddr2FieldAlias;
sf$.ghqCityFieldAlias;
sf$.ghqStateFieldAlias;
sf$.ghqZipFieldAlias;
sf$.ghqCountryFieldAlias;
sf$.ghqPhoneFieldAlias;
sf$.ghqTradeNameFieldAlias;
sf$.ghqStateCodeFieldAlias;
sf$.ghqCountryCodeFieldAlias;
sf$.ghqEmplyeeCountFieldAlias;
sf$.ghqEmplyeeHereFieldAlias;
sf$.ghqAnnualRevFieldAlias;
sf$.ghqSicFieldAlias;
sf$.ghqSicNameFieldAlias;
sf$.ghqAltSicFieldAlias;
sf$.ghqNaicsFieldAlias;
sf$.ghqNaicsNameFieldAlias;
sf$.ghqAltNaicsFieldAlias;
sf$.ghqUrlFieldAlias;
sf$.ghqLocationTypeFieldAlias;
sf$.ghqSubsidiaryFieldAlias;
sf$.ghqFamilyMemsFieldAlias;
sf$.ghqGlobal2KFieldAlias;
sf$.ghqFortune500FieldAlias;

sf$.inferredCityFieldAlias;
sf$.inferredStateFieldAlias;
sf$.inferredCountryFieldAlias;
sf$.inferredAreaCodeFieldAlias;
sf$.inferredEmployeesFieldAlias;
sf$.inferredIndustryFieldAlias;
sf$.inferredPublicFieldAlias;
sf$.inferredRevenueFieldAlias;

sf$.techAdvertisementFieldAlias;
sf$.techAnalyticsAndTrackingFieldAlias;
sf$.techChatsFieldAlias;
sf$.techCMSFieldAlias;
sf$.techCommentsFieldAlias;
sf$.techContentDeliveryNetworksFieldAlias;
sf$.techDomainNameServicesFieldAlias;
sf$.techECommerceFieldAlias;
sf$.techEmailDeliverySpamProtectionFieldAlias;
sf$.techEmailMarketingFieldAlias;
sf$.techEmailProvidersFieldAlias;
sf$.techFontsFieldAlias;
sf$.techHostedFormsFieldAlias;
sf$.techHostingFieldAlias;
sf$.techLoadBalancersFieldAlias;
sf$.techMarketingAutomationFieldAlias;
sf$.techMediaFieldAlias;
sf$.techPaymentsFieldAlias;
sf$.techPersonalizationFieldAlias;
sf$.techRecruitmentFieldAlias;
sf$.techRestaurantReservationServicesFieldAlias;
sf$.techSecurityFieldAlias;
sf$.techSSLCertificatesFieldAlias;
sf$.techSupportFieldAlias;
sf$.techTagManagementFieldAlias;
sf$.techWebAcceleratorsFieldAlias;
sf$.techWebPerformanceMonitoringFieldAlias;
sf$.techWidgetsFieldAlias;

sf$.uid1FieldAlias;
sf$.uid2FieldAlias;
sf$.uid3FieldAlias;


/**
 * Inialize page
 */
sfjq$(document).ready(function(){
    if (window.sf$ && typeof window.sf$.runSFSetup === "function")
        sf$.runSFSetup();
});

sf$.runSFSetup = function(){
	if (sf$.doSetup){
		sf$.assignIDs();
		sf$.hideDynaInput();
		sf$.hrefLoc = window.location.href;
		sf$.hrefLoc = sf$.hrefLoc.substr(0,(sf$.hrefLoc.indexOf("?", 0) == -1) ? sf$.hrefLoc.length : sf$.hrefLoc.indexOf("?", 0));

        // determine IE version
        sf$.ieVer = (function(){
                     var undef,v=3,divElt=document.createElement("div"),allI=divElt.getElementsByTagName("i");
                     while (
                         divElt.innerHTML = "<!--[if gt IE " + (++v) + "]><i></i><![endif]-->",
                         allI[0]
                     );
                     return v > 4 ? v : undef;
        }());

        sf$.ieMode = (function(){if (undefined != sf$.ieVer && sf$.ieVer != null) return (document.documentMode == 5) ? "quirks" : "strict" ;}());

		// set up parameters that should have been defined
		if (sf$.selectListHoverColor == null || sf$.selectListHoverColor == "")
			sf$.selectListHoverColor="#8888ff";
		if (sf$.selectListColor1 == null || sf$.selectListColor1 == "")
			sf$.selectListColor1="#cccccc";
		if (sf$.selectListColor2 == null || sf$.selectListColor2 == "")
			sf$.selectListColor2="#ffffff";
		if (sf$.selectListNAColor1 == null || sf$.selectListNAColor1 == "")
			sf$.selectListNAColor1=sf$.selectListColor1;
		if (sf$.selectListNAColor2 == null || sf$.selectListNAColor2 == "")
			sf$.selectListNAColor2=sf$.selectListColor2;
		if (sf$.searchResultCount != null && sf$.searchResultCount > 0 && sf$.searchResultCount < 11)
			sf$.resultLength=sf$.searchResultCount;
		if (sf$.dropDownDisplayDivID != null && sf$.dropDownDisplayDivID != "")
			sf$.selectListDivID=sf$.dropDownDisplayDivID;
		if (sf$.phoneFormat != null)
			sf$.phoneFormatUsed=sf$.phoneFormat;
		if (sf$.usePhoneFilter!= null)
			sf$.phoneFilterFlag=sf$.usePhoneFilter;
		if (sf$.autoFillPhone!= null)
			sf$.phoneAutoFillFlag=sf$.autoFillPhone;
		if (sf$.useInferredFilter!= null)
			sf$.revIPFilterFlag=sf$.useInferredFilter;
		if (sf$.doFindByIP!= null )
			sf$.doFindByIPFlag=sf$.doFindByIP;
		if (sf$.doAppendByIPOnLoad!= null )
			sf$.doAppendByIPOnLoadFlag=sf$.doAppendByIPOnLoad;
		if (sf$.doCompanySelect!= null )
			sf$.doCompanySelectFlag=sf$.doCompanySelect;
		if (sf$.autoDeploySelectListEvents!= null )
			sf$.autoDeploySelectListEventsFlag=sf$.autoDeploySelectListEvents;
		if (sf$.deployDropDown!= null )
			sf$.deployDropDownFlag=sf$.deployDropDown;
		// force no auto fill if in pop up mode
		sf$.phoneAutoFillFlag = (!sf$.deployDropDownFlag) ? false : sf$.phoneAutoFillFlag;
		if (sf$.selectListTitle!= null )
			sf$.selectListTitlePhrase=sf$.selectListTitle;
		if (sf$.noneOfTheAbove!= null )
			sf$.notaPhrase=sf$.noneOfTheAbove;
		if (sf$.selectListFooter!= null )
			sf$.selectListFooterPhrase=sf$.selectListFooter;
		if (sf$.remediateCompany!= null )
			sf$.remediateCompanyFlag=sf$.remediateCompany;
		// force remediation only if no company select method
		sf$.remediateCompanyFlag = (!sf$.doCompanySelectFlag) ? true : sf$.remediateCompanyFlag;
		if (sf$.remediateCompanyLevel!= null )
			sf$.remediateCompanyLevelUsed=sf$.remediateCompanyLevel;

		sf$.emailOnlyFilterFlag=(sf$.allowEmailOnlyFilter) ? sf$.emailOnlyFilterFlag : false;

		var reason="",msg="";
		if (sf$.emailOnlyFilterFlag || undefined === sf$.companyNameFieldAlias || sfjq$("#"+sf$.companyNameFieldAlias).length === 0 || (sfjq$("#"+sf$.companyNameFieldAlias).length > 0 && sfjq$("#"+sf$.companyNameFieldAlias).is("input[type=hidden]"))) {
		    msg = "*    sf$.companyNameFieldAlias\n";
		    sf$.companyNameFieldAlias=undefined;
		    sf$.canRun=false;
		} else {
			sf$.frmElt = document.getElementById(sf$.companyNameFieldAlias).form;
		}

		if (!sf$.canRun && (undefined === sf$.emailFieldAlias || sfjq$("#"+sf$.emailFieldAlias).length === 0 || (sfjq$("#"+sf$.emailFieldAlias).length > 0 && sfjq$("#"+sf$.emailFieldAlias).is("input[type=hidden]")))) {
		    msg = msg+"*    sf$.emailFieldAlias\n";
		    sf$.canRun=false;
		} else {
			if (sf$.frmElt == null) {
		        sf$.frmElt = document.getElementById(sf$.emailFieldAlias).form;
		        if (sf$.allowEmailOnlyFilter){
		        	 sf$.canRun=true;
		        	 sf$.emailOnlyFilterFlag=true;
		        } else {
		        	sf$.canRun=false;
		        	sf$.emailOnlyFilterFlag=false;
		        }
			}
		}

		if (!sf$.canRun) reason="* These configuration variables do not hold the ID of an existing input element.\n" + msg;

		if (sf$.frmElt == null) {
			if (sf$.smartFormID != null) sf$.frmElt = document.getElementById(sf$.smartFormID);
			if (sf$.frmElt == null) {
				if (window.console) window.console.log("(!) SmartForms cannot detect a form element on the page.");
				if (sf$.showCriticalAlerts) alert("SmartForms CRITICAL ALERT!\n\nThe form cannot run:\n\n"+"* The form element cannot be detected. Try setting sf$.smartFormID equal to the ID of the form element.\n");
			}
		}

        // detect/set the form ID
        if (undefined != sf$.frmElt && sf$.frmElt != null) {
            var formID = sfjq$(sf$.frmElt).attr("id");
            if (undefined == formID || formID == null) {
                formID = "smartForm1";
                sf$.smartFormID = formID;
                sfjq$(sf$.frmElt).attr("id",formID);
            } else if (formID != sf$.smartFormID) {
                sf$.smartFormID = formID;
            }
		}

        if (sf$.overrideSubmit && undefined != sf$.frmElt && sf$.frmElt != null) {
	    	try {
                // temporarily rename elements on the form named "submit" to something else
                sfjq$("#"+sf$.smartFormID+" :input").each(
				    function(i){
				        if (sfjq$(this).attr("name") == "submit") {
				            sfjq$(this).attr("name", "timbus_tempnm");
                        }
				        if (sfjq$(this).attr("id") == "submit") {
				            sfjq$(this).attr("id", "timbus_tempid");
                        }
				    }
				);
            } catch (err) {}

            // save original submit action and override the form submit action with forceSelection
   	        sf$.frmElt._submit = sf$.frmElt.submit; // saved reference
	        sf$.frmElt.submit = function() {
	            if (!sf$.formSaved)
	                sf$.forceSelection();
	        };

	    	try {
                // undo earlier rename
                sfjq$("#"+sf$.smartFormID+" :input").each(
				    function(i){
				        if (sfjq$(this).attr("name") == "timbus_tempnm") {
				            sfjq$(this).attr("name", "submit");
                        }
				        if (sfjq$(this).attr("id") == "timbus_tempid") {
				            sfjq$(this).attr("id", "submit");
                        }
				    }
				);
            } catch (err) {}
	    }

		if (sf$.autoDeploySelectListEventsFlag && sf$.canRun){
		    sf$.addEvents();
		}
		//dyno or manual, doCompanySelectFlag
		if (sf$.doCompanySelectFlag && document.getElementById(sf$.selectListDivID) == null){
			sf$.canRun=false;
			if (!sf$.autoDeploySelectListEventsFlag) {
			    reason=reason+"* sf$.dropDownDisplayDivID does not hold the ID of an existing div element.\n";
			}
		}
		if (!sf$.canRun){
			if (window.console) window.console.log("(!) SmartForms is not properly configured.\n"+reason);
			if (sf$.showSmartFormAlerts) alert("SmartForms WARNING!\n\nSmartForms is not properly configured and will not run:\n\n"+reason);
		}

		sf$.clearHidden();
		sf$.clearTech();
		sf$.findByIP();
        sf$.doSetup=false;
	}
};

/**
 * Define event listeners for dynamic usage.
 */
sf$.evntListener = [
                    function () {sf$.hideDisplay(-1);},    // focus
                    function () {sf$.dataChanged();},      // change
                    function () {sf$.fieldChanged();},     // company keyup; email, phone, state, country blur
                    function () {sf$.hideDisplay(1);},     // company blur
                    function () {sf$.showDisplay(1);},     // company focus
                    function () {sf$.showDisplay(2);},     // displayFrame mouseover
                    function () {sf$.hideDisplay(2);},     // displayFrame mouseout
                    function () {sf$.blockFrameOnOver();}, // blockFrame mouseover
                    function () {sf$.blockFrameOnOut();}   // blockFrame mouseout
                  ];

/**
 * Dynamically add events and required elements to form.
 */
sf$.addEvents = function(){
	if (sf$.doCompanySelectFlag && sf$.autoDeploySelectListEventsFlag && sf$.canRun) {
	    for (var i=0; i < sf$.frmElt.elements.length; i++) {
	        var fld = sf$.frmElt.elements[i];
            if (fld.type != "hidden" && fld.type != "button" && fld.type != "submit") {
	            if (fld.id != sf$.companyNameFieldAlias) {
	        	    if (sf$.deployDropDownFlag &&
	        		    	((!sf$.emailOnlyFilterFlag && fld.id == sf$.emailFieldAlias) || fld.id != sf$.emailFieldAlias)) {
                        if (fld.onfocus == null || fld.onfocus.toString().indexOf("sf$.hideDisplay") == -1) {
	    	                if (fld.addEventListener) {
    	    		            fld.addEventListener("focus", sf$.evntListener[0], false);
        	     	        } else if (fld.attachEvent) {
        	     	        	fld.attachEvent("onfocus", sf$.evntListener[0]);
        	     	        } else {
        	     	        	fld.onfocus = sf$.evntListener[0];
        	     	        }
                        }
	        	    }
	        	    if (fld.id == sf$.addr1FieldAlias || fld.id == sf$.addr2FieldAlias || fld.id == sf$.cityFieldAlias || fld.id == sf$.stateFieldAlias ||
	    		         fld.id == sf$.zipFieldAlias || fld.id == sf$.countryFieldAlias ||
	    		        (fld.id == sf$.phoneFieldAlias && sf$.deployDropDownFlag && sf$.phoneAutoFillFlag)){
	        	    	if (fld.onchange == null || fld.onchange.toString().indexOf("sf$.dataChanged") == -1) {
	        	    		if (fld.addEventListener) {
	        	    			fld.addEventListener("change", sf$.evntListener[1], false);
	        	    		} else if (fld.attachEvent) {
	        	    			fld.attachEvent("onchange", sf$.evntListener[1]);
	        	    		} else {
	        	    			fld.onchange = sf$.evntListener[1];
	        	    		}
	        	    	}
	        	    }
	        	    if ((!sf$.emailOnlyFilterFlag && fld.id == sf$.emailFieldAlias) ||
	    	    		fld.id == sf$.phoneFieldAlias || fld.id == sf$.stateFieldAlias || fld.id == sf$.countryFieldAlias){
	        	    	if (fld.onblur == null || fld.onblur.toString().indexOf("sf$.fieldChanged") == -1) {
	        	    		if (fld.addEventListener) {
	        	    			fld.addEventListener("blur", sf$.evntListener[2], false);
	        	    		} else if (fld.attachEvent) {
	        	    			fld.attachEvent("onblur", sf$.evntListener[2]);
	        	    		} else {
	        	    			fld.onblur = sf$.evntListener[2];
	        	    		}
	        	    	}
	        	    }
	            }

	            if (fld.id == sf$.companyNameFieldAlias || (sf$.emailOnlyFilterFlag && fld.id == sf$.emailFieldAlias)){
	            	if (fld.onkeyup == null || fld.onkeyup.toString().indexOf("sf$.fieldChanged") == -1) {
	            		if (fld.addEventListener) {
	            			fld.addEventListener("keyup", sf$.evntListener[2], false);
	            			if (sf$.deployDropDownFlag) {
	            				fld.addEventListener("blur", sf$.evntListener[3], false);
	            				fld.addEventListener("focus", sf$.evntListener[4], false);
	            			}
	            		} else if (fld.attachEvent) {
	            			fld.attachEvent("onkeyup", sf$.evntListener[2]);
	            			if (sf$.deployDropDownFlag) {
	            				fld.attachEvent("onblur", sf$.evntListener[3]);
	            				fld.attachEvent("onfocus", sf$.evntListener[4]);
	            			}
	            		} else {
	            			fld.onkeyup = sf$.evntListener[2];
	            			if (sf$.deployDropDownFlag) {
	            				fld.onblur = sf$.evntListener[3];
	            				fld.onfocus = sf$.evntListener[4];
	            			}
	            		}
	            	}
	            	fld.setAttribute("autocomplete", "off" );
	            }
            }
    	}

	    var displayFrame = document.getElementById(sf$.selectListDivID);
	    if (displayFrame == null){
	        // add select list display frame
     	    displayFrame = document.createElement("div");
	        displayFrame.setAttribute("id", sf$.selectListDivID);

	        // IE7/8 hack - use both className and class
	        if (sf$.ieVer != null && (sf$.ieVer < 9 || sf$.ieMode == "quirks"))
	            displayFrame.setAttribute("className", "divDisplayFrame");
            displayFrame.setAttribute("class", "divDisplayFrame");

	        if (sf$.ieVer != null && (sf$.ieVer < 9 || sf$.ieMode == "quirks"))
	            displayFrame.style.setAttribute("cssText", "visibility:hidden; border-width:medium; width:402px; height:auto; display:none; position:absolute; z-index:100; background-color:#ffffff;");
	        else
	            displayFrame.setAttribute("style", "visibility:hidden; border-width:medium; width:402px; height:auto; display:none; position:absolute; z-index:100; background-color:#ffffff;");

   	        sfjq$("body").prepend(displayFrame);
	    }
	    if (sf$.deployDropDownFlag && !sf$.deployDynaInput) {
	    	if (displayFrame.onmouseover == null || displayFrame.onmouseover.toString().indexOf("sf$.showDisplay") == -1) {
                if (displayFrame.addEventListener) {
            	    displayFrame.addEventListener("mouseover", sf$.evntListener[5], false);
    	            displayFrame.addEventListener("mouseout", sf$.evntListener[6], false);
	            } else if (displayFrame.attachEvent) {
        	        displayFrame.attachEvent("onmouseover", sf$.evntListener[5]);
            	    displayFrame.attachEvent("onmouseout", sf$.evntListener[6]);
                } else {
    	            displayFrame.onmouseover = sf$.evntListener[5];
	    	        displayFrame.onmouseout = sf$.evntListener[6];
                }
	    	}
        }
    }
};

/**
 * Dynamically remove events that were dynamically added.
 */
sf$.removeEvents = function(){
	if (sf$.autoDeploySelectListEventsFlag) {
	    for (var i=0; i < sf$.frmElt.elements.length; i++) {
	        var fld = sf$.frmElt.elements[i];
	        if (fld.type != "hidden" && fld.type != "button" && fld.type != "submit") {
	        	if (fld.id != sf$.companyNameFieldAlias) {
	    	        if (fld.removeEventListener) {
	    		        fld.removeEventListener("focus", sf$.evntListener[0], false);
    	    	    } else if (fld.detachEvent) {
	        		    fld.detachEvent("onfocus", sf$.evntListener[0]);
    	        	} else {
	           		    fld.onfocus = null;
	        	    }
	    	        if (fld.id == sf$.addr1FieldAlias || fld.id == sf$.addr2FieldAlias || fld.id == sf$.cityFieldAlias || fld.id == sf$.stateFieldAlias ||
	    	        	fld.id == sf$.zipFieldAlias || fld.id == sf$.countryFieldAlias || fld.id == sf$.phoneFieldAlias){
	    	        	if (fld.removeEventListener) {
	    	        		fld.removeEventListener("change", sf$.evntListener[1], false);
	    	        	} else if (fld.detachEvent) {
	    	        		fld.detachEvent("onchange", sf$.evntListener[1]);
	    	        	} else {
	    	        		fld.onchange = null;
	    	        	}
	    	        }
		    	    if (fld.id == sf$.emailFieldAlias || fld.id == sf$.phoneFieldAlias ||
		    	    		fld.id == sf$.stateFieldAlias || fld.id == sf$.countryFieldAlias){
			    	    if (fld.removeEventListener) {
		    	      		fld.removeEventListener("blur", sf$.evntListener[2], false);
			    	   	} else if (fld.attachEvent) {
				       		fld.detachEvent("onblur", sf$.evntListener[2]);
				        } else {
				       	    fld.onblur = null;
		    		    }
			        }
	        	}
	        }

	        if (fld.id == sf$.companyNameFieldAlias || fld.id == sf$.emailFieldAlias){
		        if (fld.removeEventListener) {
		    	    fld.removeEventListener("keyup", sf$.evntListener[2], false);
    		    	    fld.removeEventListener("blur", sf$.evntListener[3], false);
	    	    	    fld.removeEventListener("focus", sf$.evntListener[4], false);
		        } else if (fld.detachEvent) {
		        	fld.detachEvent("onkeyup", sf$.evntListener[2]);
		    	        fld.detachEvent("onblur", sf$.evntListener[3]);
        		    	fld.detachEvent("onfocus", sf$.evntListener[4]);
	    	    } else {
	        		fld.onkeyup = null;
	    	    	    fld.onblur = null;
	    		        fld.onfocus = null;
	        	}
	        }
    	}

	    var displayFrame = document.getElementById(sf$.selectListDivID);
	    if (displayFrame != null)
            sfjq$(displayFrame).remove();
    }
};

/**
 * Called on initialization to perform a reverse IP look up.
 */
sf$.findByIP = function(){
	//if (sf$.canRun && (sf$.revIPFilterFlag || sf$.doFindByIPFlag || sf$.doAppendByIPOnLoadFlag)) {
	if (sf$.canRun) {
		sf$.fillByIP=true;
    	var servletHTML="FetchIPCompany.html";
    	sfjq$.getJSON(sf$.serviceURL+servletHTML+"?jsonp=?",
    			{
    				"tkn" : sf$.token,
    				"fbip" : sf$.doFindByIPFlag,
    				"acol" : sf$.doAppendByIPOnLoadFlag,
    				"phnf" : encodeURIComponent(sf$.phoneFormatUsed),
    				"av" : sf$.rfAppVersion,
    				"bip" : sf$.ipLoc,
    				"ref" : encodeURIComponent(sf$.hrefLoc)
    			},
    			function(response){
    				if (response != null && response.data.length > 0)
    					sf$.findByIPHandler(sf$.stringToXML(response.data));
    				})
    			.error(function() {
    				       if (window.console) window.console.log("(!) SmartForms encountered an issue during find by IP.");
    				       if (sf$.showJSONPAlerts) alert("SmartForms encountered an issue during find by IP.");
    				   })
    			.complete(function() {
    				          sf$.fillByIP=false;
    				          if (sf$.frmChanged && (sfjq$("#"+sf$.companyNameFieldAlias).val() || sfjq$("#"+sf$.emailFieldAlias).val()))
    				        	  sf$.fieldChanged();
    				      });

	    sf$.doAppendByIPOnLoadFlag=false;
	}
};

sf$.findByIPHandler = function(resXML){
	var found="false";
	if (resXML.getElementsByTagName("ip")[0].firstChild != null)
		sf$.ipLoc=resXML.getElementsByTagName("ip")[0].firstChild.data;
	if (resXML.getElementsByTagName("ipfound")[0].firstChild != null)
		found=resXML.getElementsByTagName("ipfound")[0].firstChild.data;
	if (found == "true") {
		sf$.fillFromIPXML(resXML);
		if (sf$.doAppendByIPOnLoadFlag && resXML.getElementsByTagName("compfound")[0].firstChild != null)
			found=resXML.getElementsByTagName("compfound")[0].firstChild.data;
		sf$.fillFromXML(resXML, found, "ip");
	} else {
		if (resXML.getElementsByTagName("suid")[0].firstChild != null)
			sf$.fillSuid(resXML.getElementsByTagName("suid")[0].firstChild.data);
	}
};

/**
 * Called when the form company information is altered. Performs a search to populate the select list.
 */
sf$.fieldChanged = function(){
	if (sf$.callIndex != -1 && sf$.doCompanySelectFlag && sf$.canRun){
        var elt,nameFieldVal="",emailFieldVal="",phoneFieldVal="",stateFieldVal="",countryFieldVal="",
            revIPAreaCdFieldVal="",revIPStFieldVal="",revIPCntryFieldVal="",revIPCompIDFieldVal="";
        elt=sf$.grabElementById(sf$.companyNameFieldAlias);
        if (elt != null && elt.value.length > 0){
			if ((sf$.dynaInputIDs.toString().indexOf(sf$.companyNameFieldAlias) === -1) ||
			     (sf$.dynaInputIDs.toString().indexOf(sf$.companyNameFieldAlias) > -1 && sf$.isDynaInputVisible)) {
 	            nameFieldVal=sfjq$.trim(elt.value);
 	        }
	    }
        elt=sf$.grabElementById(sf$.emailFieldAlias);
        if (elt != null && elt.value.length > 0){
			if ((sf$.dynaInputIDs.toString().indexOf(sf$.emailFieldAlias) === -1) ||
			     (sf$.dynaInputIDs.toString().indexOf(sf$.emailFieldAlias) > -1 && sf$.isDynaInputVisible)) {
 	            emailFieldVal=sfjq$.trim(elt.value);
 	        }
	    }
        elt=sf$.grabElementById(sf$.phoneFieldAlias);
        if (sf$.phoneFilterFlag && elt != null && elt.value.length > 0){
			if ((sf$.dynaInputIDs.toString().indexOf(sf$.phoneFieldAlias) === -1) ||
			     (sf$.dynaInputIDs.toString().indexOf(sf$.phoneFieldAlias) > -1 && sf$.isDynaInputVisible)) {
	            phoneFieldVal=sfjq$.trim(elt.value);
 	        }
	    }
        elt=sf$.grabElementById(sf$.stateFieldAlias);
        if (elt != null && elt.value.length > 0){
			if ((sf$.dynaInputIDs.toString().indexOf(sf$.stateFieldAlias) === -1) ||
			     (sf$.dynaInputIDs.toString().indexOf(sf$.stateFieldAlias) > -1 && sf$.isDynaInputVisible)) {
        	    stateFieldVal=sfjq$.trim(sf$.getInputData(sf$.stateFieldAlias,sf$.useStateText));
 	        }
	    }
        elt=sf$.grabElementById(sf$.countryFieldAlias);
        if (elt != null && elt.value.length > 0){
			if ((sf$.dynaInputIDs.toString().indexOf(sf$.countryFieldAlias) === -1) ||
			     (sf$.dynaInputIDs.toString().indexOf(sf$.countryFieldAlias) > -1 && sf$.isDynaInputVisible)) {
        	    countryFieldVal=sfjq$.trim(sf$.getInputData(sf$.countryFieldAlias,sf$.useCountryText));
 	        }
	    }

        if (sf$.revIPFilterFlag) {
        	revIPAreaCdFieldVal=sfjq$.trim(sf$.revIPAreaCd);
        	revIPStFieldVal=sfjq$.trim(sf$.revIPSt);
        	revIPCntryFieldVal=sfjq$.trim(sf$.revIPCntry);
        }

        if (sf$.doFindByIPFlag) revIPCompIDFieldVal=sfjq$.trim(sf$.revIPCompID);

        var currentSearch=(nameFieldVal).toLowerCase()+emailFieldVal+phoneFieldVal+(stateFieldVal || revIPStFieldVal)+(countryFieldVal || revIPCntryFieldVal);
        if (sf$.lastSearch != currentSearch) sf$.hideDisplay(-1);
        if (sf$.lastEmail != emailFieldVal) {
        	sf$.clearTech();
        	//if (!sf$.emailOnlyFilterFlag)
        		sf$.junkEmailDetected=true;
        }

		sf$.isJunkName(nameFieldVal);
        if ((sf$.lastSearch != currentSearch && (!sf$.junkNameDetected || !sf$.junkEmailDetected)) ||
        	(sf$.lastEmail != emailFieldVal && sf$.junkEmailDetected) ||
        	(revIPCompIDFieldVal != null && revIPCompIDFieldVal.length > 0 && sf$.lastRFID != revIPCompIDFieldVal && nameFieldVal != null && nameFieldVal.length > 1)) {
        	sf$.frmChanged=true;
 			sf$.dataReady=false;
 		    sf$.lastSearch=currentSearch;
 		    sf$.lastEmail=emailFieldVal;
 		    sf$.lastRFID=revIPCompIDFieldVal;

 		    var servletHTML="NameMatch.html";
 		    sfjq$.getJSON(sf$.serviceURL+servletHTML+"?jsonp=?",
 		    		{
 		    			"tkn" : sf$.token,
	        			"cid" : (++sf$.callIndex),
	        			"oq" : sf$.oquery,
   					    "resl" : sf$.resultLength,
   					    "jnd" : sf$.junkNameDetected,
   					    "pnm" : encodeURIComponent(nameFieldVal),
   					    "em" : encodeURIComponent(emailFieldVal),
   					    "phn" : encodeURIComponent(phoneFieldVal),
   					    "st" : encodeURIComponent(stateFieldVal),
  						"ctry" : encodeURIComponent(countryFieldVal),
  						"rac" : encodeURIComponent(revIPAreaCdFieldVal),
  						"rst" : encodeURIComponent(revIPStFieldVal),
   					    "rctry" : encodeURIComponent(revIPCntryFieldVal),
   					    "rfid" : encodeURIComponent(revIPCompIDFieldVal),
   					    "tf" : encodeURIComponent(sf$.techFilled),
	   					"referer" : encodeURIComponent(sf$.hrefLoc)
 		    		},
 		    		function(response){
 		    			if (response != null && response.data.length > 0)
 		    				sf$.fieldChangedHandler(sf$.stringToXML(response.data));
 		    			})
 		    			.error(function() {
 		    				        if (window.console) window.console.log("(!) SmartForms encountered an issue during select list search.");
 		    				        if (sf$.showJSONPAlerts) alert("SmartForms encountered an issue during select list search.");
 		    				  });
		}
	}
};

sf$.fieldChangedHandler = function(resXML){
	  if(resXML != null){
		   var callID=0;
		   if (resXML.getElementsByTagName("callID")!= null
					&& resXML.getElementsByTagName("callID")[0] != null
					&& resXML.getElementsByTagName("callID")[0].firstChild != null)
				callID=resXML.getElementsByTagName("callID")[0].firstChild.data;

			var companies=resXML.getElementsByTagName("company");
			var nameList=[],detailList=[],idList=[];
			for(var x=0; x< companies.length; x++){
				if (companies[x].getElementsByTagName("name")[0]!= null)
					nameList.push(companies[x].getElementsByTagName("name")[0].firstChild.data);
				else
					nameList.push("");
                var details="";
				if (companies[x].getElementsByTagName("tradeStyleName")[0]!= null
						&& companies[x].getElementsByTagName("tradeStyleName")[0].firstChild != null)
					details+="("+companies[x].getElementsByTagName("tradeStyleName")[0].firstChild.data+") ";
				if (sf$.phoneFilterFlag) {
					if (companies[x].getElementsByTagName("streetAddress1")[0]!= null
							&& companies[x].getElementsByTagName("streetAddress1")[0].firstChild != null)
						details+=companies[x].getElementsByTagName("streetAddress1")[0].firstChild.data+",  ";
				}
				if (companies[x].getElementsByTagName("city")[0]!= null
						&& companies[x].getElementsByTagName("city")[0].firstChild != null)
					details+=companies[x].getElementsByTagName("city")[0].firstChild.data;
				if (companies[x].getElementsByTagName("state")[0]!= null
						&& companies[x].getElementsByTagName("state")[0].firstChild != null)
					details+=", "+companies[x].getElementsByTagName("state")[0].firstChild.data;
				if (companies[x].getElementsByTagName("countrycode")[0]!= null
						&& companies[x].getElementsByTagName("countrycode")[0].firstChild != null)
					details+=", "+companies[x].getElementsByTagName("countrycode")[0].firstChild.data;

				detailList.push(details);
				if (companies[x].getElementsByTagName("rfid")[0]!= null)
					idList.push(companies[x].getElementsByTagName("rfid")[0].firstChild.data);
				else idList.push("");
			}
			if (callID == sf$.callIndex){ // only save the 'most current' data
				sf$.latestSearchResultsNames=nameList;
				sf$.latestSearchResultsData=detailList;
				sf$.latestSearchResultsIDs=idList;
			}
            // let forceSelection know list is ready
			sf$.dataReady=true;
			if (sf$.deployDropDownFlag != false)
				sf$.dataAvailable(callID,nameList,detailList,idList);

            if (resXML.getElementsByTagName("junkemail")[0].firstChild != null)
            	switch(resXML.getElementsByTagName("junkemail")[0].firstChild.data) {case "false": sf$.junkEmailDetected=false; break; default: sf$.junkEmailDetected=true;}
            var found="false";
            if (resXML.getElementsByTagName("cofound")[0].firstChild != null)
		        found=resXML.getElementsByTagName("cofound")[0].firstChild.data;
            if (found === "true") {
                sf$.fillFromTechXML(resXML);
            }
	  }
};

/**
 * Called when a company is selected form the select list, it sends a request to
 * get details of the selected company for appending company information.
 */
sf$.getDetails = function(name, rfCompID){
	if (rfCompID == 0) {
		if (sf$.dataSubmitInProcess){
		     sf$.completeOngoingSubmit();
		     return;
		} else {
			sf$.showDynaInput();
		}
	}
	if (rfCompID != 0) {
	    sf$.callIndex=-1;
	    sf$.hideDisplay(0);
	    sf$.compID=rfCompID;

	    var selectMeth = (!sf$.doCompanySelectFlag) ? "none" : sf$.deployDropDownFlag;
		var servletHTML = "FetchCompany.html";
 	    sfjq$.getJSON(sf$.serviceURL+servletHTML+"?jsonp=?",
 	    		{
 	    			"tkn" : sf$.token,
	        		"suid" : sf$.sessionID,
   				    "rfid" : rfCompID,
   				    "phnf" : encodeURIComponent(sf$.phoneFormatUsed),
   				    "mth" : selectMeth,
   				    "av" : sf$.rfAppVersion,
       	            "tf" : encodeURIComponent(sf$.techFilled),
    	            "rqurl" : encodeURIComponent(sf$.rqurl),
   					"referer" : encodeURIComponent(sf$.hrefLoc)
 	    		},
	       		function(response){
 	    			if (response != null && response.data.length > 0)
 	    				sf$.getDetailsHandler(sf$.stringToXML(response.data));
 	    			})
 	    		.error(function() {
 	    			       if (window.console) window.console.log("(!) SmartForms encountered an issue during get company details.");
 	    			       if (sf$.showJSONPAlerts) alert("SmartForms encountered an issue during get company details.");
 	    			   });
	}
};

sf$.getDetailsHandler = function(resXML){
	var found="false";
	if (resXML.getElementsByTagName("cofound")[0].firstChild != null)
	    found=resXML.getElementsByTagName("cofound")[0].firstChild.data;
	if (found === "true") {
	    sf$.fillFromTechXML(resXML);
	}

	sf$.fillFromXML(resXML, "true", "details");
	sf$.completeOngoingSubmit();
};

/**
 * Should be the method use to Submit the form. Handles drop-down and confirmation methods of submit.
 */
sf$.forceSelection = function(){
	// in drop-down mode or nothing in the select list to display
    if (sf$.deployDropDownFlag || (sf$.latestSearchResultsNames == null || sf$.latestSearchResultsNames.length == 0)){
    	sf$.saveUse();
    	return;
    }

    var blockFrame=document.createElement("div");
    blockFrame.setAttribute("id","RFBlockFrame");
	// IE7/8 hack - use both className and class
	if (sf$.ieVer != null && (sf$.ieVer < 9 || sf$.ieMode == "quirks"))
	    blockFrame.setAttribute("className", "divBlockFrame");
    blockFrame.setAttribute("class", "divBlockFrame");

    var height=sfjq$(document).height();
    var width=sfjq$(document).width();

    if (sf$.ieVer != null && (sf$.ieVer < 9 || sf$.ieMode == "quirks")) {
        blockFrame.style.setAttribute("cssText",
              "width:"+width+"px; height:"+height+"px; left:0; top:0; position:absolute; background-color:#888888; filter:alpha(opacity=60); " +
              "visibility:visible; z-index:1000; background-image:url("+sf$.httpProtocol+"d12ulf131zb0yj.cloudfront.net/SmartForms3-0/assets/img/grey.jpg);");
    } else
        blockFrame.setAttribute("style",
              "width:"+width+"px; height:"+height+"px; left:0; top:0; position:absolute; background-color:#888888; " +
			  "-moz-opacity:0.6; opacity:0.6; visibility:visible; z-index:1000; background-image:url("+sf$.httpProtocol+"d12ulf131zb0yj.cloudfront.net/SmartForms3-0/assets/img/grey.jpg);");

    sfjq$("body").prepend(blockFrame);

    if (blockFrame.addEventListener) {
        blockFrame.addEventListener("mouseover", sf$.evntListener[7], false);
        blockFrame.addEventListener("mouseout", sf$.evntListener[8], false);
	} else if (blockFrame.attachEvent) {
        blockFrame.attachEvent("onmouseover", sf$.evntListener[7]);
        blockFrame.attachEvent("onmouseout", sf$.evntListener[8]);
    } else {
        blockFrame.onmouseover = sf$.evntListener[7];
	    blockFrame.onmouseout = sf$.evntListener[8];
    }

    var dispObj=document.getElementById(sf$.selectListDivID);
    dispObj.style.zIndex=1001;

	sf$.allowDropDownHide=false;
	sf$.dataSubmitInProcess=true;
	sf$.displayConfirmation();
};

/**
 * Wait for field changed to complete.
 */
sf$.displayConfirmation = function(){
    if (!sf$.dataReady) {
        setTimeout("sf$.displayConfirmation();", 100);
    } else {
    	sf$.dataAvailable(sf$.callIndex, sf$.latestSearchResultsNames, sf$.latestSearchResultsData, sf$.latestSearchResultsIDs);
    	sf$.centerSelectListDiv();
    }
};

/**
 * Called by the fieldChange handler to hand over returned data.
 * Builds a table of the return results and puts it in the 'RFDisplayFrame' div.
 */
sf$.dataAvailable = function(callId, nameList, detailsList, idList){
	if (callId == sf$.callIndex){
		bigResult="<table class=\"tabCompList\" width=\"100%\" >";
		if (!sf$.allowDropDownHide){
			bigResult+=sf$.selectListTitlePhrase;
		}
		if (nameList != null && nameList.length > 0 && nameList[nameList.length-1]!= sf$.notaPhrase){
			nameList.push(sf$.notaPhrase);
			detailsList.push("&nbsp;");
			idList.push("0");
		}
		for(var x=0; x< nameList.length && x< detailsList.length && x< idList.length; x++){
			var color;
            if (x < (nameList.length - 1) ) {
			    color=sf$.selectListColor2;
			    if (x%2 == 1)
			    	color=sf$.selectListColor1;
			    result="<tr class=\"tabCompTR\" onclick=\"sf$.getDetails('"+escape(nameList[x])+"','"+idList[x]+"');sf$.hideDisplay(0);\" onmouseover=\"sf$.onOver(this)\" onmouseout=\"sf$.onOut(this,"+x%2+",1)\" style=\"background-color:"+color+";\">"
			    	  +"<td class=\"tabCompTD\"><div class=\"divCompList\" >"
			    	  +"<div class=\"divCompName\">"+nameList[x]+"</div><div class=\"divCompDetails\" style=\"font-size:75%;\">"+detailsList[x]+"</div>";
			    bigResult+=result+"</div></td></tr>\n";
			} else {
			    color=sf$.selectListNAColor2;
			    if (x%2 == 1)
			    	color=sf$.selectListNAColor1;
			    result="<tr class=\"tabCompNATR\" onclick=\"sf$.getDetails('"+escape(nameList[x])+"','"+idList[x]+"');sf$.hideDisplay(0);\" onmouseover=\"sf$.onOver(this)\" onmouseout=\"sf$.onOut(this,"+x%2+",2)\" style=\"background-color:"+color+";\">"
			    	  +"<td class=\"tabCompNATD\"><div class=\"divCompNAList\" >"
			    	  +"<div class=\"divCompNADetails\" style=\"font-size:75%;\">"+detailsList[x]+"</div><div class=\"divCompNAName\">"+nameList[x]+"</div>";
			    bigResult+=result+"</div></td></tr>\n";
			}
		}
		if (nameList.length > 0){
			sf$.dropFilled=true;
            if ((sf$.deployDropDownFlag && (sfjq$(document.activeElement).attr("id") == sf$.companyNameFieldAlias || sfjq$(document.activeElement).attr("id") == sf$.emailFieldAlias))
            		|| !sf$.deployDropDownFlag )
			    sf$.showDisplay(0);
			var Dframe=document.getElementById(sf$.selectListDivID);
			Dframe.innerHTML=bigResult+"</table><div class=\"divCompFooter\">"+sf$.selectListFooterPhrase+"</div>";
		} else if (sf$.dataSubmitInProcess)
			sf$.completeOngoingSubmit();
	}
};

/**
 * Used with the confirmation method to complete a submit request.
 */
sf$.completeOngoingSubmit = function(){
	if (sf$.dataSubmitInProcess){
		// loading animation
		var loadingFrame=document.createElement("div");
		loadingFrame.setAttribute("id","RFLoadingFrame");
	    // IE7/8 hack - use both className and class
    	if (sf$.ieVer != null && (sf$.ieVer < 9 || sf$.ieMode == "quirks"))
    	    loadingFrame.setAttribute("className", "divLoadingFrame");
        loadingFrame.setAttribute("class", "divLoadingFrame");

        if (sf$.ieVer != null && (sf$.ieVer < 9 || sf$.ieMode == "quirks"))
            loadingFrame.style.setAttribute("cssText",
                  "width:75px; height:75px; position:absolute; " +
                  "visibility:visible; z-index:1001; background-image:url("+sf$.httpProtocol+"d12ulf131zb0yj.cloudfront.net/SmartForms3-0/assets/img/loading-animation-75.gif);");
        else
            loadingFrame.setAttribute("style",
                  "width:75px; height:75px; position:absolute; " +
                  "visibility:visible; z-index:1001; background-image:url("+sf$.httpProtocol+"d12ulf131zb0yj.cloudfront.net/SmartForms3-0/assets/img/loading-animation-75.gif);");

    	sfjq$("body").prepend(loadingFrame);
    	sf$.centerLoadingDiv();

		sf$.saveUse();
	}
};

/**
 * Called from forceSelection(). Informs the ReachForce system which company was
 * used(if any) and sends any manually entered data for cleansing and verification.
 */
sf$.saveUse = function(){
	if (sf$.canRun) {
	    sf$.formSaved=true;
	    sf$.callIndex=-1;
    	sf$.hideDisplay(0);

    	var elt,first="",last="",email="",uid1="",uid2="",uid3="",
	        revIPCty="",revIPSt="",revIPCntry="",revIPAreaCd="";
	    elt=sf$.grabElementById(sf$.firstNameFieldAlias);
	    if (elt != null) first=elt.value;
		elt=sf$.grabElementById(sf$.lastNameFieldAlias);
    	if (elt != null) last=elt.value;
	    elt=sf$.grabElementById(sf$.emailFieldAlias);
    	if (elt != null) email=elt.value;
	    elt=sf$.grabElementById(sf$.uid1FieldAlias);
		if (elt != null) uid1=elt.value;
		elt=sf$.grabElementById(sf$.uid2FieldAlias);
		if (elt != null) uid2=elt.value;
		elt=sf$.grabElementById(sf$.uid3FieldAlias);
		if (elt != null) uid3=elt.value;

        if (sf$.revIPFilterFlag) {
        	revIPCty=sfjq$.trim(sf$.revIPCty);
        	revIPSt=sfjq$.trim(sf$.revIPSt);
        	revIPCntry=sfjq$.trim(sf$.revIPCntry);
        	revIPAreaCd=sfjq$.trim(sf$.revIPAreaCd);
        }

		//log company firmographics
		var addr1="",addr2="",city="",state="",zip="",name="",country="",phone="";
		if (sf$.frmChanged || !sf$.deployDropDownFlag){
		    elt=sf$.grabElementById(sf$.addr1FieldAlias);
			if (elt != null) addr1=elt.value;
			elt=sf$.grabElementById(sf$.addr2FieldAlias);
			if (elt != null) addr2=elt.value;
			elt=sf$.grabElementById(sf$.cityFieldAlias);
			if (elt != null) city=elt.value;
			elt=sf$.grabElementById(sf$.stateFieldAlias);
			if (elt != null) state=sf$.getInputData(sf$.stateFieldAlias,sf$.useStateText);
			elt=sf$.grabElementById(sf$.zipFieldAlias);
			if (elt != null) zip=elt.value;
			elt=sf$.grabElementById(sf$.companyNameFieldAlias);
			if (elt != null)
				name=elt.value;
			else
				sf$.junkNameDetected=true;
			elt=sf$.grabElementById(sf$.countryFieldAlias);
			if (elt != null) country=sf$.getInputData(sf$.countryFieldAlias,sf$.useCountryText);
			elt=sf$.grabElementById(sf$.phoneFieldAlias);
			if (elt != null) phone=elt.value;
		}

		var selectMeth = (!sf$.doCompanySelectFlag) ? "none" : sf$.deployDropDownFlag;
		if (!sf$.junkNameDetected) sf$.isJunkName(sf$.grabElementById(sf$.companyNameFieldAlias).value);
        if (sf$.lastEmail != email) {
        	sf$.clearTech();
        	sf$.junkEmailDetected=true;
        }
		var servletHTML="CompanyUsed.html";

		// JSONP does not have native error handling - timeout in a reasonable amount of time
		var errTimeoutID = setTimeout(sf$.saveUseTimeoutHandler, 10000); //10000=10sec
		if (sf$.frmChanged || !sf$.deployDropDownFlag){
	    	sfjq$.getJSON(sf$.serviceURL+servletHTML+"?jsonp=?",
    				      {
	    	        	     "tkn" : sf$.token,
	                    	 "rfid" : encodeURIComponent(sf$.compID),
		                     "chng" : sf$.frmChanged,
		                     "rpm" : sf$.remediateCompanyFlag,
	    	                 "rpml" : sf$.remediateCompanyLevelUsed,
	    	                 "jnd" : sf$.junkNameDetected,
	        	             "mth" : selectMeth,
	            	         "av" : sf$.rfAppVersion,
	                	     "fn" : encodeURIComponent(first),
	                    	 "ln" : encodeURIComponent(last),
		                     "em" : encodeURIComponent(email),
		                     "u1" : uid1,
	    	                 "u2" : uid2,
	        	             "u3" : uid3,
	            	         "suid" : sf$.sessionID,
	            	         "rcty" : encodeURIComponent(revIPCty),
	            	         "rst" : encodeURIComponent(revIPSt),
	            	         "rctry" : encodeURIComponent(revIPCntry),
	            	         "rac" : encodeURIComponent(revIPAreaCd),
	            	         "browserIP" : sf$.ipLoc,
	            	         "tf" : encodeURIComponent(sf$.techFilled),
	            	         "rqurl" : encodeURIComponent(sf$.rqurl),
	                	     "referer" : encodeURIComponent(sf$.hrefLoc),
	                    	 "soe" : sf$.savingOnExit,
		                     "addr1" : encodeURIComponent(addr1),
   			                 "addr2" : encodeURIComponent(addr2),
   			                 "cty" : encodeURIComponent(city),
   		    	             "st" : encodeURIComponent(state),
   		        	         "zp" : encodeURIComponent(zip),
   		            	     "nm" : encodeURIComponent(name),
   		                	 "ctry" : encodeURIComponent(country),
	   		                 "phn" : encodeURIComponent(phone),
   			                 "phnf" : encodeURIComponent(sf$.phoneFormatUsed)
	    	    	      },
	       			      function(response) {
	    	    	    	  clearTimeout(errTimeoutID);
	        		    	  if (response != null && response.data.length > 0)
	        			          sf$.saveUseHandler(sf$.stringToXML(response.data));
			       	      })
		        	      .error(function() {
		        	                          clearTimeout(errTimeoutID);
		        	                          sf$.fillScore("unexpected error","","","");
		        	                          if (window.console) window.console.log("(!) SmartForms encountered an issue during save use (a).");
	    	    	    	                  if (sf$.showJSONPAlerts) alert("SmartForms encountered an issue during save use (a).");
	        		    	                })
	       		    	  .complete(function() { sf$.doSmartFormSubmit(); });
		} else {
			sfjq$.getJSON(sf$.serviceURL+servletHTML+"?jsonp=?",
      				      {
	    		             "tkn" : sf$.token,
	            	         "rfid" : encodeURIComponent(sf$.compID),
	                	     "chng" : sf$.frmChanged,
	                    	 "rpm" : sf$.remediateCompanyFlag,
		                     "rpml" : sf$.remediateCompanyLevelUsed,
		                     "jnd" : sf$.junkNameDetected,
		                     "mth" : selectMeth,
	    	                 "av" : sf$.rfAppVersion,
	        	             "fn" : encodeURIComponent(first),
	            	         "ln" : encodeURIComponent(last),
	                	     "em" : encodeURIComponent(email),
	                    	 "u1" : uid1,
		                     "u2" : uid2,
		                     "u3" : uid3,
	    	                 "suid" : sf$.sessionID,
	    	                 "rcty" : encodeURIComponent(revIPCty),
	            	         "rst" : encodeURIComponent(revIPSt),
	            	         "rctry" : encodeURIComponent(revIPCntry),
	            	         "rac" : encodeURIComponent(revIPAreaCd),
	    	                 "browserIP" : sf$.ipLoc,
	    	                 "tf" : encodeURIComponent(sf$.techFilled),
	    	                 "rqurl" : encodeURIComponent(sf$.rqurl),
	        	             "referer" : encodeURIComponent(sf$.hrefLoc),
	            	         "soe" : sf$.savingOnExit
	        	    	  },
		       		      function(response) {
	        	    		  clearTimeout(errTimeoutID);
		        	    	  // not expecting a response with data
	    	    	    	  if (response != null && response.data.length > 0)
	        			          sf$.saveUseHandler(sf$.stringToXML(response.data));
		       		      })
	        	    	  .error(function() {
	        	    	                      clearTimeout(errTimeoutID);
		        	                          sf$.fillScore("unexpected error","","","");
		        	                          if (window.console) window.console.log("(!) SmartForms encountered an issue during save use (b).");
	        	    		                  if (sf$.showJSONPAlerts) alert("SmartForms encountered an issue during save use (b).");
	        	    	        	        })
		       		      .complete(function() { sf$.doSmartFormSubmit(); });
		}
	} else {
		sf$.doSmartFormSubmit();
	}
};

sf$.saveUseHandler = function(resXML){
	if (resXML.getElementsByTagName("junkemail")[0].firstChild != null) {
	  	switch(resXML.getElementsByTagName("junkemail")[0].firstChild.data) {case "false": sf$.junkEmailDetected=false; break; default: sf$.junkEmailDetected=true;}
	  	sf$.fillScore("user","","","");
	}

	var found="false";
	if (resXML.getElementsByTagName("cofound")[0].firstChild != null)
	    found=resXML.getElementsByTagName("cofound")[0].firstChild.data;
	if (found === "true") {
	    sf$.fillFromTechXML(resXML);
	}

	found="false";
	if (resXML.getElementsByTagName("found")[0].firstChild != null) {
		found=resXML.getElementsByTagName("found")[0].firstChild.data;
		//results of an RPM
		sf$.fillFromXML(resXML, found, "rpm");
	}
};

/**
 * JSONP pseudo error handler for saveUse
 */
sf$.saveUseTimeoutHandler = function(){
	// JSONP request took too long b/c a possible error occurred, submit the page
	sf$.fillScore("time out","","","");
	sf$.doSmartFormSubmit();
};

/**
 * If the form has not been saved, and at least one non-empty field, this saves the field.
 * Should be called from <body onbeforeunload="savePartialOnExit();">
 */
sf$.savePartialOnExit = function(){
	if (! sf$.formSaved &&
			((document.getElementById(sf$.firstNameFieldAlias) != null && document.getElementById(sf$.firstNameFieldAlias).value!="")
			|| (document.getElementById(sf$.lastNameFieldAlias) != null && document.getElementById(sf$.lastNameFieldAlias).value!="")
			|| (document.getElementById(sf$.emailFieldAlias) != null && document.getElementById(sf$.emailFieldAlias).value!="")
			|| (document.getElementById(sf$.addr1FieldAlias) != null && document.getElementById(sf$.addr1FieldAlias).value!="")
			|| (document.getElementById(sf$.addr2FieldAlias) != null && document.getElementById(sf$.addr2FieldAlias).value!="")
			|| (document.getElementById(sf$.cityFieldAlias) != null && document.getElementById(sf$.cityFieldAlias).value!="")
			|| (document.getElementById(sf$.stateFieldAlias) != null && document.getElementById(sf$.stateFieldAlias).value!="")
			|| (document.getElementById(sf$.zipFieldAlias) != null && document.getElementById(sf$.zipFieldAlias).value!="")
			|| (document.getElementById(sf$.companyNameFieldAlias) != null && document.getElementById(sf$.companyNameFieldAlias).value!="")
			|| (document.getElementById(sf$.countryFieldAlias) != null && document.getElementById(sf$.countryFieldAlias).value!="")
			|| (document.getElementById(sf$.phoneFieldAlias) != null && document.getElementById(sf$.phoneFieldAlias).value!=""))){
		sf$.savingOnExit=true;
		sf$.saveUse();
	}
};

/**
 * Submit the page.
 */
sf$.doSmartFormSubmit = function(){
    if (sf$.overrideSubmit) {
	    try {
	    	sf$.frmElt._submit();
	    } catch (err) {
	        // probably because runSFSetup() failed and form.submit() was not over written
	    	sf$.frmElt.submit();
	    }
	}
};

/**
 * Fills elements on the form with geo-IP inferred data.
 */
sf$.fillFromIPXML = function(inXML){
	if (inXML != null) {
	    var ipResXML=inXML.getElementsByTagName("ipinferred")[0];
	  	if(ipResXML != null){
	  		var elt,rfid="",city="",stateCode="",country="",areaCode="",latitude="",longitude="";
	  		if (ipResXML.getElementsByTagName("rfid")[0].firstChild != null)
	  			rfid=ipResXML.getElementsByTagName("rfid")[0].firstChild.data;
		  	if (ipResXML.getElementsByTagName("city")[0].firstChild != null)
  		  		city=sf$.xmlDecode(ipResXML.getElementsByTagName("city")[0].firstChild.data);
		  	if (ipResXML.getElementsByTagName("statecode")[0].firstChild != null)
		  		stateCode=sf$.xmlDecode(ipResXML.getElementsByTagName("statecode")[0].firstChild.data);
		  	if (ipResXML.getElementsByTagName("country")[0].firstChild != null)
		  		country=sf$.xmlDecode(ipResXML.getElementsByTagName("country")[0].firstChild.data);
		  	if (ipResXML.getElementsByTagName("areacode")[0].firstChild != null)
		  		areaCode=sf$.xmlDecode(ipResXML.getElementsByTagName("areacode")[0].firstChild.data);
		  	if (ipResXML.getElementsByTagName("latitude")[0].firstChild != null)
		  		latitude=sf$.xmlDecode(ipResXML.getElementsByTagName("latitude")[0].firstChild.data);
		  	if (ipResXML.getElementsByTagName("longitude")[0].firstChild != null)
		  		longitude=sf$.xmlDecode(ipResXML.getElementsByTagName("longitude")[0].firstChild.data);

		  	sf$.revIPCompID=rfid;
	  		sf$.revIPCty=city;
	  		sf$.revIPSt=stateCode;
	  		sf$.revIPCntry=country;
	  		sf$.revIPAreaCd=areaCode;
	  		sf$.revIPLat=latitude;
	  		sf$.revIPLong=longitude;

            elt=sf$.grabElementById(sf$.inferredCityFieldAlias);
	  		if (elt != null) elt.value=city;
	  		elt=sf$.grabElementById(sf$.inferredStateFieldAlias);
	  		if (elt != null) elt.value=stateCode;
	  		elt=sf$.grabElementById(sf$.inferredCountryFieldAlias);
	  		if (elt != null) elt.value=country;
	  		elt=sf$.grabElementById(sf$.inferredAreaCodeFieldAlias);
	  		if (elt != null) elt.value=areaCode;
	  	}
	}
};

/**
 * Fills elements on the form with tech inferred data.
 */
sf$.fillFromTechXML = function(inXML){
	if (inXML != null) {
		sf$.clearTech();

	    var elt,coInfXML=inXML.getElementsByTagName("coinferred")[0];
	  	if(coInfXML != null){
	  		if (coInfXML.getElementsByTagName("rqurl")!= null
						&& coInfXML.getElementsByTagName("rqurl")[0] != null
						&& coInfXML.getElementsByTagName("rqurl")[0].firstChild != null)
	  			sf$.rqurl=sf$.xmlDecode(coInfXML.getElementsByTagName("rqurl")[0].firstChild.data);

	  		elt=sf$.grabElementById(sf$.inferredEmployeesFieldAlias);
	  		if (elt != null && coInfXML.getElementsByTagName("emptotal")[0].firstChild != null)
	  			elt.value=sf$.xmlDecode(coInfXML.getElementsByTagName("emptotal")[0].firstChild.data);
	  		elt=sf$.grabElementById(sf$.inferredIndustryFieldAlias);
	  		if (elt != null && coInfXML.getElementsByTagName("industry")[0].firstChild != null)
	  			elt.value=sf$.xmlDecode(coInfXML.getElementsByTagName("industry")[0].firstChild.data);
	  		elt=sf$.grabElementById(sf$.inferredPublicFieldAlias);
	  		if (elt != null && coInfXML.getElementsByTagName("public")[0].firstChild != null)
	  			elt.value=sf$.xmlDecode(coInfXML.getElementsByTagName("public")[0].firstChild.data);
	  		elt=sf$.grabElementById(sf$.inferredRevenueFieldAlias);
	  		if (elt != null && coInfXML.getElementsByTagName("sales")[0].firstChild != null)
	  			elt.value=sf$.xmlDecode(coInfXML.getElementsByTagName("sales")[0].firstChild.data);
	  	}
	    var coTechXML=inXML.getElementsByTagName("cotech")[0];
	  	if(coTechXML != null){
	  		elt=sf$.grabElementById(sf$.techAdvertisementFieldAlias);
	  		if (elt != null && coTechXML.getElementsByTagName("tadvert")[0].firstChild != null)
	  			elt.value=sf$.xmlDecode(coTechXML.getElementsByTagName("tadvert")[0].firstChild.data);
	  		elt=sf$.grabElementById(sf$.techAnalyticsAndTrackingFieldAlias);
	  		if (elt != null && coTechXML.getElementsByTagName("tanalytics")[0].firstChild != null)
	  			elt.value=sf$.xmlDecode(coTechXML.getElementsByTagName("tanalytics")[0].firstChild.data);
	  		elt=sf$.grabElementById(sf$.techChatsFieldAlias);
	  		if (elt != null && coTechXML.getElementsByTagName("tchats")[0].firstChild != null)
	  			elt.value=sf$.xmlDecode(coTechXML.getElementsByTagName("tchats")[0].firstChild.data);
	  		elt=sf$.grabElementById(sf$.techCMSFieldAlias);
	  		if (elt != null && coTechXML.getElementsByTagName("tcms")[0].firstChild != null)
	  			elt.value=sf$.xmlDecode(coTechXML.getElementsByTagName("tcms")[0].firstChild.data);
	  		elt=sf$.grabElementById(sf$.techCommentsFieldAlias);
	  		if (elt != null && coTechXML.getElementsByTagName("tcomments")[0].firstChild != null)
	  			elt.value=sf$.xmlDecode(coTechXML.getElementsByTagName("tcomments")[0].firstChild.data);
	  		elt=sf$.grabElementById(sf$.techContentDeliveryNetworksFieldAlias);
	  		if (elt != null && coTechXML.getElementsByTagName("tcdn")[0].firstChild != null)
	  			elt.value=sf$.xmlDecode(coTechXML.getElementsByTagName("tcdn")[0].firstChild.data);
	  		elt=sf$.grabElementById(sf$.techDomainNameServicesFieldAlias);
	  		if (elt != null && coTechXML.getElementsByTagName("tdns")[0].firstChild != null)
	  			elt.value=sf$.xmlDecode(coTechXML.getElementsByTagName("tdns")[0].firstChild.data);
	  		elt=sf$.grabElementById(sf$.techECommerceFieldAlias);
	  		if (elt != null && coTechXML.getElementsByTagName("tecom")[0].firstChild != null)
	  			elt.value=sf$.xmlDecode(coTechXML.getElementsByTagName("tecom")[0].firstChild.data);
	  		elt=sf$.grabElementById(sf$.techEmailDeliverySpamProtectionFieldAlias);
	  		if (elt != null && coTechXML.getElementsByTagName("tespamprotect")[0].firstChild != null)
	  			elt.value=sf$.xmlDecode(coTechXML.getElementsByTagName("tespamprotect")[0].firstChild.data);
	  		elt=sf$.grabElementById(sf$.techEmailMarketingFieldAlias);
	  		if (elt != null && coTechXML.getElementsByTagName("temarketing")[0].firstChild != null)
	  			elt.value=sf$.xmlDecode(coTechXML.getElementsByTagName("temarketing")[0].firstChild.data);
	  		elt=sf$.grabElementById(sf$.techEmailProvidersFieldAlias);
	  		if (elt != null && coTechXML.getElementsByTagName("teproviders")[0].firstChild != null)
	  			elt.value=sf$.xmlDecode(coTechXML.getElementsByTagName("teproviders")[0].firstChild.data);
	  		elt=sf$.grabElementById(sf$.techFontsFieldAlias);
	  		if (elt != null && coTechXML.getElementsByTagName("tfonts")[0].firstChild != null)
	  			elt.value=sf$.xmlDecode(coTechXML.getElementsByTagName("tfonts")[0].firstChild.data);
	  		elt=sf$.grabElementById(sf$.techHostedFormsFieldAlias);
	  		if (elt != null && coTechXML.getElementsByTagName("tforms")[0].firstChild != null)
	  			elt.value=sf$.xmlDecode(coTechXML.getElementsByTagName("tforms")[0].firstChild.data);
	  		elt=sf$.grabElementById(sf$.techHostingFieldAlias);
	  		if (elt != null && coTechXML.getElementsByTagName("thosting")[0].firstChild != null)
	  			elt.value=sf$.xmlDecode(coTechXML.getElementsByTagName("thosting")[0].firstChild.data);
	  		elt=sf$.grabElementById(sf$.techLoadBalancersFieldAlias);
	  		if (elt != null && coTechXML.getElementsByTagName("tloadbal")[0].firstChild != null)
	  			elt.value=sf$.xmlDecode(coTechXML.getElementsByTagName("tloadbal")[0].firstChild.data);
	  		elt=sf$.grabElementById(sf$.techMarketingAutomationFieldAlias);
	  		if (elt != null && coTechXML.getElementsByTagName("tma")[0].firstChild != null)
	  			elt.value=sf$.xmlDecode(coTechXML.getElementsByTagName("tma")[0].firstChild.data);
	  		elt=sf$.grabElementById(sf$.techMediaFieldAlias);
	  		if (elt != null && coTechXML.getElementsByTagName("tmedia")[0].firstChild != null)
	  			elt.value=sf$.xmlDecode(coTechXML.getElementsByTagName("tmedia")[0].firstChild.data);
	  		elt=sf$.grabElementById(sf$.techPaymentsFieldAlias);
	  		if (elt != null && coTechXML.getElementsByTagName("tpay")[0].firstChild != null)
	  			elt.value=sf$.xmlDecode(coTechXML.getElementsByTagName("tpay")[0].firstChild.data);
	  		elt=sf$.grabElementById(sf$.techPersonalizationFieldAlias);
	  		if (elt != null && coTechXML.getElementsByTagName("tpersonal")[0].firstChild != null)
	  			elt.value=sf$.xmlDecode(coTechXML.getElementsByTagName("tpersonal")[0].firstChild.data);
	  		elt=sf$.grabElementById(sf$.techRecruitmentFieldAlias);
	  		if (elt != null && coTechXML.getElementsByTagName("trecruit")[0].firstChild != null)
	  			elt.value=sf$.xmlDecode(coTechXML.getElementsByTagName("trecruit")[0].firstChild.data);
	  		elt=sf$.grabElementById(sf$.techRestaurantReservationServicesFieldAlias);
	  		if (elt != null && coTechXML.getElementsByTagName("trestressers")[0].firstChild != null)
	  			elt.value=sf$.xmlDecode(coTechXML.getElementsByTagName("trestressers")[0].firstChild.data);
	  		elt=sf$.grabElementById(sf$.techSecurityFieldAlias);
	  		if (elt != null && coTechXML.getElementsByTagName("tsec")[0].firstChild != null)
	  			elt.value=sf$.xmlDecode(coTechXML.getElementsByTagName("tsec")[0].firstChild.data);
	  		elt=sf$.grabElementById(sf$.techSSLCertificatesFieldAlias);
	  		if (elt != null && coTechXML.getElementsByTagName("tsslcerts")[0].firstChild != null)
	  			elt.value=sf$.xmlDecode(coTechXML.getElementsByTagName("tsslcerts")[0].firstChild.data);
	  		elt=sf$.grabElementById(sf$.techSupportFieldAlias);
	  		if (elt != null && coTechXML.getElementsByTagName("tsupport")[0].firstChild != null)
	  			elt.value=sf$.xmlDecode(coTechXML.getElementsByTagName("tsupport")[0].firstChild.data);
	  		elt=sf$.grabElementById(sf$.techTagManagementFieldAlias);
	  		if (elt != null && coTechXML.getElementsByTagName("ttagmgt")[0].firstChild != null)
	  			elt.value=sf$.xmlDecode(coTechXML.getElementsByTagName("ttagmgt")[0].firstChild.data);
	  		elt=sf$.grabElementById(sf$.techWebAcceleratorsFieldAlias);
	  		if (elt != null && coTechXML.getElementsByTagName("twebaccel")[0].firstChild != null)
	  			elt.value=sf$.xmlDecode(coTechXML.getElementsByTagName("twebaccel")[0].firstChild.data);
	  		elt=sf$.grabElementById(sf$.techWebPerformanceMonitoringFieldAlias);
	  		if (elt != null && coTechXML.getElementsByTagName("twebperfmon")[0].firstChild != null)
	  			elt.value=sf$.xmlDecode(coTechXML.getElementsByTagName("twebperfmon")[0].firstChild.data);
	  		elt=sf$.grabElementById(sf$.techWidgetsFieldAlias);
	  		if (elt != null && coTechXML.getElementsByTagName("twidgets")[0].firstChild != null)
	  			elt.value=sf$.xmlDecode(coTechXML.getElementsByTagName("twidgets")[0].firstChild.data);
	  	}
	  	sf$.techFilled=true;
	}
};

/**
 * Fills elements on the form with selected or matched company information.
 */
sf$.fillFromXML = function(inXML, companyFound, src){
	var fromRPM=false;
	if (inXML != null)
	{
		sf$.clearHidden();

		if (inXML.getElementsByTagName("suid")[0].firstChild != null)
			sf$.fillSuid(inXML.getElementsByTagName("suid")[0].firstChild.data);

		if (src === "rpm" && inXML.getElementsByTagName("confidencelevel")[0].firstChild != null) {
			var confidenceLevel=inXML.getElementsByTagName("confidencelevel")[0].firstChild.data;
			var matchScore="",threshold="",engineType="";
			if (inXML.getElementsByTagName("matchscore")[0].firstChild != null)
  		  	    matchScore=inXML.getElementsByTagName("matchscore")[0].firstChild.data;
  		  	if (inXML.getElementsByTagName("threshold")[0].firstChild != null)
  		  	    threshold=inXML.getElementsByTagName("threshold")[0].firstChild.data;
  		    if (inXML.getElementsByTagName("enginetype")[0].firstChild != null)
  		    	engineType=inXML.getElementsByTagName("enginetype")[0].firstChild.data;
			sf$.fillScore(confidenceLevel,matchScore,threshold,engineType);
			fromRPM=true;
		} else {
			sf$.fillScore("user","","","");
		}

		if (companyFound == "true")
        {
			var name="",address1="",address2="",city="",state="",zip="",country="",phone="",
			    tradeStyleName="",stateCode="",countryCode="",empTotal="",empHere="",sales="",sic="",
			    sicName="",naics="",naicsName="",url="",locType="",subsidiary="",familyMems="",
	            g2k="",f500="",xid="",rfid="";
			var compResponseXML=inXML.getElementsByTagName("company")[0];
  		  	if(compResponseXML != null)
  		  	{
  		  		if (compResponseXML.getElementsByTagName("name")[0].firstChild != null)
  		  			name=sf$.xmlDecode(compResponseXML.getElementsByTagName("name")[0].firstChild.data);
  		  		if (compResponseXML.getElementsByTagName("streetAddress1")[0].firstChild != null)
  		  			address1=sf$.xmlDecode(compResponseXML.getElementsByTagName("streetAddress1")[0].firstChild.data);
  		  		if (compResponseXML.getElementsByTagName("streetAddress2")[0].firstChild != null)
  		  			address2=sf$.xmlDecode(compResponseXML.getElementsByTagName("streetAddress2")[0].firstChild.data);
  		  		if (compResponseXML.getElementsByTagName("city")[0].firstChild != null)
  		  			city=sf$.xmlDecode(compResponseXML.getElementsByTagName("city")[0].firstChild.data);
  		  		if (compResponseXML.getElementsByTagName("state")[0].firstChild != null)
  		  			state=sf$.xmlDecode(compResponseXML.getElementsByTagName("state")[0].firstChild.data);
  		  		if (compResponseXML.getElementsByTagName("zip")[0].firstChild != null)
  		  			zip=sf$.xmlDecode(compResponseXML.getElementsByTagName("zip")[0].firstChild.data);
  		  		if (compResponseXML.getElementsByTagName("country")[0].firstChild != null)
  		  			country=sf$.xmlDecode(compResponseXML.getElementsByTagName("country")[0].firstChild.data);
  		  		if (compResponseXML.getElementsByTagName("phone")[0].firstChild != null)
  		  			phone=compResponseXML.getElementsByTagName("phone")[0].firstChild.data;
  		  		if (compResponseXML.getElementsByTagName("tradestylename")[0].firstChild != null)
  		  			tradeStyleName=sf$.xmlDecode(compResponseXML.getElementsByTagName("tradestylename")[0].firstChild.data);
  		  		if (compResponseXML.getElementsByTagName("statecode")[0].firstChild != null)
  		  			stateCode=sf$.xmlDecode(compResponseXML.getElementsByTagName("statecode")[0].firstChild.data);
  		  		if (compResponseXML.getElementsByTagName("countrycode")[0].firstChild != null)
  		  			countryCode=sf$.xmlDecode(compResponseXML.getElementsByTagName("countrycode")[0].firstChild.data);
  		  		if (compResponseXML.getElementsByTagName("emptotal")[0].firstChild != null)
  		  			empTotal=sf$.xmlDecode(compResponseXML.getElementsByTagName("emptotal")[0].firstChild.data);
                if (compResponseXML.getElementsByTagName("emphere")[0].firstChild != null)
  		  			empHere=sf$.xmlDecode(compResponseXML.getElementsByTagName("emphere")[0].firstChild.data);
  		  		if (compResponseXML.getElementsByTagName("sales")[0].firstChild != null)
  		  			sales=sf$.xmlDecode(compResponseXML.getElementsByTagName("sales")[0].firstChild.data);
  		  		if (compResponseXML.getElementsByTagName("sic")[0].firstChild != null)
  		  			sic=sf$.xmlDecode(compResponseXML.getElementsByTagName("sic")[0].firstChild.data);
  		  		if (compResponseXML.getElementsByTagName("sicname")[0].firstChild != null)
  		  			sicName=sf$.xmlDecode(compResponseXML.getElementsByTagName("sicname")[0].firstChild.data);
  		  		if (compResponseXML.getElementsByTagName("naics")[0].firstChild != null)
  		  			naics=sf$.xmlDecode(compResponseXML.getElementsByTagName("naics")[0].firstChild.data);
  		  		if (compResponseXML.getElementsByTagName("naicsname")[0].firstChild != null)
  		  			naicsName=sf$.xmlDecode(compResponseXML.getElementsByTagName("naicsname")[0].firstChild.data);
  		  		if (compResponseXML.getElementsByTagName("url")[0].firstChild != null)
  		  			url=sf$.xmlDecode(compResponseXML.getElementsByTagName("url")[0].firstChild.data);
  		  		if (compResponseXML.getElementsByTagName("type")[0].firstChild != null)
  		  			locType=sf$.xmlDecode(compResponseXML.getElementsByTagName("type")[0].firstChild.data);
  		  		if (compResponseXML.getElementsByTagName("subsidiary")[0].firstChild != null)
  		  			subsidiary=sf$.xmlDecode(compResponseXML.getElementsByTagName("subsidiary")[0].firstChild.data);
  		  		if (compResponseXML.getElementsByTagName("familymembers")[0].firstChild != null)
  		  		    familyMems=sf$.xmlDecode(compResponseXML.getElementsByTagName("familymembers")[0].firstChild.data);
  		  	    if (compResponseXML.getElementsByTagName("g2k")[0].firstChild != null)
  		  	        g2k=sf$.xmlDecode(compResponseXML.getElementsByTagName("g2k")[0].firstChild.data);
  		        if (compResponseXML.getElementsByTagName("f500")[0].firstChild != null)
  		        	f500=sf$.xmlDecode(compResponseXML.getElementsByTagName("f500")[0].firstChild.data);
  		  	    if (compResponseXML.getElementsByTagName("xid")[0].firstChild != null)
  		  			xid=sf$.xmlDecode(compResponseXML.getElementsByTagName("xid")[0].firstChild.data);

  		  		if (compResponseXML.getElementsByTagName("rfid")[0].firstChild != null)
  		  			rfid=sf$.xmlDecode(compResponseXML.getElementsByTagName("rfid")[0].firstChild.data);
  		  		sf$.fillFields(name, address1, address2, city, state, zip, country, phone,
  		  				   tradeStyleName, stateCode, countryCode, empTotal, empHere, sales, sic,
  		  				   sicName, naics, naicsName, url, locType, subsidiary, familyMems,
  				           g2k, f500, xid, rfid, fromRPM);
  		  	}

			var hqCompResponseXML=inXML.getElementsByTagName("hqcompany")[0];
  		  	if(hqCompResponseXML != null){
  		  	    name="",address1="",address2="",city="",state="",zip="",country="",phone="",
			    tradeStyleName="",stateCode="",countryCode="",empTotal="",empHere="",sales="",sic="",
			    sicName="",naics="",naicsName="",url="",locType="",subsidiary="",familyMems="",
	            g2k="",f500="",xid="",rfid="";
  		  		if (hqCompResponseXML.getElementsByTagName("name")[0].firstChild != null)
  		  			name=sf$.xmlDecode(hqCompResponseXML.getElementsByTagName("name")[0].firstChild.data);
  		  		if (hqCompResponseXML.getElementsByTagName("streetAddress1")[0].firstChild != null)
  		  			address1=sf$.xmlDecode(hqCompResponseXML.getElementsByTagName("streetAddress1")[0].firstChild.data);
  		  		if (hqCompResponseXML.getElementsByTagName("streetAddress2")[0].firstChild != null)
  		  			address2=sf$.xmlDecode(hqCompResponseXML.getElementsByTagName("streetAddress2")[0].firstChild.data);
  		  		if (hqCompResponseXML.getElementsByTagName("city")[0].firstChild != null)
  		  			city=sf$.xmlDecode(hqCompResponseXML.getElementsByTagName("city")[0].firstChild.data);
  		  		if (hqCompResponseXML.getElementsByTagName("state")[0].firstChild != null)
  		  			state=sf$.xmlDecode(hqCompResponseXML.getElementsByTagName("state")[0].firstChild.data);
  		  		if (hqCompResponseXML.getElementsByTagName("zip")[0].firstChild != null)
  		  			zip=sf$.xmlDecode(hqCompResponseXML.getElementsByTagName("zip")[0].firstChild.data);
  		  		if (hqCompResponseXML.getElementsByTagName("country")[0].firstChild != null)
  		  			country=sf$.xmlDecode(hqCompResponseXML.getElementsByTagName("country")[0].firstChild.data);
  		  		if (hqCompResponseXML.getElementsByTagName("phone")[0].firstChild != null)
  		  			phone=hqCompResponseXML.getElementsByTagName("phone")[0].firstChild.data;
  		  		if (hqCompResponseXML.getElementsByTagName("tradestylename")[0].firstChild != null)
  		  			tradeStyleName=sf$.xmlDecode(hqCompResponseXML.getElementsByTagName("tradestylename")[0].firstChild.data);
  		  		if (hqCompResponseXML.getElementsByTagName("statecode")[0].firstChild != null)
  		  			stateCode=sf$.xmlDecode(hqCompResponseXML.getElementsByTagName("statecode")[0].firstChild.data);
  		  		if (hqCompResponseXML.getElementsByTagName("countrycode")[0].firstChild != null)
  		  			countryCode=sf$.xmlDecode(hqCompResponseXML.getElementsByTagName("countrycode")[0].firstChild.data);
  		  		if (hqCompResponseXML.getElementsByTagName("emptotal")[0].firstChild != null)
  		  			empTotal=sf$.xmlDecode(hqCompResponseXML.getElementsByTagName("emptotal")[0].firstChild.data);
                if (hqCompResponseXML.getElementsByTagName("emphere")[0].firstChild != null)
  		  			empHere=sf$.xmlDecode(hqCompResponseXML.getElementsByTagName("emphere")[0].firstChild.data);
  		  		if (hqCompResponseXML.getElementsByTagName("sales")[0].firstChild != null)
  		  			sales=sf$.xmlDecode(hqCompResponseXML.getElementsByTagName("sales")[0].firstChild.data);
  		  		if (hqCompResponseXML.getElementsByTagName("sic")[0].firstChild != null)
  		  			sic=sf$.xmlDecode(hqCompResponseXML.getElementsByTagName("sic")[0].firstChild.data);
  		  		if (hqCompResponseXML.getElementsByTagName("sicname")[0].firstChild != null)
  		  			sicName=sf$.xmlDecode(hqCompResponseXML.getElementsByTagName("sicname")[0].firstChild.data);
  		  		if (hqCompResponseXML.getElementsByTagName("naics")[0].firstChild != null)
  		  			naics=sf$.xmlDecode(hqCompResponseXML.getElementsByTagName("naics")[0].firstChild.data);
  		  		if (hqCompResponseXML.getElementsByTagName("naicsname")[0].firstChild != null)
  		  			naicsName=sf$.xmlDecode(hqCompResponseXML.getElementsByTagName("naicsname")[0].firstChild.data);
  		  		if (hqCompResponseXML.getElementsByTagName("url")[0].firstChild != null)
  		  			url=sf$.xmlDecode(hqCompResponseXML.getElementsByTagName("url")[0].firstChild.data);
  		  		if (hqCompResponseXML.getElementsByTagName("type")[0].firstChild != null)
  		  			locType=sf$.xmlDecode(hqCompResponseXML.getElementsByTagName("type")[0].firstChild.data);
  		  		if (hqCompResponseXML.getElementsByTagName("subsidiary")[0].firstChild != null)
  		  			subsidiary=sf$.xmlDecode(hqCompResponseXML.getElementsByTagName("subsidiary")[0].firstChild.data);
  		  		if (hqCompResponseXML.getElementsByTagName("familymembers")[0].firstChild != null)
  		  		    familyMems=sf$.xmlDecode(hqCompResponseXML.getElementsByTagName("familymembers")[0].firstChild.data);
  		  	    if (hqCompResponseXML.getElementsByTagName("g2k")[0].firstChild != null)
  		  	        g2k=sf$.xmlDecode(hqCompResponseXML.getElementsByTagName("g2k")[0].firstChild.data);
  		        if (hqCompResponseXML.getElementsByTagName("f500")[0].firstChild != null)
  		        	f500=sf$.xmlDecode(hqCompResponseXML.getElementsByTagName("f500")[0].firstChild.data);
  		  	    if (hqCompResponseXML.getElementsByTagName("xid")[0].firstChild != null)
  		  			xid=sf$.xmlDecode(hqCompResponseXML.getElementsByTagName("xid")[0].firstChild.data);
  		  		sf$.fillHQFields(name, address1, address2, city, state, zip, country, phone,
  		  				     tradeStyleName, stateCode, countryCode, empTotal, empHere, sales, sic,
  		  				     sicName, naics, naicsName, url, locType, subsidiary, familyMems,
    				         g2k, f500, xid);
  		  	}

			var dhqCompResponseXML=inXML.getElementsByTagName("dhqcompany")[0];
  		  	if(dhqCompResponseXML != null){
  		  	    name="",address1="",address2="",city="",state="",zip="",country="",phone="",
			    tradeStyleName="",stateCode="",countryCode="",empTotal="",empHere="",sales="",sic="",
			    sicName="",naics="",naicsName="",url="",locType="",subsidiary="",familyMems="",
	            g2k="",f500="",xid="",rfid="";
  		  		if (dhqCompResponseXML.getElementsByTagName("name")[0].firstChild != null)
  		  			name=sf$.xmlDecode(dhqCompResponseXML.getElementsByTagName("name")[0].firstChild.data);
  		  		if (dhqCompResponseXML.getElementsByTagName("streetAddress1")[0].firstChild != null)
  		  			address1=sf$.xmlDecode(dhqCompResponseXML.getElementsByTagName("streetAddress1")[0].firstChild.data);
  		  		if (dhqCompResponseXML.getElementsByTagName("streetAddress2")[0].firstChild != null)
  		  			address2=sf$.xmlDecode(dhqCompResponseXML.getElementsByTagName("streetAddress2")[0].firstChild.data);
  		  		if (dhqCompResponseXML.getElementsByTagName("city")[0].firstChild != null)
  		  			city=sf$.xmlDecode(dhqCompResponseXML.getElementsByTagName("city")[0].firstChild.data);
  		  		if (dhqCompResponseXML.getElementsByTagName("state")[0].firstChild != null)
  		  			state=sf$.xmlDecode(dhqCompResponseXML.getElementsByTagName("state")[0].firstChild.data);
  		  		if (dhqCompResponseXML.getElementsByTagName("zip")[0].firstChild != null)
  		  			zip=sf$.xmlDecode(dhqCompResponseXML.getElementsByTagName("zip")[0].firstChild.data);
  		  		if (dhqCompResponseXML.getElementsByTagName("country")[0].firstChild != null)
  		  			country=sf$.xmlDecode(dhqCompResponseXML.getElementsByTagName("country")[0].firstChild.data);
  		  		if (dhqCompResponseXML.getElementsByTagName("phone")[0].firstChild != null)
  		  			phone=dhqCompResponseXML.getElementsByTagName("phone")[0].firstChild.data;
  		  		if (dhqCompResponseXML.getElementsByTagName("tradestylename")[0].firstChild != null)
  		  			tradeStyleName=sf$.xmlDecode(dhqCompResponseXML.getElementsByTagName("tradestylename")[0].firstChild.data);
  		  		if (dhqCompResponseXML.getElementsByTagName("statecode")[0].firstChild != null)
  		  			stateCode=sf$.xmlDecode(dhqCompResponseXML.getElementsByTagName("statecode")[0].firstChild.data);
  		  		if (dhqCompResponseXML.getElementsByTagName("countrycode")[0].firstChild != null)
  		  			countryCode=sf$.xmlDecode(dhqCompResponseXML.getElementsByTagName("countrycode")[0].firstChild.data);
  		  		if (dhqCompResponseXML.getElementsByTagName("emptotal")[0].firstChild != null)
  		  			empTotal=sf$.xmlDecode(dhqCompResponseXML.getElementsByTagName("emptotal")[0].firstChild.data);
  		  		if (dhqCompResponseXML.getElementsByTagName("emphere")[0].firstChild != null)
  		  			empHere=sf$.xmlDecode(dhqCompResponseXML.getElementsByTagName("emphere")[0].firstChild.data);
  		  		if (dhqCompResponseXML.getElementsByTagName("sales")[0].firstChild != null)
  		  			sales=sf$.xmlDecode(dhqCompResponseXML.getElementsByTagName("sales")[0].firstChild.data);
  		  		if (dhqCompResponseXML.getElementsByTagName("sic")[0].firstChild != null)
  		  			sic=sf$.xmlDecode(dhqCompResponseXML.getElementsByTagName("sic")[0].firstChild.data);
  		  		if (dhqCompResponseXML.getElementsByTagName("sicname")[0].firstChild != null)
  		  			sicName=sf$.xmlDecode(dhqCompResponseXML.getElementsByTagName("sicname")[0].firstChild.data);
  		  		if (dhqCompResponseXML.getElementsByTagName("naics")[0].firstChild != null)
  		  			naics=sf$.xmlDecode(dhqCompResponseXML.getElementsByTagName("naics")[0].firstChild.data);
  		  		if (dhqCompResponseXML.getElementsByTagName("naicsname")[0].firstChild != null)
  		  			naicsName=sf$.xmlDecode(dhqCompResponseXML.getElementsByTagName("naicsname")[0].firstChild.data);
  		  		if (dhqCompResponseXML.getElementsByTagName("url")[0].firstChild != null)
  		  			url=sf$.xmlDecode(dhqCompResponseXML.getElementsByTagName("url")[0].firstChild.data);
  		  		if (dhqCompResponseXML.getElementsByTagName("type")[0].firstChild != null)
  		  			locType=sf$.xmlDecode(dhqCompResponseXML.getElementsByTagName("type")[0].firstChild.data);
  		  		if (dhqCompResponseXML.getElementsByTagName("subsidiary")[0].firstChild != null)
  		  			subsidiary=sf$.xmlDecode(dhqCompResponseXML.getElementsByTagName("subsidiary")[0].firstChild.data);
  		  		if (dhqCompResponseXML.getElementsByTagName("familymembers")[0].firstChild != null)
  		  		    familyMems=sf$.xmlDecode(dhqCompResponseXML.getElementsByTagName("familymembers")[0].firstChild.data);
  		  	    if (dhqCompResponseXML.getElementsByTagName("g2k")[0].firstChild != null)
  		  	        g2k=sf$.xmlDecode(dhqCompResponseXML.getElementsByTagName("g2k")[0].firstChild.data);
  		        if (dhqCompResponseXML.getElementsByTagName("f500")[0].firstChild != null)
  		        	f500=sf$.xmlDecode(dhqCompResponseXML.getElementsByTagName("f500")[0].firstChild.data);
  		  		if (dhqCompResponseXML.getElementsByTagName("xid")[0].firstChild != null)
  		  			xid=sf$.xmlDecode(dhqCompResponseXML.getElementsByTagName("xid")[0].firstChild.data);
  		  		sf$.fillDHQFields(name, address1, address2, city, state, zip, country, phone,
  		  				      tradeStyleName, stateCode, countryCode, empTotal, empHere, sales, sic,
  		  				      sicName, naics, naicsName, url, locType, subsidiary, familyMems,
  	  				          g2k, f500, xid);
  		  	}

			var ghqCompResponseXML=inXML.getElementsByTagName("ghqcompany")[0];
  		  	if(ghqCompResponseXML != null){
  		  	    name="",address1="",address2="",city="",state="",zip="",country="",phone="",
			    tradeStyleName="",stateCode="",countryCode="",empTotal="",empHere="",sales="",sic="",
			    sicName="",naics="",naicsName="",url="",locType="",subsidiary="",familyMems="",
	            g2k="",f500="",xid="",rfid="";
  		  		if (ghqCompResponseXML.getElementsByTagName("name")[0].firstChild != null)
  		  			name=sf$.xmlDecode(ghqCompResponseXML.getElementsByTagName("name")[0].firstChild.data);
  		  		if (ghqCompResponseXML.getElementsByTagName("streetAddress1")[0].firstChild != null)
  		  			address1=sf$.xmlDecode(ghqCompResponseXML.getElementsByTagName("streetAddress1")[0].firstChild.data);
  		  		if (ghqCompResponseXML.getElementsByTagName("streetAddress2")[0].firstChild != null)
  		  			address2=sf$.xmlDecode(ghqCompResponseXML.getElementsByTagName("streetAddress2")[0].firstChild.data);
  		  		if (ghqCompResponseXML.getElementsByTagName("city")[0].firstChild != null)
  		  			city=sf$.xmlDecode(ghqCompResponseXML.getElementsByTagName("city")[0].firstChild.data);
  		  		if (ghqCompResponseXML.getElementsByTagName("state")[0].firstChild != null)
  		  			state=sf$.xmlDecode(ghqCompResponseXML.getElementsByTagName("state")[0].firstChild.data);
  		  		if (ghqCompResponseXML.getElementsByTagName("zip")[0].firstChild != null)
  		  			zip=sf$.xmlDecode(ghqCompResponseXML.getElementsByTagName("zip")[0].firstChild.data);
  		  		if (ghqCompResponseXML.getElementsByTagName("country")[0].firstChild != null)
  		  			country=sf$.xmlDecode(ghqCompResponseXML.getElementsByTagName("country")[0].firstChild.data);
  		  		if (ghqCompResponseXML.getElementsByTagName("phone")[0].firstChild != null)
  		  			phone=ghqCompResponseXML.getElementsByTagName("phone")[0].firstChild.data;
  		  		if (ghqCompResponseXML.getElementsByTagName("tradestylename")[0].firstChild != null)
  		  			tradeStyleName=sf$.xmlDecode(ghqCompResponseXML.getElementsByTagName("tradestylename")[0].firstChild.data);
  		  		if (ghqCompResponseXML.getElementsByTagName("statecode")[0].firstChild != null)
  		  			stateCode=sf$.xmlDecode(ghqCompResponseXML.getElementsByTagName("statecode")[0].firstChild.data);
  		  		if (ghqCompResponseXML.getElementsByTagName("countrycode")[0].firstChild != null)
  		  			countryCode=sf$.xmlDecode(ghqCompResponseXML.getElementsByTagName("countrycode")[0].firstChild.data);
  		  		if (ghqCompResponseXML.getElementsByTagName("emptotal")[0].firstChild != null)
  		  			empTotal=sf$.xmlDecode(ghqCompResponseXML.getElementsByTagName("emptotal")[0].firstChild.data);
  		  		if (ghqCompResponseXML.getElementsByTagName("emphere")[0].firstChild != null)
  		  			empHere=sf$.xmlDecode(ghqCompResponseXML.getElementsByTagName("emphere")[0].firstChild.data);
  		  		if (ghqCompResponseXML.getElementsByTagName("sales")[0].firstChild != null)
  		  			sales=sf$.xmlDecode(ghqCompResponseXML.getElementsByTagName("sales")[0].firstChild.data);
  		  		if (ghqCompResponseXML.getElementsByTagName("sic")[0].firstChild != null)
  		  			sic=sf$.xmlDecode(ghqCompResponseXML.getElementsByTagName("sic")[0].firstChild.data);
  		  		if (ghqCompResponseXML.getElementsByTagName("sicname")[0].firstChild != null)
  		  			sicName=sf$.xmlDecode(ghqCompResponseXML.getElementsByTagName("sicname")[0].firstChild.data);
  		  		if (ghqCompResponseXML.getElementsByTagName("naics")[0].firstChild != null)
  		  			naics=sf$.xmlDecode(ghqCompResponseXML.getElementsByTagName("naics")[0].firstChild.data);
  		  		if (ghqCompResponseXML.getElementsByTagName("naicsname")[0].firstChild != null)
  		  			naicsName=sf$.xmlDecode(ghqCompResponseXML.getElementsByTagName("naicsname")[0].firstChild.data);
  		  		if (ghqCompResponseXML.getElementsByTagName("url")[0].firstChild != null)
  		  			url=sf$.xmlDecode(ghqCompResponseXML.getElementsByTagName("url")[0].firstChild.data);
  		  		if (ghqCompResponseXML.getElementsByTagName("type")[0].firstChild != null)
  		  			locType=sf$.xmlDecode(ghqCompResponseXML.getElementsByTagName("type")[0].firstChild.data);
  		  		if (ghqCompResponseXML.getElementsByTagName("subsidiary")[0].firstChild != null)
  		  			subsidiary=sf$.xmlDecode(ghqCompResponseXML.getElementsByTagName("subsidiary")[0].firstChild.data);
 		  		if (ghqCompResponseXML.getElementsByTagName("familymembers")[0].firstChild != null)
  		  		    familyMems=sf$.xmlDecode(ghqCompResponseXML.getElementsByTagName("familymembers")[0].firstChild.data);
  		  	    if (ghqCompResponseXML.getElementsByTagName("g2k")[0].firstChild != null)
  		  	        g2k=sf$.xmlDecode(ghqCompResponseXML.getElementsByTagName("g2k")[0].firstChild.data);
  		        if (ghqCompResponseXML.getElementsByTagName("f500")[0].firstChild != null)
  		        	f500=sf$.xmlDecode(ghqCompResponseXML.getElementsByTagName("f500")[0].firstChild.data);
  		  		if (ghqCompResponseXML.getElementsByTagName("xid")[0].firstChild != null)
  		  			xid=sf$.xmlDecode(ghqCompResponseXML.getElementsByTagName("xid")[0].firstChild.data);
  		  		sf$.fillGHQFields(name, address1, address2, city, state, zip, country, phone,
  		  				      tradeStyleName, stateCode, countryCode, empTotal, empHere, sales, sic,
  		  				      sicName, naics, naicsName, url, locType, subsidiary, familyMems,
  	  				          g2k, f500, xid);
  		  	}
        }
	}
};

sf$.fillSuid = function(suidVal){
	if (suidVal != null && suidVal.length > 1)
		sf$.sessionID=suidVal;
};

sf$.fillScore = function(confidenceLevelVal, matchScoreVal, thresholdScoreVal, engineTypeVal){
    var elt,confidenceDescVal="";
    elt=sf$.grabElementById(sf$.companyNameFieldAlias);
    if (elt != null && sf$.junkNameDetected)
    	confidenceDescVal="suspect company name";
    elt=sf$.grabElementById(sf$.emailFieldAlias);
    if (elt != null && sf$.junkEmailDetected && sf$.canRun) {
    	if (confidenceDescVal != "") {
    		confidenceDescVal=confidenceDescVal+", ";
    		confidenceLevelVal="suspect data detected";
    	}
    	confidenceDescVal=confidenceDescVal+"suspect email";
    }
    elt=sf$.grabElementById(sf$.confidenceDescFieldAlias);
    if (elt != null) elt.value=confidenceDescVal;

    elt=sf$.grabElementById(sf$.confidenceLevelFieldAlias);
	if (elt != null && confidenceLevelVal != "") elt.value=confidenceLevelVal;
	elt=sf$.grabElementById(sf$.matchScoreFieldAlias);
	if (elt != null && matchScoreVal != "") elt.value=matchScoreVal;
	elt=sf$.grabElementById(sf$.thresholdScoreFieldAlias);
	if (elt != null && thresholdScoreVal != "") elt.value=thresholdScoreVal;
	elt=sf$.grabElementById(sf$.rpmEngFieldAlias);
	if (elt != null && engineTypeVal != "") elt.value=engineTypeVal;
};

/**
 * Recieves data from a response handler and uses it to fill the appropriate fields in the form.
 */
sf$.fillFields = function(name, address1, address2, city, state, zip, country, phone,
		            tradeStyleName, stateCode, countryCode, empTotal, empHere, sales, sicVal,
		            sicNameVal, naicsVal, naicsNameVal, urlVal, locType, subsidiary, familyMems,
		            g2k, f500, xid, rfidVal, fromRPM){
    sf$.callIndex=0;
    var elt;
	if (undefined != name && name != null){
		// overwrite user fields if using drop-down method and data is not from RPM
		if ((sf$.fillByIP || sf$.deployDropDownFlag) && !fromRPM) {
		    elt=sf$.grabElementById(sf$.companyNameFieldAlias);
		    if (elt != null) elt.value=name;
			elt=sf$.grabElementById(sf$.addr1FieldAlias);
			if (elt != null) elt.value=address1;
			elt=sf$.grabElementById(sf$.addr2FieldAlias);
			if (elt != null) elt.value=address2;
			elt=sf$.grabElementById(sf$.cityFieldAlias);
			if (elt != null) elt.value=city;
			elt=sf$.grabElementById(sf$.stateFieldAlias);
			if (elt != null) elt.value=sf$.translateStateNm(state,sf$.stateFieldAlias);
			elt=sf$.grabElementById(sf$.zipFieldAlias);
			if (elt != null){
				if (zip.length == 9)
					zip=zip.substring(0,5)+"-"+zip.substring(5);
				elt.value=zip;
			}
			elt=sf$.grabElementById(sf$.countryFieldAlias);
			if (elt != null) elt.value=sf$.translateCountryNm(country,sf$.countryFieldAlias);
			elt=sf$.grabElementById(sf$.phoneFieldAlias);
			if (elt != null && sf$.phoneAutoFillFlag) elt.value=phone;
		}
		if (rfidVal != null && rfidVal.length > 1)
			sf$.compID=rfidVal;

		sf$.frmChanged=false;

		//rank "m"atched
		elt=sf$.grabElementById(sf$.mCompanyNameFieldAlias);
		if (elt != null) elt.value=name;
		elt=sf$.grabElementById(sf$.mAddr1FieldAlias);
		if (elt != null) elt.value=address1;
		elt=sf$.grabElementById(sf$.mAddr2FieldAlias);
		if (elt != null) elt.value=address2;
		elt=sf$.grabElementById(sf$.mCityFieldAlias);
		if (elt != null) elt.value=city;
		elt=sf$.grabElementById(sf$.mStateFieldAlias);
		if (elt != null) elt.value=sf$.translateStateNm(state,sf$.mStateFieldAlias);
		elt=sf$.grabElementById(sf$.mZipFieldAlias);
		if (elt != null){
			if (zip.length == 9)
				zip=zip.substring(0,5)+"-"+zip.substring(5);
			elt.value=zip;
		}
		elt=sf$.grabElementById(sf$.mCountryFieldAlias);
		if (elt != null) elt.value=sf$.translateCountryNm(country,sf$.mCountryFieldAlias);
		elt=sf$.grabElementById(sf$.mPhoneFieldAlias);
		if (elt != null) elt.value=phone;
		elt=sf$.grabElementById(sf$.mTradeNameFieldAlias);
		if (elt != null) elt.value=tradeStyleName;
		elt=sf$.grabElementById(sf$.mStateCodeFieldAlias);
		if (elt != null) elt.value=sf$.translateStateCd(stateCode,sf$.mStateCodeFieldAlias);
		elt=sf$.grabElementById(sf$.mCountryCodeFieldAlias);
		if (elt != null) elt.value=sf$.translateCountryCd(countryCode,sf$.mCountryCodeFieldAlias);
		elt=sf$.grabElementById(sf$.mEmplyeeCountFieldAlias);
		if (elt != null) elt.value=sf$.translateEmployeeCnt(empTotal,sf$.mEmplyeeCountFieldAlias);
		elt=sf$.grabElementById(sf$.mEmplyeeHereFieldAlias);
		if (elt != null) elt.value=sf$.translateEmployeeCnt(empHere,sf$.mEmplyeeHereFieldAlias);
		elt=sf$.grabElementById(sf$.mAnnualRevFieldAlias);
		if (elt != null) elt.value=sf$.translateAnnualRev(sales,sf$.mAnnualRevFieldAlias);
		elt=sf$.grabElementById(sf$.mSicFieldAlias);
		if (elt != null) elt.value=sf$.translateSic(sicVal,sf$.mSicFieldAlias);
		elt=sf$.grabElementById(sf$.mSicNameFieldAlias);
		if (elt != null) elt.value=sicNameVal;
		elt=sf$.grabElementById(sf$.mAltSicFieldAlias);
		if (elt != null) elt.value=sf$.translateAltSic(sicVal,sf$.mAltSicFieldAlias);
		elt=sf$.grabElementById(sf$.mNaicsFieldAlias);
		if (elt != null) elt.value=sf$.translateNaics(naicsVal,sf$.mNaicsFieldAlias);
		elt=sf$.grabElementById(sf$.mNaicsNameFieldAlias);
		if (elt != null) elt.value=naicsNameVal;
		elt=sf$.grabElementById(sf$.mAltNaicsFieldAlias);
        if (elt != null) elt.value=sf$.translateAltNaics(naicsVal,sf$.mAltNaicsFieldAlias);
		elt=sf$.grabElementById(sf$.mUrlFieldAlias);
		if (elt != null) elt.value=urlVal;
		elt=sf$.grabElementById(sf$.mLocationTypeFieldAlias);
		if (elt != null) elt.value=locType;
		elt=sf$.grabElementById(sf$.mSubsidiaryFieldAlias);
		if (elt != null) elt.value=subsidiary;
		elt=sf$.grabElementById(sf$.mFamilyMemsFieldAlias);
		if (elt != null) elt.value=familyMems;
		elt=sf$.grabElementById(sf$.mGlobal2KFieldAlias);
		if (elt != null) elt.value=g2k;
		elt=sf$.grabElementById(sf$.mFortune500FieldAlias);
		if (elt != null) elt.value=f500;
		elt=sf$.grabElementById(sf$.mCompXIDFieldAlias);
		if (elt != null) elt.value=xid;
	}
};

sf$.fillHQFields = function(name, address1, address2, city, state, zip, country, phone,
                      tradeStyleName, stateCode, countryCode, empTotal, empHere, sales, sicVal,
                      sicNameVal, naicsVal, naicsNameVal, urlVal, locType, subsidiary, familyMems,
  		              g2k, f500, xid){
    var elt;
	if (undefined != name && name != null){
		//rank "hq"
		elt=sf$.grabElementById(sf$.hqCompanyNameFieldAlias);
		if (elt != null) elt.value=name;
		elt=sf$.grabElementById(sf$.hqAddr1FieldAlias);
		if (elt != null) elt.value=address1;
		elt=sf$.grabElementById(sf$.hqAddr2FieldAlias);
		if (elt != null) elt.value=address2;
		elt=sf$.grabElementById(sf$.hqCityFieldAlias);
		if (elt != null) elt.value=city;
		elt=sf$.grabElementById(sf$.hqStateFieldAlias);
		if (elt != null) elt.value=sf$.translateStateNm(state,sf$.hqStateFieldAlias);
		elt=sf$.grabElementById(sf$.hqZipFieldAlias);
		if (elt != null){
			if (zip.length == 9)
				zip=zip.substring(0,5)+"-"+zip.substring(5);
			elt.value=zip;
		}
		elt=sf$.grabElementById(sf$.hqCountryFieldAlias);
		if (elt != null) elt.value=sf$.translateCountryNm(country,sf$.hqCountryFieldAlias);
		elt=sf$.grabElementById(sf$.hqPhoneFieldAlias);
		if (elt != null) elt.value=phone;
		elt=sf$.grabElementById(sf$.hqTradeNameFieldAlias);
		if (elt != null) elt.value=tradeStyleName;
		elt=sf$.grabElementById(sf$.hqStateCodeFieldAlias);
		if (elt != null) elt.value=sf$.translateStateCd(stateCode,sf$.hqStateCodeFieldAlias);
		elt=sf$.grabElementById(sf$.hqCountryCodeFieldAlias);
		if (elt != null) elt.value=sf$.translateCountryCd(countryCode,sf$.hqCountryCodeFieldAlias);
		elt=sf$.grabElementById(sf$.hqEmplyeeCountFieldAlias);
		if (elt != null) elt.value=sf$.translateEmployeeCnt(empTotal,sf$.hqEmplyeeCountFieldAlias);
		elt=sf$.grabElementById(sf$.hqEmplyeeHereFieldAlias);
        if (elt != null) elt.value=sf$.translateEmployeeCnt(empHere,sf$.hqEmplyeeHereFieldAlias);
		elt=sf$.grabElementById(sf$.hqAnnualRevFieldAlias);
		if (elt != null) elt.value=sf$.translateAnnualRev(sales,sf$.hqAnnualRevFieldAlias);
		elt=sf$.grabElementById(sf$.hqSicFieldAlias);
		if (elt != null) elt.value=sf$.translateSic(sicVal,sf$.hqSicFieldAlias);
		elt=sf$.grabElementById(sf$.hqSicNameFieldAlias);
		if (elt != null) elt.value=sicNameVal;
		elt=sf$.grabElementById(sf$.hqAltSicFieldAlias);
		if (elt != null) elt.value=sf$.translateAltSic(sicVal,sf$.hqAltSicFieldAlias);
		elt=sf$.grabElementById(sf$.hqNaicsFieldAlias);
		if (elt != null) elt.value=sf$.translateNaics(naicsVal,sf$.hqNaicsFieldAlias);
		elt=sf$.grabElementById(sf$.hqNaicsNameFieldAlias);
		if (elt != null) elt.value=naicsNameVal;
		elt=sf$.grabElementById(sf$.hqAltNaicsFieldAlias);
        if (elt != null) elt.value=sf$.translateAltNaics(naicsVal,sf$.hqAltNaicsFieldAlias);
		elt=sf$.grabElementById(sf$.hqUrlFieldAlias);
		if (elt != null) elt.value=urlVal;
		elt=sf$.grabElementById(sf$.hqLocationTypeFieldAlias);
		if (elt != null) elt.value=locType;
		elt=sf$.grabElementById(sf$.hqSubsidiaryFieldAlias);
		if (elt != null) elt.value=subsidiary;
		elt=sf$.grabElementById(sf$.hqFamilyMemsFieldAlias);
		if (elt != null) elt.value=familyMems;
		elt=sf$.grabElementById(sf$.hqGlobal2KFieldAlias);
		if (elt != null) elt.value=g2k;
		elt=sf$.grabElementById(sf$.hqFortune500FieldAlias);
		if (elt != null) elt.value=f500;
		elt=sf$.grabElementById(sf$.hqCompXIDFieldAlias);
		if (elt != null) elt.value=xid;
	}
};

sf$.fillDHQFields = function(name, address1, address2, city, state, zip, country, phone,
        			   tradeStyleName, stateCode, countryCode, empTotal, empHere, sales, sicVal,
        			   sicNameVal, naicsVal, naicsNameVal, urlVal, locType, subsidiary, familyMems,
   		               g2k, f500, xid){
    var elt;
	if (undefined != name && name != null){
		//rank "dhq"
		elt=sf$.grabElementById(sf$.dhqCompanyNameFieldAlias);
		if (elt != null) elt.value=name;
		elt=sf$.grabElementById(sf$.dhqAddr1FieldAlias);
		if (elt != null) elt.value=address1;
		elt=sf$.grabElementById(sf$.dhqAddr2FieldAlias);
		if (elt != null) elt.value=address2;
		elt=sf$.grabElementById(sf$.dhqCityFieldAlias);
		if (elt != null) elt.value=city;
		elt=sf$.grabElementById(sf$.dhqStateFieldAlias);
		if (elt != null) elt.value=sf$.translateStateNm(state,sf$.dhqStateFieldAlias);
		elt=sf$.grabElementById(sf$.dhqZipFieldAlias);
		if (elt != null){
			if (zip.length == 9)
				zip=zip.substring(0,5)+"-"+zip.substring(5);
			elt.value=zip;
		}
		elt=sf$.grabElementById(sf$.dhqCountryFieldAlias);
		if (elt != null) elt.value=sf$.translateCountryNm(country,sf$.dhqCountryFieldAlias);
		elt=sf$.grabElementById(sf$.dhqPhoneFieldAlias);
		if (elt != null) elt.value=phone;
		elt=sf$.grabElementById(sf$.dhqTradeNameFieldAlias);
		if (elt != null) elt.value=tradeStyleName;
		elt=sf$.grabElementById(sf$.dhqStateCodeFieldAlias);
		if (elt != null) elt.value=sf$.translateStateCd(stateCode,sf$.dhqStateCodeFieldAlias);
		elt=sf$.grabElementById(sf$.dhqCountryCodeFieldAlias);
		if (elt != null) elt.value=sf$.translateCountryCd(countryCode,sf$.dhqCountryCodeFieldAlias);
		elt=sf$.grabElementById(sf$.dhqEmplyeeCountFieldAlias);
		if (elt != null) elt.value=sf$.translateEmployeeCnt(empTotal,sf$.dhqEmplyeeCountFieldAlias);
		elt=sf$.grabElementById(sf$.dhqEmplyeeHereFieldAlias);
		if (elt != null) elt.value=sf$.translateEmployeeCnt(empHere,sf$.dhqEmplyeeHereFieldAlias);
		elt=sf$.grabElementById(sf$.dhqAnnualRevFieldAlias);
		if (elt != null) elt.value=sf$.translateAnnualRev(sales,sf$.dhqAnnualRevFieldAlias);
		elt=sf$.grabElementById(sf$.dhqSicFieldAlias);
		if (elt != null) elt.value=sf$.translateSic(sicVal,sf$.dhqSicFieldAlias);
		elt=sf$.grabElementById(sf$.dhqSicNameFieldAlias);
		if (elt != null) elt.value=sicNameVal;
		elt=sf$.grabElementById(sf$.dhqAltSicFieldAlias);
		if (elt != null) elt.value=sf$.translateAltSic(sicVal,sf$.dhqAltSicFieldAlias);
		elt=sf$.grabElementById(sf$.dhqNaicsFieldAlias);
		if (elt != null) elt.value=sf$.translateNaics(naicsVal,sf$.dhqNaicsFieldAlias);
		elt=sf$.grabElementById(sf$.dhqNaicsNameFieldAlias);
		if (elt != null) elt.value=naicsNameVal;
		elt=sf$.grabElementById(sf$.dhqAltNaicsFieldAlias);
        if (elt != null) elt.value=sf$.translateAltNaics(naicsVal,sf$.dhqAltNaicsFieldAlias);
		elt=sf$.grabElementById(sf$.dhqUrlFieldAlias);
		if (elt != null) elt.value=urlVal;
		elt=sf$.grabElementById(sf$.dhqLocationTypeFieldAlias);
		if (elt != null) elt.value=locType;
		elt=sf$.grabElementById(sf$.dhqSubsidiaryFieldAlias);
		if (elt != null) elt.value=subsidiary;
		elt=sf$.grabElementById(sf$.dhqFamilyMemsFieldAlias);
		if (elt != null) elt.value=familyMems;
		elt=sf$.grabElementById(sf$.dhqGlobal2KFieldAlias);
		if (elt != null) elt.value=g2k;
		elt=sf$.grabElementById(sf$.dhqFortune500FieldAlias);
		if (elt != null) elt.value=f500;
		elt=sf$.grabElementById(sf$.dhqCompXIDFieldAlias);
		if (elt != null) elt.value=xid;
	}
};

sf$.fillGHQFields = function(name, address1, address2, city, state, zip, country, phone,
		   			   tradeStyleName, stateCode, countryCode, empTotal, empHere, sales, sicVal,
		   			   sicNameVal, naicsVal, naicsNameVal, urlVal, locType, subsidiary, familyMems,
			           g2k, f500, xid){
	var elt;
	if (undefined != name && name != null){
		//rank "ghq"
		elt=sf$.grabElementById(sf$.ghqCompanyNameFieldAlias);
		if (elt != null) elt.value=name;
		elt=sf$.grabElementById(sf$.ghqAddr1FieldAlias);
		if (elt != null) elt.value=address1;
		elt=sf$.grabElementById(sf$.ghqAddr2FieldAlias);
		if (elt != null) elt.value=address2;
		elt=sf$.grabElementById(sf$.ghqCityFieldAlias);
		if (elt != null) elt.value=city;
		elt=sf$.grabElementById(sf$.ghqStateFieldAlias);
		if (elt != null) elt.value=sf$.translateStateNm(state,sf$.ghqStateFieldAlias);
		elt=sf$.grabElementById(sf$.ghqZipFieldAlias);
		if (elt != null){
			if (zip.length == 9)
				zip=zip.substring(0,5)+"-"+zip.substring(5);
			elt.value=zip;
		}
		elt=sf$.grabElementById(sf$.ghqCountryFieldAlias);
		if (elt != null) elt.value=sf$.translateCountryNm(country,sf$.ghqCountryFieldAlias);
		elt=sf$.grabElementById(sf$.ghqPhoneFieldAlias);
		if (elt != null) elt.value=phone;
		elt=sf$.grabElementById(sf$.ghqTradeNameFieldAlias);
		if (elt != null) elt.value=tradeStyleName;
		elt=sf$.grabElementById(sf$.ghqStateCodeFieldAlias);
		if (elt != null) elt.value=sf$.translateStateCd(stateCode,sf$.ghqStateCodeFieldAlias);
		elt=sf$.grabElementById(sf$.ghqCountryCodeFieldAlias);
		if (elt != null) elt.value=sf$.translateCountryCd(countryCode,sf$.ghqCountryCodeFieldAlias);
		elt=sf$.grabElementById(sf$.ghqEmplyeeCountFieldAlias);
		if (elt != null) elt.value=sf$.translateEmployeeCnt(empTotal,sf$.ghqEmplyeeCountFieldAlias);
		elt=sf$.grabElementById(sf$.ghqEmplyeeHereFieldAlias);
		if (elt != null) elt.value=sf$.translateEmployeeCnt(empHere,sf$.ghqEmplyeeHereFieldAlias);
		elt=sf$.grabElementById(sf$.ghqAnnualRevFieldAlias);
		if (elt != null) elt.value=sf$.translateAnnualRev(sales,sf$.ghqAnnualRevFieldAlias);
		elt=sf$.grabElementById(sf$.ghqSicFieldAlias);
		if (elt != null) elt.value=sf$.translateSic(sicVal,sf$.ghqSicFieldAlias);
		elt=sf$.grabElementById(sf$.ghqSicNameFieldAlias);
		if (elt != null) elt.value=sicNameVal;
		elt=sf$.grabElementById(sf$.ghqAltSicFieldAlias);
		if (elt != null) elt.value=sf$.translateAltSic(sicVal,sf$.ghqAltSicFieldAlias);
		elt=sf$.grabElementById(sf$.ghqNaicsFieldAlias);
		if (elt != null) elt.value=sf$.translateNaics(naicsVal,sf$.ghqNaicsFieldAlias);
		elt=sf$.grabElementById(sf$.ghqNaicsNameFieldAlias);
		if (elt != null) elt.value=naicsNameVal;
        elt=sf$.grabElementById(sf$.ghqAltNaicsFieldAlias);
        if (elt != null) elt.value=sf$.translateAltNaics(naicsVal,sf$.ghqAltNaicsFieldAlias);
		elt=sf$.grabElementById(sf$.ghqUrlFieldAlias);
		if (elt != null) elt.value=urlVal;
		elt=sf$.grabElementById(sf$.ghqLocationTypeFieldAlias);
		if (elt != null) elt.value=locType;
		elt=sf$.grabElementById(sf$.ghqSubsidiaryFieldAlias);
		if (elt != null) elt.value=subsidiary;
		elt=sf$.grabElementById(sf$.ghqFamilyMemsFieldAlias);
		if (elt != null) elt.value=familyMems;
		elt=sf$.grabElementById(sf$.ghqGlobal2KFieldAlias);
		if (elt != null) elt.value=g2k;
		elt=sf$.grabElementById(sf$.ghqFortune500FieldAlias);
		if (elt != null) elt.value=f500;
		elt=sf$.grabElementById(sf$.ghqCompXIDFieldAlias);
		if (elt != null) elt.value=xid;
	}
};

/**
 * Grabs the element by ID as long as ID is not undefined
 */
sf$.grabElementById = function(fieldID){
    if (undefined != fieldID && document.getElementById(fieldID) != null)
        return document.getElementById(fieldID);
    else
        return null;
};

/**
 * Flags a company name as junk if it matches a predefined junk name within sf$.junkNames[].
 */
sf$.isJunkName = function(name){
	sf$.junkNameDetected=false;
    name = name.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()|]/g, "").replace(/\s{2,}/g, " ").toLowerCase();
    if (name != null && name.length > 1) {
        for (var i=0; i < sf$.junkNames.length; i++) {
            try {
                var regX = sf$.junkNames[i].replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()|]/g, "").replace(/\s{2,}/g, " ").toLowerCase();
            	if (regX === name) {
            		sf$.junkNameDetected=true;
                    break;
                }
            } catch (e) {
            	sf$.junkNameDetected=false;
            }
        } // end loop
    } else {
    	sf$.junkNameDetected=true;
    }

    if (sf$.junkNameDetected && sf$.junkEmailDetected) {
    	sf$.dataChanged();
        sf$.latestSearchResultsNames=null;
        sf$.lastSearch="";
	    sf$.clearDropdown();
    } else {
    	sf$.fillScore("user","","","");
    }
    return sf$.junkNameDetected;
};

/**
 * Grabs the value or text of a select or input element.
 */
sf$.getInputData = function(elmID,useText){
	var e=sfjq$("#"+elmID),d="";
	if (e.length) {
		if (e.is("select")) {
		    if (useText)
			    d=e.find("option:selected").text();
		    else
			    d=e.find("option:selected").val();
		} else {
			d=e.val();
		}
	}
	return (d != undefined) ? d : "";
};

/**
 * Takes a string (XML document) and converts it to a XML documen
 */
sf$.stringToXML = function(xmlString){
    var xmlDoc;
    if (window.DOMParser) {
    	xmlDoc = (new window.DOMParser()).parseFromString(xmlString, "text/xml");
    } else if (typeof window.ActiveXObject != "undefined" && new window.ActiveXObject("Microsoft.XMLDOM")) {
        xmlDoc = new window.ActiveXObject("Microsoft.XMLDOM");
        xmlDoc.async = "false";
        xmlDoc.loadXML(xmlString);
    }
    return xmlDoc;
};

/**
 * Decode special XML chars
 */
sf$.xmlDecode = function(xmlString){
    if(xmlString != null) {
	    xmlString = xmlString.replace(/&amp;/g, "&").replace(/&quot;/g, "\"").replace(/&apos;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
    }
    return xmlString;
};

/**
 * Present the select list display.
 */
sf$.showDisplay = function(param){
	if (param == 1) {
		sf$.fieldFocus=true;
	} else if (param == 2) {
		sf$.mouseOver=true;
	} else if (param == 0) {
		sf$.fieldFocus=true;
		sf$.mouseOver=true;
	}
	if ((sf$.fieldFocus || sf$.mouseOver || sf$.dataSubmitInProcess) && sf$.dropFilled){
		sf$.positionSelectListDiv();
	    sfjq$("#"+sf$.selectListDivID).css("visibility", "visible");
	    if (undefined != sf$.selectListDivFade && (sf$.selectListDivFade === "fast" || sf$.selectListDivFade === "slow")) {
	        sfjq$("#"+sf$.selectListDivID).fadeIn(sf$.selectListDivFade, "linear");
	    } else {
		    sfjq$("#"+sf$.selectListDivID).show();
    	}
	}
};

/**
 * Hide the select list display.
 */
sf$.hideDisplay = function(param){
	if (sf$.doCompanySelectFlag && sf$.canRun) {
    	if (param == 1) {
	    	sf$.fieldFocus=false;
    	} else if (param == 2) {
	    	sf$.mouseOver=false;
	    } else if (param == 0) {
		    sf$.fieldFocus=false;
		    sf$.mouseOver=false;
		    sf$.clearDropdown();
	    }
	    if ((!sf$.fieldFocus && !sf$.mouseOver && sf$.allowDropDownHide) || param == -1 || !sf$.dropFilled){
    	    if (undefined != sf$.selectListDivFade && (sf$.selectListDivFade === "fast" || sf$.selectListDivFade === "slow")) {
    	        sfjq$("#"+sf$.selectListDivID).fadeOut(sf$.selectListDivFade, "linear");
    	    } else {
    	        sfjq$("#"+sf$.selectListDivID).hide();
    	    }
    	    sfjq$("#"+sf$.selectListDivID).css("visibility", "hidden");
	    }
	}
};

/**
 * Remove stale contents form the select list display.
 */
sf$.clearDropdown = function(){
	var elt=sf$.grabElementById(sf$.selectListDivID);
	if (elt != null) elt.innerHTML="<table></table>";
	sf$.dropFilled=false;
};

/**
 * Called by the onchange events of the company data fields to detect user entered data.
 */
sf$.dataChanged = function(){
	sf$.clearHidden();
	sf$.frmChanged=true;
	var clvl="";
	if (!sf$.junkNameDetected) clvl="user";
	sf$.fillScore(clvl,"","","");
};

/**
 * Remove the contents of the hidden append fields.
 */
sf$.clearHidden = function(){
    var doClear = function(elt){if (elt != null && elt.type == "hidden") elt.value="";};
    doClear(sf$.grabElementById(sf$.addr1FieldAlias));
	doClear(sf$.grabElementById(sf$.addr2FieldAlias));
	doClear(sf$.grabElementById(sf$.cityFieldAlias));
	doClear(sf$.grabElementById(sf$.stateFieldAlias));
	doClear(sf$.grabElementById(sf$.zipFieldAlias));
	doClear(sf$.grabElementById(sf$.countryFieldAlias));
	doClear(sf$.grabElementById(sf$.phoneFieldAlias));

	doClear(sf$.grabElementById(sf$.confidenceLevelFieldAlias));
	doClear(sf$.grabElementById(sf$.matchScoreFieldAlias));
	doClear(sf$.grabElementById(sf$.thresholdScoreFieldAlias));
	doClear(sf$.grabElementById(sf$.rpmEngFieldAlias));
	doClear(sf$.grabElementById(sf$.mCompanyNameFieldAlias));
	doClear(sf$.grabElementById(sf$.mAddr1FieldAlias));
	doClear(sf$.grabElementById(sf$.mAddr2FieldAlias));
	doClear(sf$.grabElementById(sf$.mCityFieldAlias));
	doClear(sf$.grabElementById(sf$.mStateFieldAlias));
	doClear(sf$.grabElementById(sf$.mZipFieldAlias));
	doClear(sf$.grabElementById(sf$.mCountryFieldAlias));
	doClear(sf$.grabElementById(sf$.mPhoneFieldAlias));
	doClear(sf$.grabElementById(sf$.mTradeNameFieldAlias));
	doClear(sf$.grabElementById(sf$.mStateCodeFieldAlias));
	doClear(sf$.grabElementById(sf$.mCountryCodeFieldAlias));
	doClear(sf$.grabElementById(sf$.mEmplyeeCountFieldAlias));
	doClear(sf$.grabElementById(sf$.mEmplyeeHereFieldAlias));
	doClear(sf$.grabElementById(sf$.mAnnualRevFieldAlias));
	doClear(sf$.grabElementById(sf$.mSicFieldAlias));
	doClear(sf$.grabElementById(sf$.mSicNameFieldAlias));
	doClear(sf$.grabElementById(sf$.mAltSicFieldAlias));
	doClear(sf$.grabElementById(sf$.mNaicsFieldAlias));
	doClear(sf$.grabElementById(sf$.mNaicsNameFieldAlias));
    doClear(sf$.grabElementById(sf$.mAltNaicsFieldAlias));
	doClear(sf$.grabElementById(sf$.mUrlFieldAlias));
	doClear(sf$.grabElementById(sf$.mLocationTypeFieldAlias));
	doClear(sf$.grabElementById(sf$.mSubsidiaryFieldAlias));
	doClear(sf$.grabElementById(sf$.mFamilyMemsFieldAlias));
	doClear(sf$.grabElementById(sf$.mGlobal2KFieldAlias));
	doClear(sf$.grabElementById(sf$.mFortune500FieldAlias));
	doClear(sf$.grabElementById(sf$.mCompXIDFieldAlias));

	doClear(sf$.grabElementById(sf$.hqCompanyNameFieldAlias));
	doClear(sf$.grabElementById(sf$.hqAddr1FieldAlias));
	doClear(sf$.grabElementById(sf$.hqAddr2FieldAlias));
	doClear(sf$.grabElementById(sf$.hqCityFieldAlias));
	doClear(sf$.grabElementById(sf$.hqStateFieldAlias));
	doClear(sf$.grabElementById(sf$.hqZipFieldAlias));
	doClear(sf$.grabElementById(sf$.hqCountryFieldAlias));
	doClear(sf$.grabElementById(sf$.hqPhoneFieldAlias));
	doClear(sf$.grabElementById(sf$.hqTradeNameFieldAlias));
	doClear(sf$.grabElementById(sf$.hqStateCodeFieldAlias));
	doClear(sf$.grabElementById(sf$.hqCountryCodeFieldAlias));
	doClear(sf$.grabElementById(sf$.hqEmplyeeCountFieldAlias));
	doClear(sf$.grabElementById(sf$.hqEmplyeeHereFieldAlias));
	doClear(sf$.grabElementById(sf$.hqAnnualRevFieldAlias));
	doClear(sf$.grabElementById(sf$.hqSicFieldAlias));
	doClear(sf$.grabElementById(sf$.hqSicNameFieldAlias));
	doClear(sf$.grabElementById(sf$.hqAltSicFieldAlias));
	doClear(sf$.grabElementById(sf$.hqNaicsFieldAlias));
	doClear(sf$.grabElementById(sf$.hqNaicsNameFieldAlias));
    doClear(sf$.grabElementById(sf$.hqAltNaicsFieldAlias));
	doClear(sf$.grabElementById(sf$.hqUrlFieldAlias));
	doClear(sf$.grabElementById(sf$.hqLocationTypeFieldAlias));
	doClear(sf$.grabElementById(sf$.hqSubsidiaryFieldAlias));
	doClear(sf$.grabElementById(sf$.hqFamilyMemsFieldAlias));
	doClear(sf$.grabElementById(sf$.hqGlobal2KFieldAlias));
	doClear(sf$.grabElementById(sf$.hqFortune500FieldAlias));
	doClear(sf$.grabElementById(sf$.hqCompXIDFieldAlias));

	doClear(sf$.grabElementById(sf$.dhqCompanyNameFieldAlias));
	doClear(sf$.grabElementById(sf$.dhqAddr1FieldAlias));
	doClear(sf$.grabElementById(sf$.dhqAddr2FieldAlias));
	doClear(sf$.grabElementById(sf$.dhqCityFieldAlias));
	doClear(sf$.grabElementById(sf$.dhqStateFieldAlias));
	doClear(sf$.grabElementById(sf$.dhqZipFieldAlias));
	doClear(sf$.grabElementById(sf$.dhqCountryFieldAlias));
	doClear(sf$.grabElementById(sf$.dhqPhoneFieldAlias));
	doClear(sf$.grabElementById(sf$.dhqTradeNameFieldAlias));
	doClear(sf$.grabElementById(sf$.dhqStateCodeFieldAlias));
	doClear(sf$.grabElementById(sf$.dhqCountryCodeFieldAlias));
	doClear(sf$.grabElementById(sf$.dhqEmplyeeCountFieldAlias));
	doClear(sf$.grabElementById(sf$.dhqEmplyeeHereFieldAlias));
	doClear(sf$.grabElementById(sf$.dhqAnnualRevFieldAlias));
	doClear(sf$.grabElementById(sf$.dhqSicFieldAlias));
	doClear(sf$.grabElementById(sf$.dhqSicNameFieldAlias));
	doClear(sf$.grabElementById(sf$.dhqAltSicFieldAlias));
	doClear(sf$.grabElementById(sf$.dhqNaicsFieldAlias));
	doClear(sf$.grabElementById(sf$.dhqNaicsNameFieldAlias));
    doClear(sf$.grabElementById(sf$.dhqAltNaicsFieldAlias));
	doClear(sf$.grabElementById(sf$.dhqUrlFieldAlias));
	doClear(sf$.grabElementById(sf$.dhqLocationTypeFieldAlias));
	doClear(sf$.grabElementById(sf$.dhqSubsidiaryFieldAlias));
	doClear(sf$.grabElementById(sf$.dhqFamilyMemsFieldAlias));
	doClear(sf$.grabElementById(sf$.dhqGlobal2KFieldAlias));
	doClear(sf$.grabElementById(sf$.dhqFortune500FieldAlias));
	doClear(sf$.grabElementById(sf$.dhqCompXIDFieldAlias));

	doClear(sf$.grabElementById(sf$.ghqCompanyNameFieldAlias));
	doClear(sf$.grabElementById(sf$.ghqAddr1FieldAlias));
	doClear(sf$.grabElementById(sf$.ghqAddr2FieldAlias));
	doClear(sf$.grabElementById(sf$.ghqCityFieldAlias));
	doClear(sf$.grabElementById(sf$.ghqStateFieldAlias));
	doClear(sf$.grabElementById(sf$.ghqZipFieldAlias));
	doClear(sf$.grabElementById(sf$.ghqCountryFieldAlias));
	doClear(sf$.grabElementById(sf$.ghqPhoneFieldAlias));
	doClear(sf$.grabElementById(sf$.ghqTradeNameFieldAlias));
	doClear(sf$.grabElementById(sf$.ghqStateCodeFieldAlias));
	doClear(sf$.grabElementById(sf$.ghqCountryCodeFieldAlias));
	doClear(sf$.grabElementById(sf$.ghqEmplyeeCountFieldAlias));
	doClear(sf$.grabElementById(sf$.ghqEmplyeeHereFieldAlias));
	doClear(sf$.grabElementById(sf$.ghqAnnualRevFieldAlias));
	doClear(sf$.grabElementById(sf$.ghqSicFieldAlias));
	doClear(sf$.grabElementById(sf$.ghqSicNameFieldAlias));
	doClear(sf$.grabElementById(sf$.ghqAltSicFieldAlias));
	doClear(sf$.grabElementById(sf$.ghqNaicsFieldAlias));
	doClear(sf$.grabElementById(sf$.ghqNaicsNameFieldAlias));
    doClear(sf$.grabElementById(sf$.ghqAltNaicsFieldAlias));
	doClear(sf$.grabElementById(sf$.ghqUrlFieldAlias));
	doClear(sf$.grabElementById(sf$.ghqLocationTypeFieldAlias));
	doClear(sf$.grabElementById(sf$.ghqSubsidiaryFieldAlias));
	doClear(sf$.grabElementById(sf$.ghqFamilyMemsFieldAlias));
	doClear(sf$.grabElementById(sf$.ghqGlobal2KFieldAlias));
	doClear(sf$.grabElementById(sf$.ghqFortune500FieldAlias));
	doClear(sf$.grabElementById(sf$.ghqCompXIDFieldAlias));
};

sf$.clearTech = function(){
    var doClear = function(elt){if (elt != null && elt.type == "hidden") elt.value="";};
	doClear(sf$.grabElementById(sf$.inferredEmployeesFieldAlias));
	doClear(sf$.grabElementById(sf$.inferredIndustryFieldAlias));
	doClear(sf$.grabElementById(sf$.inferredPublicFieldAlias));
	doClear(sf$.grabElementById(sf$.inferredRevenueFieldAlias));
	doClear(sf$.grabElementById(sf$.techAdvertisementFieldAlias));
	doClear(sf$.grabElementById(sf$.techAnalyticsAndTrackingFieldAlias));
	doClear(sf$.grabElementById(sf$.techChatsFieldAlias));
	doClear(sf$.grabElementById(sf$.techCMSFieldAlias));
	doClear(sf$.grabElementById(sf$.techCommentsFieldAlias));
	doClear(sf$.grabElementById(sf$.techContentDeliveryNetworksFieldAlias));
	doClear(sf$.grabElementById(sf$.techDomainNameServicesFieldAlias));
	doClear(sf$.grabElementById(sf$.techECommerceFieldAlias));
	doClear(sf$.grabElementById(sf$.techEmailDeliverySpamProtectionFieldAlias));
	doClear(sf$.grabElementById(sf$.techEmailMarketingFieldAlias));
	doClear(sf$.grabElementById(sf$.techEmailProvidersFieldAlias));
	doClear(sf$.grabElementById(sf$.techFontsFieldAlias));
	doClear(sf$.grabElementById(sf$.techHostedFormsFieldAlias));
	doClear(sf$.grabElementById(sf$.techHostingFieldAlias));
	doClear(sf$.grabElementById(sf$.techLoadBalancersFieldAlias));
	doClear(sf$.grabElementById(sf$.techMarketingAutomationFieldAlias));
	doClear(sf$.grabElementById(sf$.techMediaFieldAlias));
	doClear(sf$.grabElementById(sf$.techPaymentsFieldAlias));
	doClear(sf$.grabElementById(sf$.techPersonalizationFieldAlias));
	doClear(sf$.grabElementById(sf$.techRecruitmentFieldAlias));
	doClear(sf$.grabElementById(sf$.techRestaurantReservationServicesFieldAlias));
	doClear(sf$.grabElementById(sf$.techSecurityFieldAlias));
	doClear(sf$.grabElementById(sf$.techSSLCertificatesFieldAlias));
	doClear(sf$.grabElementById(sf$.techSupportFieldAlias));
	doClear(sf$.grabElementById(sf$.techTagManagementFieldAlias));
	doClear(sf$.grabElementById(sf$.techWebAcceleratorsFieldAlias));
	doClear(sf$.grabElementById(sf$.techWebPerformanceMonitoringFieldAlias));
	doClear(sf$.grabElementById(sf$.techWidgetsFieldAlias));
	sf$.techFilled=false;
};

/**
 * For color changing the rows of the select list.
 */
sf$.onOver = function(element){
	element.style.backgroundColor=sf$.selectListHoverColor;
	document.body.style.cursor = "pointer";
};

/**
 * For color changing the rows of the select list.
 */
sf$.onOut = function(element, count, param){
    if (param == 1){
	    if (count == 1)
		    element.style.backgroundColor=sf$.selectListColor1;
    	else
    		element.style.backgroundColor=sf$.selectListColor2;
    } else {
	    if (count == 1)
		    element.style.backgroundColor=sf$.selectListNAColor1;
    	else
    		element.style.backgroundColor=sf$.selectListNAColor2;

    }
	document.body.style.cursor = "auto";
};

/**
* Change mouse to wait when over blockFrame.
*/
sf$.blockFrameOnOver = function() {
    document.body.style.cursor = "wait";
};

/**
* Change mouse to auto when out of blockFrame.
*/
sf$.blockFrameOnOut = function() {
    document.body.style.cursor = "auto";
};

/**
 * Position select list relative to target element position
 */
sf$.positionSelectListDiv = function(){
	if (sf$.deployDropDownFlag){
        var t;
	    if (sf$.emailOnlyFilterFlag)
	        t=sfjq$("#"+sf$.emailFieldAlias);
	    else
	        t=sfjq$("#"+sf$.companyNameFieldAlias);

	    var tHeight=parseInt(t.css("height").replace(/[^-\d.]/g, '')) + sf$.selectListDivTopOffset,
            tHeightUnit=t.css("height").replace(/[\d.]/g, ''),
            tPosition=t.offset(),
            d=sfjq$("#"+sf$.selectListDivID);
        d.css({
	        "position" : "absolute",
	        "left" : tPosition.left,
            "top" : tPosition.top,
            "margin-top" : tHeight+tHeightUnit
        });
    }
};

/**
 * Center select list on screen.
 */
sf$.centerSelectListDiv = function(){
    if (sfjq$("#"+sf$.selectListDivID).css("visibility") == "visible" && !sf$.deployDropDownFlag)
        sf$.centerDiv(sf$.selectListDivID);
};

/**
 * Center loading animation on screen.
 */
sf$.centerLoadingDiv = function(){
    if (sfjq$("#RFLoadingFrame").css("visibility") == "visible")
        sf$.centerDiv("RFLoadingFrame");
};

/**
 * Center a div on screen.
 */
sf$.centerDiv = function(divID){
    var w=sfjq$(window), d=sfjq$("#"+divID);
    d.css({
	    "position" : "absolute",
        "left" : Math.abs((w.width() - d.outerWidth())/2 + w.scrollLeft()),
        "top" : Math.abs((w.height() - d.outerHeight())/2 + w.scrollTop())
    });
};

/**
 * Keep select list center during scroll.
 */
sfjq$(window).scroll(function(){
    sf$.centerSelectListDiv();
    sf$.centerLoadingDiv();
});

/**
 * Keep select list center during resize.
 */
sfjq$(window).resize(function(){
	if (sf$.deployDropDownFlag){
		sf$.positionSelectListDiv();
    } else {
        sf$.centerSelectListDiv();
        sf$.centerLoadingDiv();

        var d, dv=sfjq$("#RFBlockFrame");
        if (dv.length) {
            d=sfjq$(document);
	        dv.css({
	            "position" : "absolute",
		         "height" : d.height(),
		         "width" : d.width()
	        });
        }
	}
});

/**
 * Assign ID attributes to form and input elements using the name attribute.
 * Requires form with ID mapped.
 */
sf$.assignIDs = function(){
	if (sf$.assignIDsByName) {
	    if (!sfjq$("#"+sf$.smartFormID).length && sfjq$("form[name="+sf$.smartFormID+"]").length) {
	        sfjq$("form[name="+sf$.smartFormID+"]").attr("id",sf$.smartFormID);
	    }

        sfjq$("#"+sf$.smartFormID+" input[type=text], #"+sf$.smartFormID+" input[type=email], #"+sf$.smartFormID+" input[type=hidden], #"+sf$.smartFormID+" select, #"+sf$.smartFormID+" textarea").each(function (i) {
            if (sfjq$(this).attr("id") == undefined || sfjq$(this).attr("id") == null) {
                sfjq$(this).attr("id",sfjq$(this).attr("name"));
            }
        });
	}
};

/**
 * Attempt to get input element ID.
 */
sf$.grabInputID = function(val){
    var id="";
    try {
         id = sfjq$("input[type=text][id='"+ val +"'], input[type=email][id='"+ val +"'], input[type=hidden][id='"+ val +"'], select[id='"+ val +"'], textarea[id='"+ val +"'], input[type=checkbox][id='"+ val +"'], input[type=radio][id='"+ val +"'], input[type=password][id='"+ val +"']").attr("id") ||
              sfjq$("input[type=text][id*='"+ val +"'], input[type=email][id*='"+ val +"'], input[type=hidden][id*='"+ val +"'], select[id*='"+ val +"'], textarea[id*='"+ val +"'], input[type=checkbox][id*='"+ val +"'], input[type=radio][id*='"+ val +"'], input[type=password][id*='"+ val +"']").attr("id") ||
              sfjq$("input[type=text], input[type=email], input[type=hidden], select, textarea, input[type=checkbox], input[type=radio], input[type=password]").filter(function() {
                                 var startsWith = new RegExp("^" + val, "i"),
                                     endsWith = new RegExp(val + "$", "i");
                                 return startsWith.test(sfjq$(this).attr("id")) || endsWith.test(sfjq$(this).attr("id")) ;
                                }).attr("id") ||
              sfjq$("input[type=text][name='"+ val +"'], input[type=email][name='"+ val +"'], input[type=hidden][name='"+ val +"'], select[name='"+ val +"'], textarea[name='"+ val +"'], input[type=checkbox][name='"+ val +"'], input[type=radio][name='"+ val +"'], input[type=password][name='"+ val +"']").attr("id") ||
              sfjq$("input[type=text][name*='"+ val +"'], input[type=email][name*='"+ val +"'], input[type=hidden][name*='"+ val +"'], select[name*='"+ val +"'], textarea[name*='"+ val +"'], input[type=checkbox][name*='"+ val +"'], input[type=radio][name*='"+ val +"'], input[type=password][name*='"+ val +"']").attr("id") ||
              sfjq$("input[type=text][class*='"+ val +"'], input[type=email][class*='"+ val +"'], input[type=hidden][class*='"+ val +"'], select[class*='"+ val +"'], textarea[class*='"+ val +"'], input[type=checkbox][class*='"+ val +"'], input[type=radio][class*='"+ val +"'], input[type=password][class*='"+ val +"']").attr("id") ||
              sfjq$("[class~='"+ val +"']").find("input[type=text], input[type=email], input[type=hidden], select, textarea, input[type=checkbox], input[type=radio], input[type=password]").attr("id") ||
              sfjq$("[class*='"+ val +"']").find("input[type=text], input[type=email], input[type=hidden], select, textarea, input[type=checkbox], input[type=radio], input[type=password]").attr("id");
    } catch (err) {}
    return id;
};

/**
 * Use when validation is not client-side. Return true only if sf$.formCheckIDs[] input fields have a value.
 */
sf$.formCheck = function(){
    var doSF=true;
    for (var i=0; i < sf$.formCheckIDs.length; i++) {
      var v = sfjq$("#"+sf$.formCheckIDs[i]);
      if (v.length) {
        try {
            var elmName = v.attr("name"),
                elmID = v.attr("id");
            if (v.is("input[type=text], input[type=email], textarea, input[type=password]")) {
                var theValue = v.val();
                if (theValue == null || theValue.replace(/(\r\n|\n|\r)/gm,"").length == 0) {
                    doSF = false;
                    break;
                }
            } else if (v.is("select") && (v.val() == null || v.val().length == 0 || v.find("option").length == 0)) {
                doSF = false;
                break;
            } else if (v.is("input[type=checkbox], input[type=radio]") && !v.is(":checked")) {
                doSF = false;
                break;
            }
        } catch (e) {
            doSF = false;
        }
      }
    } // end loop
    return doSF;
};

sf$.hideDynaInput = function(){
	if (sf$.deployDynaInput) {
//	if (sf$.deployDropDownFlag) {
		for (var i=0; i < sf$.dynaInputIDs.length; i++) {
			// if wrapping parent element does not have it's own unique ID/class, use unique ID/class of target input to get closest wrapping parent element
			//    ex. sf$.dynaInputIDs=["target-input-id-or-class:parent element type (ex. li,div,tr) or jquery selector"];
			//    ex. sf$.dynaInputIDs=["employeelist:tr","countrylist:tr"];
			//    ex. sf$.dynaInputIDs=["employeelist:#parent_id","countrylist:.parent_class"];
			//    ex. sf$.dynaInputIDs=["No_of_Employees__c:div .mktoFormRow"];
			// attempt to get target by ID, then by class name
			var e=sf$.dynaInputIDs[i],p="",v;
			if (e.indexOf(":") > 0) {
				e=sf$.dynaInputIDs[i].split(":",2)[0];
				p=sf$.dynaInputIDs[i].split(":",2)[1];
			}

			v = sfjq$("#"+e);
			if (v.length === 0)
				v = sfjq$("."+e);

			if (v.length > 0) {
				switch(p.length) {case 0: v.hide(); break; default: v.closest(p).hide();}
				sf$.isDynaInputVisible=false;
				sf$.setDynaRequired(e,sf$.isDynaInputVisible);
			}
		}
//	}
	}
};

sf$.showDynaInput = function(){
	if (sf$.deployDynaInput) {
		if (sf$.deployDropDownFlag) {
			for (var i=0; i < sf$.dynaInputIDs.length; i++) {
				var e=sf$.dynaInputIDs[i],p="",v;
				if (e.indexOf(":") > 0) {
					e=sf$.dynaInputIDs[i].split(":",2)[0];
					p=sf$.dynaInputIDs[i].split(":",2)[1];
				}

				v = sfjq$("#"+e);
				if (v.length === 0)
					v = sfjq$("."+e);

				if (v.length > 0) {
					switch(p.length) {case 0: v.show(400); break; default: v.closest(p).show(400);}
					sf$.isDynaInputVisible=true;
					sf$.setDynaRequired(e,sf$.isDynaInputVisible);
				}
			}
		}
	}
};

/**
 * Stub functions.
 */
sf$.translateStateNm = function(val,elmID) {return val;};
sf$.translateStateCd = function(val,elmID) {return val;};
sf$.translateCountryNm = function(val,elmID) {return val;};
sf$.translateCountryCd = function(val,elmID) {return val;};
sf$.translateEmployeeCnt = function(val,elmID) {return val;};
sf$.translateAnnualRev = function(val,elmID) {return val;};
sf$.translateSic = function(val,elmID) {return val;};
sf$.translateAltSic = function(val,elmID) {return val;};
sf$.translateNaics = function(val,elmID) {return val;};
sf$.translateAltNaics = function(val,elmID) {return val;};
sf$.setDynaRequired = function(){};