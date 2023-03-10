// list 조회
var requestJson = {
    "type": "REQUEST",
    "payload": {
        "type": "READ_PROJECT_COMPONENT_LIST",
        "req": {
        }
    }
}

// detail 조회
var requestJson = {
    "type": "REQUEST",
    "payload": {
        "type": "READ_PROJECT_COMPONENT_DETAIL",
        "req": {
            "compName": "udc_camera",
            "uuid" : "/cm/project_udc/mobile/camera.xml"
        }
    }
}

studioAPI.exec(scwin.jsonDataCallBack, {}, requestJson);