import {queue as d3_queue} from 'd3-queue';
import {json as d3_json} from 'd3-request';
import {cfgData} from './events';

const defaultKey = "1Qx2_oITx9455H4C_Kv8X4rPYtwnY_KwE-vxPe1cFx4M";

export default function(event, test, cbResult) {
    let urlDocs = "https://interactive.guim.co.uk/docsdata-test/";
    let urlData = "https://interactive.guim.co.uk/2016/07/olympic-vs/data/";
    let docsKey = cfgData[event] ? cfgData[event].key : defaultKey;
      
    // testing
    //let urlTest = urlDocs + docsKey + ".json"; 
    //d3_json(urlTest, (resp, err) => console.log(resp, err));

    d3_queue()
    .defer(d3_json, urlData + event + ".json")
    .defer(d3_json, urlData + (test ? "test/" : "live/") + event + "_final.json")
    .defer(d3_json, urlDocs + docsKey + ".json")
    .await(cbResult);
}
