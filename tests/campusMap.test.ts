import test from 'node:test';
import assert from 'node:assert/strict';
import {campusPlaceStatus,type CampusStudent} from '../src/campusStatus';
const person:CampusStudent={id:'world',name:'전세계',color:'#ff347f',place:'band',available:false,visited:false};

test('campus labels distinguish completed visits from unavailable students',()=>{
 assert.equal(campusPlaceStatus([person],false),'지금은 만날 수 없어요');
 assert.equal(campusPlaceStatus([{...person,visited:true}],false),'오늘 만남 완료');
 assert.equal(campusPlaceStatus([{...person,available:true}],false),'만남 가능 1명');
 assert.equal(campusPlaceStatus([{...person,visited:true},{...person,id:'seoyul'}],false),'지금은 만날 수 없어요');
 assert.equal(campusPlaceStatus([],false),'장소 살펴보기');
 assert.equal(campusPlaceStatus([{...person,available:true}],true),'관계 조건 필요');
});
