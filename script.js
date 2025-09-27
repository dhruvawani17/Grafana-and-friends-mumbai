// Grafana Community Day Mumbai 2025 - JavaScript
// Extracted from inline scripts on index.html

// Set document class to js
document.documentElement.className = 'js';

// Web Font Loader Configuration
if (typeof WebFontConfig === "undefined") {
    WebFontConfig = new Object();
}
WebFontConfig['google'] = { families: ['Open+Sans:400', 'Oswald:300,400'] };

(function () {
    var wf = document.createElement('script');
    wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.5.3/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
})();

// jQuery Configuration
let jqueryParams = [], jQuery = function (r) { 
    return jqueryParams = [...jqueryParams, r], jQuery 
}, $ = function (r) { 
    return jqueryParams = [...jqueryParams, r], $ 
}; 

window.jQuery = jQuery;
window.$ = jQuery;
let customHeadScripts = !1;

jQuery.fn = jQuery.prototype = {};
$.fn = jQuery.prototype = {};

jQuery.noConflict = function (r) { 
    if (window.jQuery) return jQuery = window.jQuery, $ = window.jQuery, customHeadScripts = !0, jQuery.noConflict 
};

jQuery.ready = function (r) { 
    jqueryParams = [...jqueryParams, r] 
};

$.ready = function (r) { 
    jqueryParams = [...jqueryParams, r] 
};

jQuery.load = function (r) { 
    jqueryParams = [...jqueryParams, r] 
};

$.load = function (r) { 
    jqueryParams = [...jqueryParams, r] 
};

jQuery.fn.ready = function (r) { 
    jqueryParams = [...jqueryParams, r] 
};

$.fn.ready = function (r) { 
    jqueryParams = [...jqueryParams, r] 
};

// jQuery after load
document.addEventListener('DOMContentLoaded', function() {
    if (jqueryParams.length) {
        jqueryParams.forEach(function(e, r) {
            if ("function" == typeof e) {
                var n = String(e);
                n.replace("$", "jQuery");
                var a = new Function("return " + n)();
                $(document).ready(a);
            }
        });
    }
});

// Google Analytics Configuration
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag("set","linker",{"domains":["acd.awsugmum.in"]});
gtag("js", new Date());
gtag("set", "developer_id.dZTNiMT", true);
gtag("config", "GT-P3MHJGP");

// OneSignal Configuration
window.OneSignal = window.OneSignal || [];
var OneSignal = window.OneSignal;
var oneSignal_options = {};
oneSignal_options['serviceWorkerPath'] = 'OneSignalSDKWorker.js.php';
oneSignal_options['wordpress'] = true;
oneSignal_options['appId'] = 'f48fd485-2c46-4667-bdf4-8d455dd33693';
oneSignal_options['allowLocalhostAsSecureOrigin'] = true;
oneSignal_options['welcomeNotification'] = { };
oneSignal_options['welcomeNotification']['disable'] = true;
oneSignal_options['path'] = "https://acd.awsugmum.in/wp-content/plugins/onesignal-free-web-push-notifications/sdk_files/";
oneSignal_options['safari_web_id'] = "web.onesignal.auto.0e007fdd-4c29-4efe-85fd-d9ae8478b7ea";
oneSignal_options['promptOptions'] = { };
oneSignal_options['promptOptions']['actionMessage'] = "Stay notified on important event details!";
oneSignal_options['promptOptions']['acceptButtonText'] = "ALLOW";
oneSignal_options['promptOptions']['cancelButtonText'] = "NO THANKS";

OneSignal.push(function() {
    OneSignal.SERVICE_WORKER_UPDATER_PATH = "OneSignalSDKUpdaterWorker.js.php";
    OneSignal.SERVICE_WORKER_PATH = "OneSignalSDKWorker.js.php";
    OneSignal.SERVICE_WORKER_PARAM = { scope: "/" };
    OneSignal.setDefaultIcon("https://acd.awsugmum.in/wp-content/uploads/2023/12/cropped-awsugmum-logo.f2d190cc-192x192.jpeg");
    OneSignal.setDefaultTitle("Grafana User Group Mumbai");
    OneSignal.init(window.oneSignal_options);
});

