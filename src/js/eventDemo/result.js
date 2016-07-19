import getData from './data';
import highjump from './highjump';

export default function() {

    let data = getData();
    //console.log(data);
    
    highjump("js-highjump", data); 
}
