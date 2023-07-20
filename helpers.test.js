describe("Helpers test with setup and teardown", function() {
    beforeEach(function(){
        //initialization
        billAmtInput.value = 50;
        tipAmtInput.value = 10;
        submitPaymentInfo();
    });
    

    it('should get the sum of the bill from all payments on sumPaymentTotal()', function(){
        expect(sumPaymentTotal('billAmt')).toEqual(50);

        billAmtInput.value = 80;
        tipAmtInput.value = 16;

        submitPaymentInfo();
        expect(sumPaymentTotal('billAmt')).toEqual(130);
    });

    it('should get the sum of the tip from all payments on sumPaymentTotal()', function(){
        expect(sumPaymentTotal('tipAmt')).toEqual(10);

        billAmtInput.value = 80;
        tipAmtInput.value = 16;

        submitPaymentInfo();
        expect(sumPaymentTotal('tipAmt')).toEqual(26);
    });

    it('should get the sum of the tip percentage from all payments on sumPaymentTotal()', function(){
        expect(sumPaymentTotal('tipPercent')).toEqual(20);

        billAmtInput.value = 80;
        tipAmtInput.value = 16;

        submitPaymentInfo();
        expect(sumPaymentTotal('tipPercent')).toEqual(40);
    });

    it('should get the tip percentage from a single payment on calculateTipPercent()', function(){
        expect(calculateTipPercent(50,10)).toEqual(20);
        expect(calculateTipPercent(2000,0)).toEqual(0);
    });

    it('should generate new td from value and append to tr on appendTd(tr, value)', function () {
        let newTr = document.createElement('tr');
    
        appendTd(newTr, 'test');
    
        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('test');
    });

    it('should generate delete td and append to tr on appendDeleteBtn(tr, type)', function () {
        let newTr = document.createElement('tr');
    
        appendDeleteBtn(newTr);
    
        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('X');
    });


    afterEach(function() {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        allPayments = {};
        paymentId = 0;
    });
});