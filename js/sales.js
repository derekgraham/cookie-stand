var storeList = [];

function salmonStore(storeName, minCustomersPerHour, maxCustomersPerHour, averageCookiesPerCustomer){
  'use strict';
  this.storeName = storeName;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.averageCookiesPerCustomer = averageCookiesPerCustomer;
  this.storeOpenTime = 6;
  this.storeCloseTime = 8;
  this.storeOpenHours = 0;
  this.estimatedCookiesPerHour = [];
  this.totalCookiesPerDay = 0;
  this.randomCustomersPerHour = function() {
    return Math.floor((Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour);
  };

  this.simulateCookies = function() {
    this.storeOpenHours = this.storeCloseTime + 12 - this.storeOpenTime + 1;
    //console.log(this.storeOpenHours);
    for ( var i = 0; i < this.storeOpenHours; i++) // fixme assumes store open before noon, close after noon.
    {
      this.estimatedCookiesPerHour[i] = Math.round(this.randomCustomersPerHour() * this.averageCookiesPerCustomer);
    //  console.log( i + ', ' + this.estimatedCookiesPerHour[i]);
      this.totalCookiesPerDay += this.estimatedCookiesPerHour[i];
    }
    //console.log(this.totalCookiesPerDay);
  };
  this.makeRow = function(rowClass) {
    var appendRows = document.getElementById('append-rows');
    var tr = document.createElement('tr');
    var th = document.createElement('th');
    tr.className = rowClass;
    th.textContent = this.storeName;
    th.className = 'storename';
    tr.appendChild(th);

    for ( var i = 0 ; i < this.estimatedCookiesPerHour.length ; i++){
      var td = document.createElement('td');
      td.textContent = this.estimatedCookiesPerHour[i];
      tr.appendChild(td);
    //  console.log('per hour' + this.estimatedCookiesPerHour[i]);
    }
    var newTd = document.createElement('td');
    newTd.value = this.totalCookiesPerDay;
    newTd.textContent = this.totalCookiesPerDay;
    newTd.className = 'totalColumn';
    tr.appendChild(newTd);
    appendRows.appendChild(tr);
  };

  this.simulateCookies();
};

storeList.push(new salmonStore('Pike Place', 17, 88, 5.2));
storeList.push(new salmonStore('Seatac Airport', 6, 18, 1.2));
storeList.push(new salmonStore('South Center', 11, 38, 1.9));
storeList.push(new salmonStore('Belleuve Square', 20, 48, 3.3));
storeList.push(new salmonStore('Alki', 3, 24, 2.6));

function salesReport(){
  'use strict';
  var appendRows = document.getElementById('append-rows');
  appendRows.innerHTML = '';
  var allCookies = 0;
  for ( var i = 0 ; i < storeList.length ; i ++){
    if ( i % 2 === 0 ){

    }
    storeList[i].makeRow( function() { if( i % 2) { return 'evenRow'; } else return 'oddRow';}() );
    allCookies += storeList[i].totalCookiesPerDay;
  }
  var myTotal = document.getElementById('append-total');
  myTotal.innerHTML = null;
  var tr = document.createElement('tr');
  var th = document.createElement('th');
  th.textContent = 'Total';
  tr.appendChild(th);

  for ( var i = 0 ; i < storeList[0].estimatedCookiesPerHour.length ; i++){
    var td = document.createElement('td');
    td.textContent = '';
    //td.className = 'totalRow';
    tr.appendChild(td);
  }
  var newTd = document.createElement('td');
  newTd.value = allCookies;
  newTd.textContent = allCookies;
  newTd.className = 'grandtotal';
  tr.appendChild(newTd);
  myTotal.appendChild(tr);

  // myTotal.textContent = allCookies;
  // document.body.appendChild(myTotal);
};
salesReport();

var newStoreForm = document.getElementById('newStoreInput');

var formInput = function(event){
  event.preventDefault();

  var storeNameBox = event.target.storeNameBox.value;
  var minCustomersBox = parseInt(event.target.minCustomersBox.value);
  var maxCustomersBox = parseInt(event.target.maxCustomersBox.value);
  var avgItemBoughtBox = event.target.avgItemBoughtBox.value;

  //console.log(storeNameBox + ' ' + minCustomersBox + ' ' + maxCustomersBox + ' ' + avgItemBoughtBox);
  for ( var i = 0 ; i < storeList.length ; i ++) {
    // console.log( storeNameBox + ' ' + i + ' ' + storeList[i].storeName);
    //console.log( typeof (storeNameBox) + ' ' + typeof storeList[i].storeName);
    //console.log( (event.target.storeNameBox.value) === (storeList[i].storeName) );
    if ( storeNameBox === (storeList[i].storeName) ) {
      console.log('match with name');
      storeList[i].minCustomersPerHour = minCustomersBox;
      storeList[i].maxCustomersPerHour = maxCustomersBox;
      storeList[i].averageCookiesPerCustomer = avgItemBoughtBox;
      storeList[i].simulateCookies();
      break;
    } else if ( i === storeList.length - 1 ){
      storeList.push(new salmonStore(storeNameBox, minCustomersBox, maxCustomersBox, avgItemBoughtBox));
    }
  };
  //storeList[storeList.length - 1].makeRow();
  salesReport();
  event.target.storeNameBox.value = null;
  event.target.minCustomersBox.value = null;
  event.target.maxCustomersBox.value = null;
  event.target.avgItemBoughtBox.value = null;
};

newStoreForm.addEventListener('submit', formInput);
