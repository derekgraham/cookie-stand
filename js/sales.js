
var pikePlaceStore =  {
  storeName : 'Pike Place Market',
  storeOpenTime : 6, // fixme This must be before noon
  storeCloseTime : 9, // fixme this must be after noon
  storeOpenHours : 0,
  minCustomersPerHour : 17,
  maxCustomersPerHour : 88,
  averageCookiesPerCustomer : 5.2,
  estimatedCookiesPerHour : [],
  totalCookiesPerDay : 0,
  randomCustomersPerHour : function() {
    return Math.floor((Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour);
  },
  simulateCookies: function() {
    this.storeOpenHours = this.storeCloseTime + 12 - this.storeOpenTime + 1;
    for ( var i = 0; i < this.storeOpenHours; i++) // fixme assumes store open before noon, close after noon.
    {
      this.estimatedCookiesPerHour[i] = Math.round(this.randomCustomersPerHour() * this.averageCookiesPerCustomer);
    //  console.log( i + ', ' + this.estimatedCookiesPerHour[i]);
      this.totalCookiesPerDay += this.estimatedCookiesPerHour[i];
    }
    console.log(this.totalCookiesPerDay);

  },

};


var seaTacAirportStore =  {
  storeName : 'SeaTac Airport',
  storeOpenTime : 6, // fixme This must be before noon
  storeCloseTime : 9, // fixme this must be after noon
  storeOpenHours : 0,
  minCustomersPerHour : 6,
  maxCustomersPerHour : 24,
  averageCookiesPerCustomer : 1.2,
  estimatedCookiesPerHour : [],
  totalCookiesPerDay : 0,
  randomCustomersPerHour : function() {
    return Math.floor((Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour);
  },
  simulateCookies: function() {
    this.storeOpenHours = this.storeCloseTime + 12 - this.storeOpenTime + 1;
    for ( var i = 0; i < this.storeOpenHours; i++) // fixme assumes store open before noon, close after noon.
    {
      this.estimatedCookiesPerHour[i] = Math.round(this.randomCustomersPerHour() * this.averageCookiesPerCustomer);
    //  console.log( i + ', ' + this.estimatedCookiesPerHour[i]);
      this.totalCookiesPerDay += this.estimatedCookiesPerHour[i];
    }
    console.log(this.totalCookiesPerDay);

  },

};

var southCenterStore =  {
  storeName : 'South Center',
  storeOpenTime : 6, // fixme This must be before noon
  storeCloseTime : 9, // fixme this must be after noon
  storeOpenHours : 0,
  minCustomersPerHour : 11,
  maxCustomersPerHour : 38,
  averageCookiesPerCustomer : 1.9,
  estimatedCookiesPerHour : [],
  totalCookiesPerDay : 0,
  randomCustomersPerHour : function() {
    return Math.floor((Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour);
  },
  simulateCookies: function() {
    this.storeOpenHours = this.storeCloseTime + 12 - this.storeOpenTime + 1;
    for ( var i = 0; i < this.storeOpenHours; i++) // fixme assumes store open before noon, close after noon.
    {
      this.estimatedCookiesPerHour[i] = Math.round(this.randomCustomersPerHour() * this.averageCookiesPerCustomer);
    //  console.log( i + ', ' + this.estimatedCookiesPerHour[i]);
      this.totalCookiesPerDay += this.estimatedCookiesPerHour[i];
    }
    console.log(this.totalCookiesPerDay);

  },

};

var bellevueSquareStore =  {
  storeName : 'Bellevue Square',
  storeOpenTime : 6, // fixme This must be before noon
  storeCloseTime : 9, // fixme this must be after noon
  storeOpenHours : 0,
  minCustomersPerHour : 20,
  maxCustomersPerHour : 48,
  averageCookiesPerCustomer : 3.3,
  estimatedCookiesPerHour : [],
  totalCookiesPerDay : 0,
  randomCustomersPerHour : function() {
    return Math.floor((Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour);
  },
  simulateCookies: function() {
    this.storeOpenHours = this.storeCloseTime + 12 - this.storeOpenTime + 1;
    for ( var i = 0; i < this.storeOpenHours; i++) // fixme assumes store open before noon, close after noon.
    {
      this.estimatedCookiesPerHour[i] = Math.round(this.randomCustomersPerHour() * this.averageCookiesPerCustomer);
    //  console.log( i + ', ' + this.estimatedCookiesPerHour[i]);
      this.totalCookiesPerDay += this.estimatedCookiesPerHour[i];
    }
    console.log(this.totalCookiesPerDay);

  },
};

var alkiStore =  {
  storeName : 'Alki',
  storeOpenTime : 6, // fixme This must be before noon
  storeCloseTime : 9, // fixme this must be after noon
  storeOpenHours : 0,
  minCustomersPerHour : 3,
  maxCustomersPerHour : 24,
  averageCookiesPerCustomer : 2.6,
  estimatedCookiesPerHour : [],
  totalCookiesPerDay : 0,
  randomCustomersPerHour : function() {
    return Math.floor((Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour);
  },
  simulateCookies: function() {
    this.storeOpenHours = this.storeCloseTime + 12 - this.storeOpenTime + 1;
    for ( var i = 0; i < this.storeOpenHours; i++) // fixme assumes store open before noon, close after noon.
    {
      this.estimatedCookiesPerHour[i] = Math.round(this.randomCustomersPerHour() * this.averageCookiesPerCustomer);
    //  console.log( i + ', ' + this.estimatedCookiesPerHour[i]);
      this.totalCookiesPerDay += this.estimatedCookiesPerHour[i];
    }
    console.log(this.totalCookiesPerDay);

  },
  testHours : function() {
    this.simulateCookies();
    for (i = 0 ; i < this.storeOpenHours ; i ++ ){
      if( i + this.storeOpenTime <= 12 ){
        console.log(i + this.storeOpenTime + 'AM');
      } else {
        console.log(i + this.storeOpenTime - 12 + 'PM');
      }
    }
  },
  testRandom : function() {
    var test = 0;
    do {
      test = this.randomCustomersPerHour();
      console.log( test );
    } while (test != this.minCustomersPerHour && test != this.maxCustomersPerHour);
  },
  // salesReport : function() {
  //   this.simulateCookies();
  //   var h2El = document.createElement('h2');
  //   h2El.textContent = 'Sales Report';
  //   document.body.appendChild(h2El);
  //
  //   var salesListTopEl = document.createElement('ul');
  //   salesListTopEl.textContent = 'Sales Report - Cookies sold by hour per store ';
  //   document.body.appendChild(salesListTopEl);
  //
  //   var salesListTopEl = document.createElement('ul');
  //   salesListTopEl.textContent = '';
  //   document.body.appendChild(salesListTopEl);
  //
  //   var salesListInsideEl = document.createElement('ul');
  //   salesListInsideEl.textContent = this.storeName;
  //   salesListTopEl.appendChild(salesListInsideEl);
  //
  //   var salesListItemEL = {};
  //   //console.log(this.estimatedCookiesPerHour.length);
  //   for ( var i = 0 ; i < this.estimatedCookiesPerHour.length ; i ++){
  //     salesListItemEL = document.createElement('li');
  //     salesListItemEL.textContent = ( function(storeOpenTime) { if(storeOpenTime < 12) { return storeOpenTime + 'am: '; } else if (storeOpenTime > 12 ) { return (storeOpenTime - 12 + 'pm: ');} else if (storeOpenTime = 12 ) { return storeOpenTime + 'pm: '; };}(i + this.storeOpenTime) ) + this.estimatedCookiesPerHour[i] + ' cookies';
  //     salesListInsideEl.appendChild(salesListItemEL);
  //     //console.log(this.estimatedCookiesPerHour[i]);
  //   }
  //
  //   var salesTotalEl = document.createElement('li');
  //   salesTotalEl.textContent = 'Total: ' + this.totalCookiesPerDay;
  //   salesListInsideEl.appendChild(salesTotalEl);
  // }
};

var stores = [pikePlaceStore,seaTacAirportStore,southCenterStore,bellevueSquareStore,alkiStore];
//alkiStore.salesReport2();

function salesReport( myStores ) {
  var salesListTopEl = document.createElement('ul');
  salesListTopEl.textContent = '';
  document.body.appendChild(salesListTopEl);

  for (var i = 0; i < stores.length; i ++){
    stores[i].simulateCookies();
    var salesListInsideEl = document.createElement('ul');
    salesListInsideEl.textContent = myStores[i].storeName + ' Store';
    salesListTopEl.appendChild(salesListInsideEl);

    var makeBrEl = document.createElement('br');
    salesListInsideEl.appendChild(makeBrEl);

    makeBrEl = document.createElement('br');
    salesListInsideEl.appendChild(makeBrEl);

    for ( var j = 0 ; j < stores[i].estimatedCookiesPerHour.length ; j ++){
      var liBuild = ( function(storeOpenTime) { if(storeOpenTime < 12) { return storeOpenTime + 'am: '; } else if (storeOpenTime > 12 ) { return (storeOpenTime - 12 + 'pm: ');} else if (storeOpenTime = 12 ) { return storeOpenTime + 'pm: '; };}(j + stores[i].storeOpenTime) ) + stores[i].estimatedCookiesPerHour[j] + ' cookies';
      salesListInsideEl.innerHTML = salesListInsideEl.innerHTML + '<li>' + liBuild + '</li>';
      console.log(stores[i].estimatedCookiesPerHour[j]);
    }
    var salesTotalEl = document.createElement('li');
    salesTotalEl.textContent = 'Total: ' + stores[i].totalCookiesPerDay + ' cookies';
    salesListInsideEl.appendChild(salesTotalEl);

    makeBrEl = document.createElement('br');
    salesListInsideEl.appendChild(makeBrEl);
  }
};

salesReport(stores);
