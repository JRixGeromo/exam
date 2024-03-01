//let url1 = "https://poshmark.com/vm-rest/searches/popular?department_id=000e8975d97b4e80ef00a955&brand_id=53d96e505632a028000002f4&pm_version=2024.9.0";
let url = "https://poshmark.com/vm-rest/channel_groups/brand/channels/Nike/collections/post?request={%22filters%22:{%22department%22:%22Women%22,%22category_v2%22:%22Shoes%22,%22brand%22:[%22Nike%22],%22size%22:{%22include%22:[%225.5%22]},%22color%22:[%22White%22],%22inventory_status%22:[%22available%22],%22shipping_discount_type%22:[%22free%22]},%22facets%22:[%22color%22,%22category_v2%22,%22category_feature%22,%22size%22],%22experience%22:%22all%22,%22sizeSystem%22:%22us%22,%22count%22:%2248%22}&summarize=true&pm_version=2024.9.0";
const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
fetch(proxyUrl + url, {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
    }
})
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
})
.then(data => {
    const finalData = (data.data || []).map(item => ({
      id: item.id,
      title: item.title
    }));

    console.log(JSON.stringify(finalData, null, 2));
})
.catch(error => console.error('There was a problem with your fetch operation:', error));
