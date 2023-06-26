
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement || {};

/**
 * Behavior generated from Timed Back and Forth Movement
 */
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement = class TimedBackAndForthMirroredMovement extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.Vertical = behaviorData.Vertical !== undefined ? behaviorData.Vertical : false;
    this._behaviorData.Speed = behaviorData.Speed !== undefined ? behaviorData.Speed : Number("100") || 0;
    this._behaviorData.Distance = behaviorData.Distance !== undefined ? behaviorData.Distance : Number("200") || 0;
    this._behaviorData.Timeout = behaviorData.Timeout !== undefined ? behaviorData.Timeout : Number("2") || 0;
    this._behaviorData.StartPosition = Number("0") || 0;
    this._behaviorData.LastPosition = Number("0") || 0;
    this._behaviorData.stuck = false;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.Vertical !== newBehaviorData.Vertical)
      this._behaviorData.Vertical = newBehaviorData.Vertical;
    if (oldBehaviorData.Speed !== newBehaviorData.Speed)
      this._behaviorData.Speed = newBehaviorData.Speed;
    if (oldBehaviorData.Distance !== newBehaviorData.Distance)
      this._behaviorData.Distance = newBehaviorData.Distance;
    if (oldBehaviorData.Timeout !== newBehaviorData.Timeout)
      this._behaviorData.Timeout = newBehaviorData.Timeout;
    if (oldBehaviorData.StartPosition !== newBehaviorData.StartPosition)
      this._behaviorData.StartPosition = newBehaviorData.StartPosition;
    if (oldBehaviorData.LastPosition !== newBehaviorData.LastPosition)
      this._behaviorData.LastPosition = newBehaviorData.LastPosition;
    if (oldBehaviorData.stuck !== newBehaviorData.stuck)
      this._behaviorData.stuck = newBehaviorData.stuck;

    return true;
  }

  // Properties:
  
  _getVertical() {
    return this._behaviorData.Vertical !== undefined ? this._behaviorData.Vertical : false;
  }
  _setVertical(newValue) {
    this._behaviorData.Vertical = newValue;
  }
  _toggleVertical() {
    this._setVertical(!this._getVertical());
  }
  _getSpeed() {
    return this._behaviorData.Speed !== undefined ? this._behaviorData.Speed : Number("100") || 0;
  }
  _setSpeed(newValue) {
    this._behaviorData.Speed = newValue;
  }
  _getDistance() {
    return this._behaviorData.Distance !== undefined ? this._behaviorData.Distance : Number("200") || 0;
  }
  _setDistance(newValue) {
    this._behaviorData.Distance = newValue;
  }
  _getTimeout() {
    return this._behaviorData.Timeout !== undefined ? this._behaviorData.Timeout : Number("2") || 0;
  }
  _setTimeout(newValue) {
    this._behaviorData.Timeout = newValue;
  }
  _getStartPosition() {
    return this._behaviorData.StartPosition !== undefined ? this._behaviorData.StartPosition : Number("0") || 0;
  }
  _setStartPosition(newValue) {
    this._behaviorData.StartPosition = newValue;
  }
  _getLastPosition() {
    return this._behaviorData.LastPosition !== undefined ? this._behaviorData.LastPosition : Number("0") || 0;
  }
  _setLastPosition(newValue) {
    this._behaviorData.LastPosition = newValue;
  }
  _getstuck() {
    return this._behaviorData.stuck !== undefined ? this._behaviorData.stuck : false;
  }
  _setstuck(newValue) {
    this._behaviorData.stuck = newValue;
  }
  _togglestuck() {
    this._setstuck(!this._getstuck());
  }
}

/**
 * Shared data generated from Timed Back and Forth Movement
 */
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.SharedData = class TimedBackAndForthMirroredMovementSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._TimedBackAndForthMovement_TimedBackAndForthMirroredMovementSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._TimedBackAndForthMovement_TimedBackAndForthMirroredMovementSharedData = new gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.SharedData(
      initialData
    );
  }
  return instanceContainer._TimedBackAndForthMovement_TimedBackAndForthMirroredMovementSharedData;
}

// Methods:
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3= [];
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects4= [];


gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].isFlippedY() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getY() < (gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getStartPosition()) - (gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDistance()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setStartPosition(Math.round((gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getPointY(""))));
}
}{for(var i = 0, len = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].resetTimer("BacknForth_timeout");
}
}{for(var i = 0, len = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].flipY(false);
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getY() > (gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getStartPosition()) + (gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDistance()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].isFlippedY()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setStartPosition(Math.round((gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getPointY(""))));
}
}{for(var i = 0, len = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].resetTimer("BacknForth_timeout");
}
}{for(var i = 0, len = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].flipY(true);
}
}}

}


};gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( !(gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].isFlippedY()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].timerElapsedTime("BacknForth_timeout", (gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTimeout())) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].flipY(true);
}
}{for(var i = 0, len = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].resetTimer("BacknForth_timeout");
}
}{for(var i = 0, len = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setStartPosition(Math.round((gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getPointY(""))));
}
}{for(var i = 0, len = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setstuck(false);
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].timerElapsedTime("BacknForth_timeout", (gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTimeout())) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].isFlippedY() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].flipY(false);
}
}{for(var i = 0, len = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].resetTimer("BacknForth_timeout");
}
}{for(var i = 0, len = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setStartPosition(Math.round((gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getPointY(""))));
}
}{for(var i = 0, len = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setstuck(false);
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLastPosition() == Math.round((gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getPointY(""))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getstuck()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].resetTimer("BacknForth_timeout");
}
}{for(var i = 0, len = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setstuck(true);
}
}}

}


};gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].isFlippedY()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getstuck()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setLastPosition(Math.round((gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getPointY(""))));
}
}{for(var i = 0, len = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].addForce(0, (gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeed()), 0);
}
}}

}


{

/* Reuse gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].isFlippedY() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getstuck()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setLastPosition(Math.round((gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getPointY(""))));
}
}{for(var i = 0, len = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].addForce(0, -((gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeed())), 0);
}
}}

}


};gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getStartPosition() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].resetTimer("BacknForth_timeout");
}
}{for(var i = 0, len = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setStartPosition(Math.round((gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getPointY(""))));
}
}}

}


{


gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.eventsList1(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.eventsList2(runtimeScene, eventsFunctionContext);
}


};gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].isFlippedX() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getX() > (gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getStartPosition()) + (gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDistance()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setStartPosition(Math.round((gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getPointX(""))));
}
}{for(var i = 0, len = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].resetTimer("BacknForth_timeout");
}
}{for(var i = 0, len = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].flipX(false);
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getX() < (gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getStartPosition()) - (gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDistance()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].isFlippedX()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setStartPosition(Math.round((gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getPointX(""))));
}
}{for(var i = 0, len = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].resetTimer("BacknForth_timeout");
}
}{for(var i = 0, len = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].flipX(true);
}
}}

}


};gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( !(gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].isFlippedX()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].timerElapsedTime("BacknForth_timeout", (gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTimeout())) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].flipX(true);
}
}{for(var i = 0, len = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].resetTimer("BacknForth_timeout");
}
}{for(var i = 0, len = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setStartPosition(Math.round((gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getPointX(""))));
}
}{for(var i = 0, len = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setstuck(false);
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].timerElapsedTime("BacknForth_timeout", (gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTimeout())) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].isFlippedX() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].resetTimer("BacknForth_timeout");
}
}{for(var i = 0, len = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].flipX(false);
}
}{for(var i = 0, len = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setStartPosition(Math.round((gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getPointX(""))));
}
}{for(var i = 0, len = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setstuck(false);
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLastPosition() == Math.round((gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getPointX(""))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getstuck()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].resetTimer("BacknForth_timeout");
}
}{for(var i = 0, len = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setstuck(true);
}
}}

}


};gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].isFlippedX()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getstuck()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setLastPosition(Math.round((gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getPointX(""))));
}
}{for(var i = 0, len = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].addForce(-((gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeed())), 0, 0);
}
}}

}


{

/* Reuse gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].isFlippedX() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getstuck()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setLastPosition(Math.round((gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getPointX(""))));
}
}{for(var i = 0, len = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].addForce((gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeed()), 0, 0);
}
}}

}


};gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.eventsList7 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getStartPosition() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].resetTimer("BacknForth_timeout");
}
}{for(var i = 0, len = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setStartPosition(Math.round((gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getPointX(""))));
}
}}

}


{


gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.eventsList4(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.eventsList5(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.eventsList6(runtimeScene, eventsFunctionContext);
}


};gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.eventsList8 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getVertical() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getVertical()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.eventsList7(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects4.length = 0;

gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.eventsList8(runtimeScene, eventsFunctionContext);

return;
}


gdjs.registerBehavior("TimedBackAndForthMovement::TimedBackAndForthMirroredMovement", gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement);