// OTP Timer Script Configuration
var moOtpTimerScript = {
    "siteURL":"https:\/\/acd.awsugmum.in\/wp-admin\/admin-ajax.php",
    "action":"mo_control_otp_block",
    "otpControlTimerTime":"60",
    "otpControlBlockTime":"0",
    "isUserBlocked":null,
    "limit_otp_sent_message":"Your OTP has been sent. The next OTP can be sent after {minutes}:{seconds} minutes",
    "user_blocked_message":"You have exceeded the limit to send OTP. Please wait for {minutes}:{seconds} minutes",
    "error_otp_verify_message":"The next OTP can be sent after {minutes}:{seconds} minutes"
};

// WooCommerce Configuration
var wf_pklist_params_public = {
    "show_document_preview":"No",
    "document_access_type":"logged_in",
    "is_user_logged_in":"",
    "msgs":{
        "invoice_number_prompt_free_order":"\u2018Generate invoice for free orders\u2019 is disabled in Invoice settings > Advanced. You are attempting to generate invoice for this free order. Proceed?",
        "creditnote_number_prompt":"Refund in this order seems not having credit number yet. Do you want to manually generate one ?",
        "invoice_number_prompt_no_from_addr":"Please fill the `from address` in the plugin's general settings.",
        "invoice_title_prompt":"Invoice",
        "invoice_number_prompt":"number has not been generated yet. Do you want to manually generate one ?",
        "pop_dont_show_again":false,
        "request_error":"Request error.",
        "error_loading_data":"Error loading data.",
        "min_value_error":"minimum value should be",
        "generating_document_text":"Generating document...",
        "new_tab_open_error":"Failed to open new tab. Please check your browser settings."
    }
};

var wc_add_to_cart_params = {
    "ajax_url":"\/wp-admin\/admin-ajax.php",
    "wc_ajax_url":"\/?wc-ajax=%%endpoint%%",
    "i18n_view_cart":"View cart",
    "cart_url":"https:\/\/acd.awsugmum.in\/cart\/",
    "is_cart":"",
    "cart_redirect_after_add":"yes"
};

var woocommerce_params = {
    "ajax_url":"\/wp-admin\/admin-ajax.php",
    "wc_ajax_url":"\/?wc-ajax=%%endpoint%%",
    "i18n_password_show":"Show password",
    "i18n_password_hide":"Hide password"
};

// Countdown Timer Functionality
function initCountdown() {
    // Set the date for Grafana Community Mumbai 2025 (November 15, 2025)
    const eventDate = new Date("November 15, 2025 09:00:00").getTime();
    
    const timer = setInterval(function() {
        const now = new Date().getTime();
        const distance = eventDate - now;
        
        // Calculate time units
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Update the countdown display
        const daysElement = document.getElementById("days");
        const hoursElement = document.getElementById("hours");
        const minutesElement = document.getElementById("minutes");
        const secondsElement = document.getElementById("seconds");
        
        if (daysElement) daysElement.innerHTML = String(days).padStart(2, '0');
        if (hoursElement) hoursElement.innerHTML = String(hours).padStart(2, '0');
        if (minutesElement) minutesElement.innerHTML = String(minutes).padStart(2, '0');
        if (secondsElement) secondsElement.innerHTML = String(seconds).padStart(2, '0');
        
        // If the countdown is finished, display event message
        if (distance < 0) {
            clearInterval(timer);
            if (daysElement) daysElement.innerHTML = "00";
            if (hoursElement) hoursElement.innerHTML = "00";
            if (minutesElement) minutesElement.innerHTML = "00";
            if (secondsElement) secondsElement.innerHTML = "00";
        }
    }, 1000);
}

// Initialize countdown when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initCountdown();
});