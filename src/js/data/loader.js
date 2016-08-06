import {queue as d3_queue} from 'd3-queue';
import {json as d3_json} from 'd3-request';

const defaultKey = "1Qx2_oITx9455H4C_Kv8X4rPYtwnY_KwE-vxPe1cFx4M";
const keys = {
    "freestyle_100x4_relay_w": "1Qx2_oITx9455H4C_Kv8X4rPYtwnY_KwE-vxPe1cFx4M",
    "freestyle_400_w":         "1POjTdD80wZg5cxaCrMsnIh2qoYGJdDqBpyL2-6EX7nA",
    "freestyle_200_m":         "1rubYCASgNxcWrpWCrh1e4Y_kNfwF3jyt84L_iehxevI",
};

export default function(event, test, cbResult) {
    
    let urlDocs = "https://interactive.guim.co.uk/docsdata-test/";
    let urlData = "https://interactive.guim.co.uk/2016/07/olympic-vs/data/";
    let docsKey = keys[event] ? keys[event] : defaultKey;
    
    //d3_json(urlData + (test ? "test/" : "") + event + "_final.json", (resp, err) => console.log(resp, err));

    d3_queue()
    .defer(d3_json, urlData + event + ".json")
    .defer(d3_json, urlData + (test ? "test/" : "live/") + event + "_final.json")
    .defer(d3_json, urlDocs + docsKey + ".json")
    .await(cbResult);
}
