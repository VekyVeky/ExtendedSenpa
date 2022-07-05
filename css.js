(function() {
    let style = 
`<style>
.loop-holder {
    display: flex;
    white-space: nowrap;
    overflow: hidden;
  }
.loop-holder__text {
    animation: textLoop 10s linear infinite;
    font-size: 100%;
    padding-right: .35em;
    resize: none;
    color: red;
    font-weight: bold;
}
@keyframes textLoop {
    0% {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0)
    }
    100% {
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0)
    }
}
#new-panel .partition.left, #settings-panel .partition.left canvas {
    position: absolute;
    top: 0;
    left: 0;
    background-color: black;
}
#huds #chat-room div .nick #legend {
    animation: colorRotate 5s linear 0s infinite;
}
@keyframes colorRotate {
    from {
      color: #6666ff;
    }
    10% {
      color: #0099ff;
    }
    50% {
      color: #00ff00;
    }
    75% {
      color: #ff3399;
    }
    100% {
      color: #6666ff;
    }
}
#menu .main-menu #EXT-locked-name {
    color: #4bff00;
    font-weight: 800;
    font-size: 18px;
    position: relative;
    top: 5px;
    right: 60px;
    width: 0px;
}
#Extended-Version {
    animation: colorRotate 5s linear 0s infinite;
    font-weight: 800;
    font-size: 16.4px;
    position: relative;
    bottom: 193px;
    left: 21px;
    height: 0px;
}
#new-panel .partition.right .setting.opt-toggle1 .name, #settings-panel .partition.right .setting.opt-toggle1 .name {
    font-weight: 500;
    font-size: 18px;
    width: 250px;
    display: inline-block;
}
#new-panel .partition.right .setting.opt-toggle1 .toggle-btn, #settings-panel .partition.right .setting.opt-toggle1 .toggle-btn {
    width: 35px;
    height: 20px;
    position: relative;
    cursor: pointer;
    display: inline-block;
    left: 274px;
}
#new-panel .partition.right .setting.opt-toggle1 .toggle-btn .slide, #settings-panel .partition.right .setting.opt-toggle1 .toggle-btn .slide {
    height: 12px;
    border-radius: 5px;
    background: #555;
    width: 35px;
    position: absolute;
    top: 7px;
    transition: all .5s;
}
#new-panel .partition.right .setting.opt-toggle1 .toggle-btn .ball, #settings-panel .partition.right .setting.opt-toggle1 .toggle-btn .ball {
    border-radius: 50%;
    width: 18px;
    height: 18px;
    background: #fff;
    position: absolute;
    top: 4px;
    left: 0;
    transition: all .5s;
}
#new-panel .partition.right .setting.opt-toggle1 .dropdown-box, #settings-panel .partition.right .setting.opt-toggle1 .dropdown-box {
    width: 200px;
    text-align: right;
    font-weight: 500;
    font-size: 18px;
    display: inline-block;
    white-space: nowrap;
    position: relative;
    cursor: pointer;
}
#new-panel .partition.right .setting.opt-toggle1 .dropdown-box .selected, #settings-panel .partition.right .setting.opt-toggle1 .dropdown-box .selected {
    display: inline-block;
    width: 175px;
}
#new-panel .partition.right .setting.opt-toggle1 .dropdown-box i, #settings-panel .partition.right .setting.opt-toggle1 .dropdown-box i {
    width: 20px;
    margin-left: 5px;
}
#new-panel .partition.right .setting.opt-toggle1 .dropdown-box .dropdown-list, #settings-panel .partition.right .setting.opt-toggle1 .dropdown-box .dropdown-list {
    display: none;
    position: absolute;
    background: #444;
    min-width: 100px;
    top: 20px;
    right: 0;
    text-align: center;
    z-index: 1;
}
#new-panel .partition.right .setting.opt-toggle1 .dropdown-box .dropdown-list .dropdown-item, #settings-panel .partition.right .setting.opt-toggle1 .dropdown-box .dropdown-list .dropdown-item {
    padding: 4px 8px;
}
#new-panel .partition.right .setting, #settings-panel .partition.right .setting {
    padding: 16px;
    transition: all .5s;
}
#huds #emoji_tab_button {
    position: fixed;
    bottom: 50px;
    left: 270px;
    width: 45px;
    height: 45px;
}
#huds #emoji_tab_list {
    width: 225px;
    height: 342px;
    position: fixed;
    bottom: 50px;
    left: 270px;
    transform-origin: left;
    background: rgba(10,10,10,.3);
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 5px;
    grid-auto-rows: 36px;
}
#huds .leaderboard-hud #leaderboard-positions {
    font-weight: 600;
}
#huds #chat-room div {
    font-weight: 600;
}
.emoji_text:hover {
    transform: scale(1.3);
    }
#menu .main-menu .panel.right .list-container .list-row:hover {
    background: #ffffff3d;
}
#menu .main-menu .panel.right .region-selectors .tab.active {
    background: #3330;
}
#ad-slot-center-panel, #main-left-panel {
    background-color: #3330;
}
#menu .main-menu .panel.center .input-field {
    background: #28282857;
}
#menu .main-menu .panel.right .region-selectors .tab {
    background: #3330;
}
#menu .main-menu .panel.right .list-container {
    background: #3330;
}
.account-profile .account-panel {
    background-color: #3330;
}
#menu .main-menu .panel.right .list-container #server-list {
    background: #3330;
}
#account-panel #pf-avatar {
    border: 6px solid #3330;
    background-color: #3330;
}
#new-panel .partition.left .tab:hover,#settings-panel .partition.left .tab:hover {
    background: #222
}
#menu .main-menu {
    background-image: url();
    background-size: 1015px 539px;
}
</style>`;
