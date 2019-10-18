import { BaseObject } from '@clappr/core'

export default class HLSEvents extends BaseObject {
  constructor(playback) {
    super()
    this.playback = playback
  }
  ready() {
    this.trigger('flashready')
  }
  videoSize(width, height) {
    this.trigger('videosizechanged', width, height)
  }
  complete() {
    this.trigger('complete')
  }
  error(code, url, message) {
    this.trigger('error', code, url, message)
  }
  manifest(duration, loadmetrics) {
    this.trigger('manifestloaded', duration, loadmetrics)
  }
  audioLevelLoaded(loadmetrics) {
    this.trigger('audiolevelloaded', loadmetrics)
  }
  levelLoaded(loadmetrics) {
    this.trigger('levelloaded', loadmetrics)
  }
  levelEndlist(level) {
    this.trigger('levelendlist', level)
  }
  fragmentLoaded(loadmetrics) {
    this.trigger('fragmentloaded', loadmetrics)
  }
  fragmentPlaying(playmetrics) {
    this.trigger('fragmentplaying', playmetrics)
  }
  position(timemetrics) {
    this.trigger('timeupdate', timemetrics)
  }
  state(newState) {
    this.trigger('playbackstate', newState)
  }
  seekState(newState) {
    this.trigger('seekstate', newState)
  }
  switch(newLevel) {
    this.trigger('levelchanged', newLevel)
  }
  audioTracksListChange(trackList) {
    this.trigger('audiotracklistchanged', trackList)
  }
  audioTrackChange(trackId) {
    this.trigger('audiotrackchanged', trackId)
  }
}
