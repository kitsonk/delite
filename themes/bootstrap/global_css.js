define(function () {
	/* jshint multistr: true */
	/* jshint -W015 */
	/* jshint -W033 */
	return "\
.d-readonly *,\
.d-disabled *,\
.d-readonly,\
.d-disabled {\
  cursor: default;\
}\
.d-reset {\
  margin: 0;\
  border: 0;\
  padding: 0;\
  font: inherit;\
  line-height: normal;\
  color: inherit;\
}\
.d-inline {\
  display: inline-block;\
  border: 0;\
  padding: 0;\
  vertical-align: middle;\
}\
.d-hidden,\
[d-hidden=true],\
[d-shown=false] {\
  display: none;\
}\
.d-invisible,\
[d-invisible=true],\
[d-visible=false] {\
  visibility: hidden;\
}\
html {\
  font-size: 62.5%;\
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\
}\
body {\
  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\
  font-size: 14px;\
  line-height: 1.428571429;\
  color: #333333;\
  background-color: #ffffff;\
}\
input,\
button,\
select,\
textarea {\
  font-family: inherit;\
  font-size: inherit;\
  line-height: inherit;\
}\
a {\
  color: #428bca;\
  text-decoration: none;\
}\
a:hover,\
a:focus {\
  color: #2a6496;\
  text-decoration: underline;\
}\
a:focus {\
  outline: thin dotted;\
  outline: 5px auto -webkit-focus-ring-color;\
  outline-offset: -2px;\
}\
hr {\
  margin-top: 20px;\
  margin-bottom: 20px;\
  border: 0;\
  border-top: 1px solid #eeeeee;\
}\
.d-popup {\
  position: absolute;\
  background-color: transparent;\
  margin: 0;\
  border: 0;\
  padding: 0;\
  -webkit-overflow-scrolling: touch;\
  -webkit-box-shadow: 0 1px 5px rgba(0, 0, 0, 0.25);\
  -moz-box-shadow: 0 1px 5px rgba(0, 0, 0, 0.25);\
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.25);\
}\
.d-tooltip-dialog-popup {\
  -webkit-box-shadow: none;\
  -moz-box-shadow: none;\
  box-shadow: none;\
}";
});