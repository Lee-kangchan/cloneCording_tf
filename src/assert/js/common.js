

$(function() {
    //
    //	jQuery.each(jQuery(".comDatepicker"), function(i) {
    //		jQuery(this).datepicker({
    //					monthNamesShort : ['1월', '2월', '3월', '4월', '5월', '6월',
    //							'7월', '8월', '9월', '10월', '11월', '12월'],
    //					dayNamesMin : ['일', '월', '화', '수', '목', '금', '토'],
    //					dateFormat : 'yy-mm-dd',
    //					showOn : 'both',
    //					changeMonth : true,
    //					changeYear : true,
    //					buttonImage : '/images/egovframework/common/calendar.png',
    //					buttonImageOnly : true,
    //					buttonText : "달력",
    //					yearRange : 'c-20:c+1',
    //					showButtonPanel : false
    //				}).attr("readonly", "readonly");
    //	});
    
        // 숫자만
        $(".onlyNumber").keydown(function(){
            return onlyNumber(event);
        });
    
        // 영어 대문자만 입력
        $(".onlyEngUpper").keydown(function() {
            return onlyEngUpper(event);
        });
    
    
        //조변경 이벤트
        $("#selectAreaJo").change(function(){
            var joGroup = $("#selectAreaJo").val();
    
            if(joGroup != ""){
                $.ajax({
                    type: "POST",
                    data: {"selectAreaJo" : joGroup
                            },
                    dataType: 'json',
                    url: "/common/selectAreaGroupListAjax.do",
                    success:function(data){
    
                        var html ='';
                        html += '<option value="">선택</option>';
    
                        for(var i = 0; i < data.resultList.length ; i++){
                            html += '<option value="' + data.resultList[i].areaGroup + '">' + data.resultList[i].areaGroup + '</option>';
                        }
    
                        $("#selectAreaGroup").empty();
                        $("#selectAreaGroupLabel").empty().append('<option value="">선택</option>') ;
                        $("#selectAreaGroup").append(html);
    
    
                        // 배차 페이지 권역기동 부분 이벤트
                        if( $("#sideSelectAreaGroup").length != 0 ){
                            $("#sideSelectAreaGroup").empty();
                            $("#sideSelectAreaGroupLabel").empty().append('<option value="">선택</option>') ;
                            $("#sideSelectAreaGroup").append(html);
                            $("#sideSelectAreaJo").val(joGroup).prop("selected", true);
                        }
    
                    },error: function(e){
                        alert("목록 조회에 실패하였습니다. 새로고침 후 다시 이용해 주세요");
                    }
                });
            }
        });
    
        // 권역 그룹 변경 이벤트
        $("#selectAreaGroup").change(function(){
            var selectAreaGroup = $("#selectAreaGroup").val();
    
            if(selectAreaGroup != ""){
                $.ajax({
                    type: "POST",
                    data: {"selectAreaGroup" : selectAreaGroup
                            },
                    dataType: 'json',
                    url: "/common/selectAreaGroupLabelListAjax.do",
                    success:function(data){
    
                        var html ='';
                        html += '<option value="">선택</option>';
    
                        for(var i = 0; i < data.areaGroupList.length ; i++){
                            html += '<option value="' + data.areaGroupList[i].areaGroupLabel + '">' + data.areaGroupList[i].areaGroupLabel + '</option>';
                        }
    
                        $("#selectAreaGroupLabel").empty();
                        $("#selectAreaGroupLabel").append(html);
    
                        // 배차 페이지 권역기동 부분 이벤트
                        if( $("#sideSelectAreaGroupLabel").length != 0 ){
                            $("#sideSelectAreaGroupLabel").empty();
                            $("#sideSelectAreaGroupLabel").append(html);
                            $("#sideSelectAreaGroup").val(selectAreaGroup).prop("selected", true);
                        }
    
                    },error: function(e){
                        alert("목록 조회에 실패하였습니다. 새로고침 후 다시 이용해 주세요");
                    }
                });
            }
        });
    
    
    }); // END jQuery(function()
    
    
    
    //폼 서브밋
    function formSubmit(url, formId) {
        var form = jQuery("form#" + formId);
        form.attr("action", url);
        form.attr("target", "_self");
        form.attr("method", "post");
        form[0].submit();
    }
    
    
    //벨리데이션 체크( 텍스트값까지 체크가 필요할경우 넘어온 textId로 추가체크 )
    function valiChk(textId) {
        var returnChk = true;
        // class 네임에 valiChk가 들어가있으면 벨리데이션 체크후 값이 없으면 title속성안의 네임으로 alert창으로 보여준후
        // 포커스시킨다.
        jQuery.each(jQuery(".valiChk"),
                function(i) {
                    if (jQuery(this).val() == "") {
                        if (jQuery(this).attr("id") == textId
                                && (textId != null && textId != ""
                                        && textId != "undefined" && jQuery(
                                        "#" + textId).text().trim() != "")) {
                            return false;
                        }
                        alert(jQuery(this).attr("title") + "의 값이 비어있습니다.");
                        returnChk = false;
                        jQuery(this).focus();
                        return false;
                    }
                    if (jQuery(this).attr("id") == "hpNo") {
                        if (!(lengthChk(jQuery(this).val(), 11))) {
                            // alert(jQuery(this).attr("title")+"의 값을 11자리 모두
                            // 입력바랍니다.");
                            // returnChk = false;
                            // jQuery(this).focus();
                            // return false;
                            return true;
                        }
                    }
                });
        return returnChk;
    }
    
    
    
    
    
    //숫자만 또는 숫자 + . + tab
    function onlyNumber(event, exception) {
        event = event || window.event;
        var keyID = (event.which) ? event.which : event.keyCode;
    
        if ((keyID >= 48 && keyID <= 57)
                || (keyID >= 96 && keyID <= 105)
                || keyID == 8 || keyID == 9 || keyID == exception) {
            return;
        } else {
            return false;
        }
    }
    
    //숫자만 또는 숫자 + . + tab
    function onlyEngUpper(event, exception) {
        event = event || window.event;
        var keyID = (event.which) ? event.which : event.keyCode;
    //	console.log(keyID);
    
    //	if( ( event.keyCode < 65) || ( keyCode > 122 && event.keyCode <= 127)  ){
        if( (keyID >= 65 && keyID <= 90) || keyID == 8 || keyID == 9 || keyID == exception) {
            return;
        } else {
            return false;
        }
    }
    
    
    
    
    
    /*//벨리데이션 체크( 텍스트값까지 체크가 필요할경우 넘어온 textId로 추가체크 )
    function valiChk(textId) {
        var returnChk = true;
        // class 네임에 valiChk가 들어가있으면 벨리데이션 체크후 값이 없으면 title속성안의 네임으로 alert창으로 보여준후
        // 포커스시킨다.
        jQuery.each(jQuery(".valiChk"),
                function(i) {
                    if (jQuery(this).val() == "") {
                        if (jQuery(this).attr("id") == textId
                                && (textId != null && textId != ""
                                        && textId != "undefined" && jQuery(
                                        "#" + textId).text().trim() != "")) {
                            return false;
                        }
                        alert(jQuery(this).attr("title") + "의 값이 비어있습니다.");
                        returnChk = false;
                        jQuery(this).focus();
                        return false;
                    }
                    if (jQuery(this).attr("id") == "hpNo") {
                        if (!(lengthChk(jQuery(this).val(), 11))) {
                            // alert(jQuery(this).attr("title")+"의 값을 11자리 모두
                            // 입력바랍니다.");
                            // returnChk = false;
                            // jQuery(this).focus();
                            // return false;
                            return true;
                        }
                    }
                });
        return returnChk;
    }*/
    
    
    /*
     * 자바스크립트 슬립 함수
     */
    function sleep (delay) {
       var start = new Date().getTime();
       while (new Date().getTime() < start + delay);
    }
    
    /*
     * 쿠키 관련 함수
     */
    
    //쿠키저장하기
    function setCookie( name, value, expiredays )
    {
        var todayDate = new Date();
        todayDate.setDate( todayDate.getDate() + expiredays );
        document.cookie = name + '=' + escape( value ) + '; path=/; expires=' + todayDate.toGMTString() + ';'
    }
    
    //쿠키 불러오기
    function getCookie(name)
    {
      var obj = name + "=";
      var x = 0;
      while ( x <= document.cookie.length )
      {
          var y = (x+obj.length);
          if ( document.cookie.substring( x, y ) == obj )
          {
              if ((endOfCookie=document.cookie.indexOf( ";", y )) == -1 )
                  endOfCookie = document.cookie.length;
              return unescape( document.cookie.substring( y, endOfCookie ) );
          }
          x = document.cookie.indexOf( " ", x ) + 1;
          if ( x == 0 )
              break;
      }
      return "";
    }
    
    
    //숫자 콤마 세자리 변경
    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    
    //콤마제거
    function removeComma(n) {
      if ( typeof n == "undefined" || n == null || n == "" ) {
          return "";
      }
      var txtNumber = '' + n;
      return txtNumber.replace(/(,)/g, "");
    }
    
    
    // 페이징 처리
    function goPaging(url, formId, selectPageNum) {
        $('#nowPage').val(selectPageNum);
        formSubmit(url, formId);
    }
    
    function goPaging2(url, formId, selectContentsNum) {
        $('#nowContents').val(selectContentsNum);
        formSubmit(url, formId);
    }
    
    
    //정렬 처리
    function sorting(url, formId, sorting, sortingType) {
        $('#sorting').val(sorting);
        $('#sortingType').val(sortingType);
        formSubmit(url, formId);
    }