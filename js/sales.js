
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
      this.totalCookiesPerDay += this.estimatedCookiesPerHour[i];
    }
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
      this.totalCookiesPerDay += this.estimatedCookiesPerHour[i];
    }
  },
};

var stores = [pikePlaceStore,seaTacAirportStore,southCenterStore,bellevueSquareStore,alkiStore];

function salesReport( myStores ) {
  var salesListTopEl = document.createElement('ul');
  salesListTopEl.textContent = '';
  document.body.appendChild(salesListTopEl);

  for (var i = 0; i < stores.length; i ++){
    stores[i].simulateCookies();
    var salesListInsideEl = document.createElement('ul');
    salesListTopEl.appendChild(salesListInsideEl);

    var liBuild = document.createElement('p');
    liBuild.textContent = myStores[i].storeName + ' Store';
    salesListInsideEl.appendChild(liBuild);

    var makeBrEl = document.createElement('br');

    for ( var j = 0 ; j < stores[i].estimatedCookiesPerHour.length ; j ++){
      liBuild = ( function(storeOpenTime) { if(storeOpenTime < 12) { return storeOpenTime + 'am: '; } else if (storeOpenTime > 12 ) { return (storeOpenTime - 12 + 'pm: ');} else if (storeOpenTime = 12 ) { return storeOpenTime + 'pm: '; };}(j + stores[i].storeOpenTime) ) + stores[i].estimatedCookiesPerHour[j] + ' cookies';
      salesListInsideEl.innerHTML = salesListInsideEl.innerHTML + '<li>' + liBuild + '</li>';
      // console.log(stores[i].estimatedCookiesPerHour[j]);
    }
    var salesTotalEl = document.createElement('li');
    salesTotalEl.textContent = 'Total: ' + stores[i].totalCookiesPerDay + ' cookies';
    salesListInsideEl.appendChild(salesTotalEl);

  //  makeBrEl = document.createElement('br');
    salesListInsideEl.appendChild(makeBrEl);
  }
};

salesReport(stores);
