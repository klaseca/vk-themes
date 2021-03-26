// ==UserScript==
// @name         VkThemes
// @include      https://vk.com/*
// @version      0.1.12
// @description  Themes for vk
// @author       klaseca
// @downloadURL  https://raw.githubusercontent.com/klaseca/vk-themes/master/vk.user.js
// @updateURL    https://raw.githubusercontent.com/klaseca/vk-themes/master/vk.meta.js
// @homepage     https://github.com/klaseca/vk-themes
// @run-at       document-start
// ==/UserScript==

(function () {
  'use strict';

  function addStyle(css) {
    const head = document.querySelector('head');
    if (head) {
      const style = document.createElement('style');
      style.append(document.createTextNode(css));
      head.append(style);
    }
  }

  function colorToUri(color) {
    return encodeURIComponent(`="${color}" `);
  }

  const themes = {
    dark: {
      backgroundColor: '#121212',
      logoColor: '#d4d4d4',
      accentColor: '#9FA8DA',
      accentTextColor: '#212121',
      sidebarIconColor: '#9FA8DA',
      onTopColor: '#222222',
      onTopText: 'rgba(255, 255, 255, 0.5)',
      onTopTextHover: 'rgba(255, 255, 255, 0.6)',
      headerColor: '#212121',
      headerHover: 'rgba(174, 183, 194, 0.12)',
      textColor: 'rgba(255, 255, 255, 0.7)',
      textInactiveColor: 'rgba(255, 255, 255, 0.5)',
      linkColor: '#92A8B9',
      panelColor: '#212121',
      panelHover: '#303030',
      panelHeader: '#303030',
      panelHeaderHover: '#424242',
      lineColor: '#303030',
      badgeColor: '#424242',
      popupColor: '#303030',
      popupHover: '#424242',
      popupLine: '#212121',
      buttonColor: '#303030',
      playlistColor: '#303030',
      playlistHover: '#424242',
      playlistLine: '#121212',
      playlistAccent: '#9FA8DA',
      playlistHeader: '#FFF176',
      popupLink: '#242424',
      popupLinkBottom: '#1e1e1e',
      popupLinkBorder: '#121212',
      messagesColor: '#212121',
      messagesActive: '#303030',
      messagesHover: '#353535',
      messagesLine: '#424242',
      messagesBottom: '#242424',
      dialogColor: '#303030',
      dialogHoverOrActive: '#424242',
      listSeparator: '#424242',
      votingSelect: '#5C6280'
    },
  };

  const theme = themes.dark;

  addStyle(`
    /* ---- Global style ---- */

    body {
      color: ${theme.textColor};
      background-color: ${theme.backgroundColor} !important;
    }

    a {
      color: ${theme.linkColor}
    }

    [dir="ltr"] .scroll_fix {
      background-color: ${theme.backgroundColor};
    }

    .wall_post_more,
    .wall_reply_more,
    .wall_copy_more,
    .wall_post_attaches_more {
      color: ${theme.linkColor} !important;
    }

    [dir] .TopHomeLink--logoWithText {
      background-image: url(data:image/svg+xml;charset=utf-8,%3Csvg%20fill%3D%22none%22%20height%3D%2225%22%20width%3D%22136%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M0%2011.5c0-5.42%200-8.13%201.68-9.82C3.37%200%206.08%200%2011.5%200h1c5.42%200%208.13%200%209.82%201.68C24%203.37%2024%206.08%2024%2011.5v1c0%205.42%200%208.13-1.68%209.82C20.63%2024%2017.92%2024%2012.5%2024h-1c-5.42%200-8.13%200-9.82-1.68C0%2020.63%200%2017.92%200%2012.5z%22%20fill%3D%22%232787f5%22%2F%3E%3Cg%20clip-rule%3D%22evenodd%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M6.5%207.5H4.75c-.5%200-.6.24-.6.5%200%20.46.6%202.76%202.76%205.8%201.45%202.07%203.49%203.2%205.34%203.2%201.11%200%201.25-.25%201.25-.68v-1.57c0-.5.1-.6.46-.6.26%200%20.7.13%201.74%201.13%201.19%201.19%201.38%201.72%202.05%201.72h1.75c.5%200%20.75-.25.6-.74-.15-.5-.72-1.2-1.47-2.05-.4-.49-1.02-1-1.2-1.26-.26-.34-.2-.49%200-.78%200%200%202.13-3%202.35-4.03.11-.37%200-.64-.53-.64H17.5a.76.76%200%2000-.76.5s-.9%202.16-2.15%203.57c-.41.41-.6.54-.82.54-.1%200-.27-.13-.27-.5V8.14c0-.44-.13-.64-.5-.64h-2.75c-.28%200-.45.2-.45.4%200%20.42.64.52.7%201.7v2.58c0%20.57-.1.67-.32.67-.6%200-2.04-2.18-2.9-4.67-.16-.48-.33-.68-.78-.68z%22%20fill%3D%22%23fff%22%2F%3E%3Cpath%20d%3D%22M66.86%2012.5c0%203.24-2.43%205.5-5.78%205.5s-5.78-2.26-5.78-5.5S57.73%207%2061.08%207s5.78%202.26%205.78%205.5zm-8.97%200c0%201.97%201.3%203.3%203.19%203.3s3.19-1.33%203.19-3.3c0-1.98-1.3-3.25-3.19-3.25s-3.19%201.28-3.19%203.25zm-17.14-.21c.95-.44%201.56-1.18%201.56-2.33%200-1.73-1.58-2.96-3.87-2.96h-5.27v11h5.5c2.37%200%204.02-1.29%204.02-3.05%200-1.33-.87-2.32-1.94-2.66zM35.6%209.01h2.83c.85%200%201.44.5%201.44%201.2s-.6%201.2-1.44%201.2h-2.83zM38.67%2016h-3.06V13.3h3.06c.96%200%201.59.55%201.59%201.36s-.63%201.33-1.59%201.33zM51.84%2018h3.19l-5.06-5.71L54.61%207h-2.9l-3.68%204.27h-.6V7H45v11h2.44v-4.38h.59zM76.47%207v4.34h-4.93V7H69.1v11h2.43v-4.44h4.93V18h2.43V7zM86.9%2018h-2.44V9.22h-3.8V7H90.7v2.22h-3.8zm9.5-11c-2.11%200-3.91.89-4.52%202.8l2.24.37c.34-.67%201.05-1.2%202.15-1.2%201.33%200%202.06.84%202.17%202.28h-2.32c-3.23%200-4.79%201.42-4.79%203.45%200%202.05%201.59%203.3%203.78%203.3%201.8%200%203-.72%203.53-1.63l.5%201.63h1.76v-6.18c0-3.19-1.74-4.82-4.5-4.82zm-.72%209c-1.19%200-1.9-.5-1.9-1.4%200-.85.57-1.44%202.43-1.44h2.35c0%201.8-1.19%202.84-2.88%202.84zm17.99%202h-3.2l-3.8-4.38h-.6V18h-2.43V7h2.43v4.27h.6L110.34%207h2.9l-4.63%205.29zm3.88%200h2.43V9.22h3.8V7h-10.04v2.22h3.8zM130.1%207c3.34%200%205.56%202.4%205.56%205.37%200%20.3-.02.55-.04.79h-8.54c.23%201.69%201.36%202.69%203.17%202.69%201.29%200%202.15-.4%202.68-1.2l2.29.39c-.88%202.01-2.83%202.96-5.12%202.96a5.28%205.28%200%2001-5.51-5.5c0-3.12%202.17-5.5%205.51-5.5zm2.92%204.25c-.4-1.37-1.4-2.15-2.92-2.15-1.48%200-2.47.74-2.87%202.15z%22%20fill${colorToUri(
        theme.logoColor
      )}%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E) !important;
    }

    [dir] .flat_button, [dir] .button_gray button, [dir] .button_blue button {
      background-color: ${theme.accentColor} !important;
      color: ${theme.accentTextColor} !important;
    }

    [dir="ltr"] .profile_msg_split .profile_btn_cut_left {
      border-right: 1px solid ${theme.panelColor} !important;
    }

    [dir] .media_voting {
      box-shadow: inset 0 0 0 1px ${theme.popupColor} !important;
      background-color: ${theme.popupColor} !important;
    }

    .media_voting_question {
      color: ${theme.textColor} !important;
    }

    [dir] .media_voting_option {
      background: ${theme.popupHover} !important;
    }

    .media_voting_option_text,
    .media_voting_option_percent {
      color: ${theme.textColor} !important;
    }

    [dir] .media_voting_option_leader .media_voting_option_bar {
      background: ${theme.votingSelect} !important;
    }

    /* ---- Settings style ---- */

    [dir] .settings_line {
      border-bottom: 1px solid ${theme.listSeparator} !important;
    }

    [dir] .settings_block_footer {
      border-top: 1px solid ${theme.panelColor} !important;
      background: ${theme.panelColor} !important;
    }

    [dir] .settings_privacy_row {
      border: solid ${theme.listSeparator} !important;
      border-width: 1px 0 !important;
    }

    [dir] .settings_separated_row + .settings_separated_row::after {
      background: ${theme.listSeparator} !important;
    }

    [dir] .settings_block_msg {
      border-bottom: 1px solid ${theme.listSeparator} !important;
    }

    [dir] .settings_bl_row {
      border-bottom: 1px solid ${theme.listSeparator} !important;
    }

    [dir] .settings_apps .apps_settings_row_wrap {
      border-bottom: 1px solid ${theme.listSeparator} !important;
    }

    [dir] .settings_table_row {
      border-bottom: 1px solid ${theme.listSeparator} !important;
    }

    [dir] .settings_block_msg {
      border-bottom: 1px solid ${theme.panelColor} !important;
    }

    [dir] .settings_history_table tr td {
      border-bottom: 1px solid ${theme.listSeparator} !important;
    }

    [dir] .settings_history_table tr:last-child td {
      border-bottom: none !important;
    }

    .settings_transfer_empty_box_header {
      color: ${theme.textColor} !important;;
    }

    /* ---- Notification style ---- */

    [dir] body.new_header_design .top_nav_btn.active {
      background-color: ${theme.headerHover} !important;
    }

    [dir] #top_notify_wrap {
      background: ${theme.panelColor} !important;
      border: 1px solid ${theme.backgroundColor} !important;
    }

    [dir] .feedback_row_wrap.unread:not(.feedback_row_touched) {
      background-color: ${theme.panelColor} !important;
    }

    [dir] .top_notify_cont .top_notify_header {
      border-top: 1px solid ${theme.listSeparator} !important;
    }

    [dir] .feedback_row, [dir] .feedback_sticky_row {
      border-top: 1px solid ${theme.listSeparator} !important;
    }

    [dir] .top_notify_cont .feedback_row:not(.dld).hover,
    [dir] .top_notify_cont .feedback_row:not(.dld):hover {
      background-color: ${theme.popupHover} !important;
    }

    [dir] .feedback_row_clickable:not(.feedback_row_touched):hover {
      background-color: ${theme.panelColor} !important;
    }

    .top_notify_header {
      color: ${theme.textColor} !important;
    }

    .top_notify_cont .feedback_header {
      color: ${theme.textColor} !important;
    }

    .top_notify_cont {
      color: ${theme.textColor} !important;
    }

    [dir] .top_notify_show_all {
      background-color: ${theme.panelHeader} !important;
      border-top: 1px solid ${theme.panelHeader} !important;
    }

    [dir] .top_notify_show_all:hover {
      background-color: ${theme.panelHeaderHover} !important;
    }

    [dir] .notify_sources_tt_content .line_cell:hover {
      background-color: ${theme.popupHover} !important;
    }

    [dir] .notify_sources_tt_content .content:not(:hover) .line_cell.selected {
      background-color: ${theme.panelHover} !important;
    }

    .notify_sources_tt_content .line_cell .info {
      color: ${theme.textColor} !important;
    }

    .header_side_link, .header_side_link a {
      color: ${theme.linkColor} !important;
    }

    [dir] .feedback_row_clickable:not(.feedback_row_touched):hover {
      border-bottom: 1px solid ${theme.panelHeaderHover} !important;
    }

    [dir] .feed_row ~ .feed_row .feedback_row_clickable:not(.feedback_row_touched):hover {
      border-top: 1px solid ${theme.panelHeaderHover} !important;
    }

    [dir] .page_block #all_shown {
      border-top: 1px solid ${theme.panelHeaderHover} !important;
    }

    /* ---- Sticker shop style ---- */

    [dir] .im_stickers_store_wrap .ui_tabs {
      background: #212121 !important;
    }

    .ui_tab_plain {
      color: ${theme.linkColor} !important;
    }

    [dir] .im_stickers_bl_wrap {
      background: #303030 !important;
    }

    [dir] .im_sticker_bl {
      background: #212121 !important;
    }

    .im_sticker_bl_name {
      color: ${theme.textColor} !important;
    }

    /* ---- Sticker style ---- */

    [dir] .StickerPackPreview__header {
      background-color: #212121 !important;
      border-bottom: 1px #212121 solid !important;
    }

    .StickerPackPreview__title {
      color: ${theme.textColor} !important;
    }

    .StickerPackPreview__description {
      color: ${theme.textColor} !important;
    }

    [dir] .StickerPackPreview__items {
      background: #303030 !important;
    }

    [dir] .StickerPackPreview__footer {
      background-color: #212121 !important;
      border-top: 1px #212121 solid !important;
    }

    [dir] .Button--primary {
      background-color: ${theme.accentColor} !important;
    }

    [dir] .Button--primary {
      background-color: ${theme.accentColor} !important;
      color: ${theme.accentTextColor} !important;
    }

    [dir] .StickerPackPreview__gift::before {
      background: url(data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2214%22%20height%3D%2215%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M1.94808%203.81818C3.84255%205.09091%207%205.09091%207%205.09091S6.5224%201.54206%205.56721.697095c-.9552-.92946-2.57903-.92946-3.53422%200C1.0778%201.54206.992889%202.97322%201.94808%203.81818zm10.10382%200C10.1574%205.09091%207%205.09091%207%205.09091S7.4776%201.54206%208.43279.697095c.9552-.92946%202.57901-.92946%203.53421%200%20.9552.844965%201.0401%202.276125.0849%203.121085zm-8.93073-.7541c-.42821-.43165-.42821-1.03596%200-1.46762.42821-.43165%201.0277-.43165%201.45591%200%20.4282.43166.51384%201.89927.51384%201.89927s-1.54154%200-1.96975-.43165zm7.75763%200c.4283-.43165.4283-1.03596%200-1.46762-.4282-.43165-1.02765-.43165-1.45586%200-.42821.43166-.51385%201.89927-.51385%201.89927s1.54151%200%201.96971-.43165zM0%206v3h6V5H1c-.6%200-1%20.4-1%201zm1%208c0%20.6.4%201%201%201h4v-5H1v4zm7%201h4c.6%200%201-.4%201-1v-4H8v5zm5-10H8v4h6V6c0-.6-.4-1-1-1z%22%20fill${colorToUri(
        theme.accentTextColor
      )}%2F%3E%3C%2Fsvg%3E) 50% 50% no-repeat !important;
    }

    .StickersPriceButton__regular {
      color: ${theme.accentTextColor} !important;
    }

    [dir] .StickersPriceButton__regular::after {
      background-color: ${theme.accentTextColor} !important;
    }

    [dir] .StickerPackPreview__copyrights {
      background: #303030 !important;
    }

    /* ---- Video style ---- */

    a > .post_video_title {
      color: ${theme.linkColor} !important;
    }

    [dir] .mv_info {
      background: #212121 !important;
    }

    [dir] .mv_actions_block {
      border-bottom: 1px solid #303030 !important;
    }

    [dir="ltr"] .mv_info_narrow_column {
      border-left: 1px solid #303030 !important;
    }

    .mv_title {
      color: ${theme.textColor} !important;
    }

    .mv_recom_block_title {
      color: ${theme.textColor} !important;
    }

    [dir] .mv_comments_summary {
      border-bottom: 1px solid #303030 !important;
    }

    .mv_comments_summary {
      color: ${theme.textColor} !important;
    }

    #mv_reply_form_wrap > #mv_reply_form > div > div {
      border-top: 1px solid #303030 !important;
    }

    /* ---- Images style ---- */

    [dir] .pv_white_bg {
      background: #424242 !important;
    }

    [dir] .photos_container .photos_row {
      background-color: #424242 !important;
      border: 2px solid #424242 !important;
    }

    [dir] .pv_cont .narrow_column {
      background-color: #424242 !important;
    }

    [dir] .pv_author_block {
      background-color: #303030 !important;
      border-bottom: 1px solid #303030 !important;
    }

    [dir] .pv_comments {
      border-top: 1px solid #212121 !important;
    }

    [dir] .wall_module .reply_box, [dir] .wall_module .reply_fakebox_wrap {
      border-radius: 0 !important;;
      border-top: 1px solid #212121 !important;
    }

    .pv_cont .pv_narrow_column_cont {
      background-color: #424242 !important;
    }

    [dir] .wall_module .reply ~ .reply .reply_wrap, [dir] .wall_module .reply ~ .reply .dld {
      border-top: 1px solid #303030 !important;
    }

    [dir] .photos_period_delimiter_fixed {
      background-color: #303030 !important;
    }

    [dir] .pv_cont .pv_comments_header {
      background: #303030 !important;
    }

    [dir] .pv_cont .pv_comments_header:hover {
      background: #505050 !important;
    }

    /* ---- Music in header style ---- */

    [dir] .audio_layer_container .audio_page_player_wrap {
      background-color: #303030 !important;
    }

    .audio_layer_container .audio_page_player_wrap > div {
      border-bottom: 1px solid #303030 !important;
    }

    [dir] .audio_page_player2 .audio_page_player_track_slider.slider.slider_size_1 .slider_back,
    [dir] .audio_page_player2 .audio_page_player_volume_slider.slider.slider_size_1 .slider_back {
      background-color: #D3D9DE !important;
    }

    .audio_page__audio_rows .audio_row.audio_has_lyrics .audio_row__title_inner,
    .ap_layer__content .audio_row.audio_has_lyrics .audio_row__title_inner,
    ._playlist_page_content_block .audio_row.audio_has_lyrics .audio_row__title_inner,
    ._audio_section__search .audio_row.audio_has_lyrics .audio_row__title_inner,
    .audio_section_global_search__audios_block .audio_row.audio_has_lyrics .audio_row__title_inner {
      color: ${theme.linkColor} !important;
    }

    [dir] .eltt {
      background-color: #212121 !important;
      border: 1px solid #121212 !important;
    }

    [dir] .audio_layer_container .audio_page__footer {
      border-top: 1px solid #424242 !important;
    }

    [dir] .ui_search_sugg_list {
      border: 1px solid #121212 !important;
      border-top: 1px solid #424242 !important;
      background-color: #303030 !important;
    }

    [dir] .ui_search_sugg_list .ui_search_suggestion_selected {
      background-color: #424242 !important;
    }

    /* ---- Music style ---- */

    [dir] .audio_page_player2 .audio_page_player_play .icon {
      background-color: ${theme.playlistAccent} !important;
    }

    [dir] .audio_page_player2 .audio_page_player_prev .icon {
      background-image: url(data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%229%22%20height%3D%2210%22%20viewBox%3D%220%200%209%2010%22%3E%3Cpath%20fill${colorToUri(
        theme.playlistAccent
      )}fill-rule%3D%22evenodd%22%20d%3D%22M2%204.709V.596A.604.604%200%200%200%201.4%200H.6C.27%200%200%20.267%200%20.596v8.808c0%20.33.278.596.6.596h.8c.331%200%20.6-.267.6-.596V5.291c.033.04.074.079.123.114L8.19%209.803c.447.324.81.138.81-.408V.604c0-.55-.359-.735-.81-.408L2.123%204.594A.65.65%200%200%200%202%204.71z%22%2F%3E%3C%2Fsvg%3E) !important;
    }

    [dir] .audio_page_player2 .audio_page_player_next .icon {
      background-image: url(data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%229%22%20height%3D%2210%22%20viewBox%3D%220%200%209%2010%22%3E%3Cpath%20fill${colorToUri(
        theme.playlistAccent
      )}fill-rule%3D%22evenodd%22%20d%3D%22M7%204.709V.596C7%20.266%207.278%200%207.6%200h.8c.331%200%20.6.267.6.596v8.808a.604.604%200%200%201-.6.596h-.8a.598.598%200%200%201-.6-.596V5.291a.653.653%200%200%201-.123.114L.81%209.803c-.447.324-.81.138-.81-.408V.604c0-.55.359-.735.81-.408l6.067%204.398A.65.65%200%200%201%207%204.71z%22%2F%3E%3C%2Fsvg%3E);
    }

    [dir] .CatalogSection, [dir] .CatalogBlock--divided {
      background-color: #212121 !important;
    }

    [dir] .audio_page_layout .audio_search_wrapper {
      background-color: #212121 !important;
    }

    [dir] .CatalogSection--divided {
      background: initial !important;
    }

    [dir] .page_block._audio_page_content_block::before {
      box-shadow: none !important;
    }

    [dir] .CatalogBlock--divided::before {
      box-shadow: none !important;
    }

    [dir] .CatalogBlock__layout--in_block_separator {
      background-color: ${theme.listSeparator} !important;
    }

    h2 {
      color: ${theme.textColor} !important;
    }

    .audio_page__shuffle_all .audio_page__shuffle_all_button {
      color: ${theme.textColor} !important;
    }

    [dir] .audio_page__shuffle_all .audio_page__shuffle_all_button:hover {
      background-color: #303030 !important;
    }

    [dir] .audio_page_player2.audio_page_player_fixed {
      background-color: #303030 !important;
    }

    .audio_page_player2 .audio_page_player_title_song {
      color: ${theme.textColor} !important;
    }

    [dir] .audio_page_player2 .audio_page_player_track_slider.slider.slider_size_1 .slider_handler,
    [dir] .audio_page_player2 .audio_page_player_volume_slider.slider.slider_size_1 .slider_handler {
      background-color: ${theme.playlistAccent} !important;
    }

    [dir] .slider .slider_amount, [dir] .slider .slider_back {
      background-color: ${theme.playlistAccent} !important;
    }

    [dir] .audio_page_player .slider .slider_back,
    [dir] .audio_inline_player .slider .slider_back {
      background-color: #D3D9DE !important;
    }

    [dir] .audio_page_player2 .audio_page_player_track_slider.slider.slider_size_1 .slider_handler,
    [dir] .audio_page_player2 .audio_page_player_volume_slider.slider.slider_size_1 .slider_handler {
      background-color: ${theme.playlistAccent} !important;
    }

    [dir] .BannerItem {
      background-color: ${theme.panelHeader} !important;
    }

    .BannerItem__title {
      color: ${theme.textColor} !important;
    }

    .audio_block_small_item--artist .title_link,
    .audio_block_small_item--curator .title_link {
      color: ${theme.textColor} !important;
    }

    .audio_page_layout .audio_item__title,
    .audio_page_layout .audio_item__title > a {
      color: ${theme.textColor} !important;
    }

    [dir] .audio_pl_item2 .audio_pl__cover {
      background-color: ${theme.panelColor} !important;
    }

    [dir] .CatalogBlock__separator {
      background-color: ${theme.listSeparator} !important;
    }

    [dir="ltr"] .CatalogSection__leftColumn {
      border-right: 1px solid ${theme.listSeparator} !important;
    }

    [dir] .audio_page_layout .audio_friends_list {
      background-color: ${theme.panelColor} !important;
    }

    .audio_friend_name, .audio_friend_name_now {
      color: ${theme.textColor} !important;
    }

    .PlaceholderSmall__title {
      color: ${theme.textColor} !important;
    }

    .PlaceholderSmall__text {
      color: ${theme.textColor} !important;
    }

    [dir] .ui_search_new.ui_search_dark .ui_search_input_inner {
      border: 0 !important;
      background-color: ${theme.panelColor} !important;
    }

    [dir] .ui_search_new.ui_search_dark .ui_search_input_inner > input {
      background-color: #303030 !important;
    }

    .CatalogBlock .ui_search_new .ui_search_button_search {
      border: none !important;
      background-color: #303030 !important;
    }

    [dir] .ui_search.ui_search_new {
      border-bottom: none !important;
    }

    [dir] .audio_promo {
      box-shadow: 0 1px 0 0 ${theme.panelColor},0 0 0 1px ${theme.panelColor} !important;
    }

    /* ---- Upload style ---- */

    [dir] .photos_choose_upload_area {
      background-color: #212121 !important;
    }

    .photos_choose_upload_area {
      color: ${theme.linkColor} !important;
    }

    [dir] .photos_choose_upload_area:hover {
      background: #505050 !important;
    }

    [dir] .web_cam_photo {
      background-color: #212121 !important;
    }

    .web_cam_photo {
      color: ${theme.linkColor} !important;
    }

    [dir] .web_cam_photo:hover {
      background-color: #505050 !important;
    }

    [dir] .photos_choose_bottom {
      background-color: #303030 !important;
      border-top: 1px solid #303030 !important;
    }

    [dir] #video_choose_wrap > .ui_search_new.ui_search.ui_search_field_empty.video_search_input.ui_search_btn_large._wrap {
      background-color: #424242 !important;
    }

    [dir] .video_choose_upload_area {
      background-color: #212121 !important;
    }

    [dir] .video_choose_upload_area:hover {
      background-color: #505050 !important;
    }

    [dir] .video_add_external {
      background-color: #212121 !important;
    }

    [dir] .video_add_external:hover {
      background-color: #505050 !important;
    }

    .video_choose_upload_area {
      color: ${theme.linkColor} !important;
    }

    .video_add_external {
      color: ${theme.linkColor} !important;
    }

    [dir] .box_title .back:hover {
      background-color: #505050 !important;
    }

    [dir] .box_controls {
      background-color: #303030 !important;
      border-top: 1px solid #303030 !important;
    }

    ul.listing li span {
      color: ${theme.textColor} !important;
    }

    /* ---- Create playlist style ---- */

    [dir] .audio_pl_edit_box .ape_header {
      background-color: #424242 !important;
      border-bottom: 1px solid #424242 !important;
    }

    [dir] .audio_pl_edit_box .ape_add_audios_btn,
    [dir] .audio_pl_edit_box .ape_add_pl_audios_btn {
      border-bottom: 1px solid #303030 !important;
      background-color: #303030 !important;
    }

    .audio_pl_edit_box .ape_add_audios_btn,
    .audio_pl_edit_box .ape_add_pl_audios_btn {
      color: ${theme.textColor} !important;
    }

    [dir] .audio_pl_edit_box .ape_add_audios_btn:hover,
    [dir] .audio_pl_edit_box .ape_add_pl_audios_btn:hover {
      background-color: #505050 !important;
    }

    [dir] .audio_pl_edit_box .ape_cover {
      border: 1px solid #303030 !important;
      background-color: #303030 !important;
    }

    .audio_pl_edit_box .ape_cover_title {
      color: ${theme.linkColor} !important;
    }

    [dir] .audio_pl_edit_box .ape_list_header {
      background-color: #424242 !important;
    }

    /* ---- Friends style ---- */

    [dir] .friends_list_bl {
      border-top: 1px solid ${theme.listSeparator} !important;
    }

    [dir] .friends_user_row {
      border-top: 1px solid ${theme.listSeparator} !important;
    }

    [dir] .friends_user_row:first-child {
      border-top: none !important;
    }

    .right_list_header {
      color: ${theme.textColor} !important;
    }

    [dir] .ui_search_fltr {
      background: ${theme.popupColor} !important;
      border: 1px solid ${theme.popupColor} !important;
    }

    .ui_search_fltr_label {
      color: ${theme.textColor} !important;
    }

    .ui_search_fltr {
      color: ${theme.textColor} !important;
    }

    [dir] .selector_container {
      background-color: #212121 !important;
    }

    [dir] .selector_container table.selector_table {
      border: 1px solid #121212 !important;
      background-color: #303030 !important;
    }

    [dir] .search_filters_minimized_text {
      background: #212121 url(/images/search_integration.png) no-repeat !important;
    }

    [dir] .result_list {
      border: 1px solid #121212 !important;
    }

    [dir] .result_list ul {
      background-color: #303030 !important;
    }

    [dir] .result_list ul li.active {
      background-color: #424242 !important;
    }

    .result_list ul li.active {
      color: ${theme.textColor} !important;
    }

    .result_list ul li {
      color: ${theme.textColor} !important;
    }

    .ui_search_fltr b {
      color: ${theme.textColor} !important;
    }

    .selector_container td.selector input.selected,
    .selector_container td.selector input.focused {
      color: ${theme.textColor} !important;
    }

    [dir] .friends_cur_filters {
      border-bottom: 1px solid #303030 !important;
    }

    [dir] .friends_cur_filters {
      border-bottom: 1px solid #303030 !important;
    }

    [dir] .friends_cur_filters .token {
      background-color: #424242 !important;
    }

    .friends_cur_filters .token {
      color: ${theme.textColor} !important;
    }

    /* ---- Repost style ---- */

    .subheader, h4.subheader {
      color: ${theme.textColor} !important;
    }

    [dir] input.text,
    [dir] input.text ~ .placeholder .ph_input,
    [dir] input.search,
    [dir] input.search ~ .placeholder .ph_input,
    [dir] input.big_text,
    [dir] input.big_text ~ .placeholder .ph_input,
    [dir] input.dark,
    [dir] input.dark ~ .placeholder .ph_input,
    [dir] .fakeinput,
    [dir] .fakeinput ~ .placeholder .ph_input,
    [dir] div[contenteditable="true"],
    [dir] div[contenteditable="true"] ~ .placeholder .ph_input,
    [dir] textarea,
    [dir] textarea ~ .placeholder .ph_input {
      border: 1px solid #121212 !important;
    }

    [dir] div.wdd {
      background: #212121 !important;
      border: 1px solid #212121 !important;
    }

    [dir] input[type="text"],
    [dir] input[type="submit"],
    [dir] input[type="button"],
    [dir] input[type="search"],
    [dir] input[type="password"],
    [dir] input[type~="text"],
    [dir] input[type~="search"],
    [dir] input[type~="password"],
    [dir] input[type~="email"],
    [dir] input.text,
    [dir] input.search,
    [dir] .fakeinput,
    [dir] textarea,
    [dir] input.big_text,
    [dir] input.file,
    [dir] div[contenteditable="true"] {
      background-color: #212121 !important;
      color: ${theme.textColor} !important;
    }

    [dir] div.wdd.wdd_focused {
      border-color: #212121 !important;
    }

    [dir] .wdd_list {
      border: solid #212121 !important;
    }

    [dir] .wddi {
      background-color: #303030 !important;
      border-top: 1px solid #212121 !important;
    }

    [dir] .wddi_over {
      background: #424242 !important;
    }

    [dir] .wddi, [dir] .wddi_over {
      border-top: 1px solid #212121 !important;
    }

    .wddi_text {
      color: ${theme.linkColor} !important;
    }

    [dir] .wddi_no {
      background: #303030 !important;
    }

    [dir] .page_actions_separator {
      border-top: 1px solid #303030 !important;
    }

    [dir] .summary_tab_sel .summary_tab2,
    [dir] .summary_tab_sel .summary_tab2:hover {
      background-color: ${theme.accentColor} !important;
    }

    /* ---- Community style ---- */

    [dir] .ui_tabs_header {
      background-color: ${theme.popupColor} !important;
    }

    input.ui_search_field {
      color: ${theme.textColor} !important;
    }

    [dir] .groups_list_search.ui_search.ui_search_new {
      background-color: #303030 !important;
    }

    [dir] .ui_search_new.ui_search_field_empty .ui_search_button_search {
      background: url(data:image/svg+xml;charset=utf-8,%3Csvg%20height%3D%2224%22%20viewBox%3D%221284%20207%2024%2024%22%20width%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22m1298.5%20222.9c-1%20.7-2.2%201.1-3.5%201.1-3.3%200-6-2.7-6-6s2.7-6%206-6%206%202.7%206%206c0%201.3-.4%202.5-1.1%203.5l2.8%202.7c.3.4.4%201.1%200%201.5-.4.3-1.1.3-1.5%200zm-3.5-.9c2.2%200%204-1.8%204-4s-1.8-4-4-4-4%201.8-4%204%201.8%204%204%204z%22%20fill%3D%22%239299A6%22%2F%3E%3C%2Fsvg%3E) #424242 no-repeat center !important;
      border: 1px solid #424242 !important;
    }

    [dir] .ui_search_new .ui_search_button_search {
      border: 1px solid #424242 !important;
      background-color: #424242 !important;
    }

    [dir] .ui_search_new .ui_search_input_inner {
      border: 1px solid #424242 !important;
    }

    [dir] .group_list_row {
      border-bottom: 1px solid ${theme.lineColor} !important;
    }

    [dir] .group_list_row:last-child {
      border-bottom: 0 !important;
    }

    [dir] .page_block_header {
      background: ${theme.popupColor} !important;
      border-bottom: 1px solid ${theme.popupColor} !important;
    }

    .page_block_header {
      color: ${theme.textColor} !important;
    }

    [dir] .search_row {
      border-top: 1px solid ${theme.lineColor} !important;
    }

    .ui_tab_default .ui_tab_plain {
      color: ${theme.textColor} !important;
    }

    [dir] div.search_row:first-child,
    [dir] #results > div:first-child div.search_row:first-child,
    [dir] .summary_tabs + div.search_row,
    [dir] .search_row.search_row--first_shown {
      border-top: none !important;
    }

    [dir] .ui_actions_menu_sep {
      border-top: 1px solid #424242 !important;
    }

    .GroupsRecommendationsBlock__header {
      color: ${theme.textColor} !important;
    }

    [dir] .flat_button.secondary, [dir] .button_gray button {
      border-top: 1px solid ${theme.buttonColor} !important;
    }

    [dir] .ui_rmenu_sep {
      border-top: 1px solid ${theme.lineColor} !important;
    }

    [dir] .DonutCatalogPromo {
      background: ${theme.popupColor} !important;
      box-shadow: 0 1px 0 0 ${theme.popupColor},0 0 0 1px ${
    theme.popupColor
  } !important;
    }

    [dir] .thumbed_link__label {
      background: #303030 !important;
    }

    .thumbed_link--product .thumbed_link__title {
      color: ${theme.textColor} !important;
    }

    .thumbed_link--product .thumbed_link__microdata .microdata_price {
      color: ${theme.textColor} !important;
    }

    [dir] .page_block > :not(:empty) + * .module:first-child,
    [dir] .page_block * > aside:not(:empty) + aside > .module:first-child,
    [dir] .page_block > :not(:empty) ~ :empty + .module,
    [dir] .page_block > :not(:empty) ~ :empty + aside > .module {
      border-width: 1px 0 0 !important;
    }

    .page_photo.page_action_menu_groups .page_actions_item.group_send_msg_status_block .group_send_msg_status_block_title {
      color: ${theme.linkColor} !important;
    }

    a.group_app_button,
    a.group_app_button_multi,
    a.artist_page_button {
      color: #9fbbdb ${theme.linkColor} !important;
    }

    b a, a b {
      color: ${theme.linkColor} !important;
    }

    .blst_title,
    .blst_mem,
    .idd_wrap .idd_selected_value {
      color: ${theme.linkColor} !important;
    }

    [dir] .blst_last:hover {
      background-color: ${theme.panelHover} !important;
    }

    [dir] .blst_row {
      border-bottom: 1px solid ${theme.listSeparator} !important;
    }

    [dir] .bt_header {
      border-bottom: 1px solid ${theme.listSeparator} !important;
    }

    [dir] .bp_post {
      border: solid ${theme.listSeparator} !important;
      border-width: 1px 0 !important;
    }

    .bp_author {
      color: ${theme.linkColor} !important;
    }

    .wide_column .topics_module .topic_title {
      color: ${theme.linkColor} !important;
    }

    .topics_module .topic_inner_link {
      color: ${theme.linkColor} !important;
    }

    [dir] .wide_column .topics_module .topic_row {
      border-top: 1px solid ${theme.listSeparator} !important;
    }

    [dir] .wide_column .topics_module .topic_row:first-child {
      border-top: none !important;
    }

    /* ---- Community popup style ---- */

    .box_title_wrap.box_grey .box_title {
      color: ${theme.textColor} !important;
    }

    [dir] .box_title_wrap.box_grey {
      border-bottom: 1px solid ${theme.popupColor} !important;
    }

    .fans_idol_lnk {
      color: ${theme.linkColor} !important;
    }

    #group_section_menu .module_body .ui_gallery .ui_gallery_item .groups_menu_item .groups_menu_item_title {
      color: ${theme.textColor} !important;
    }

    .page_market_item_narrow_price {
      color: ${theme.textColor} !important;
    }

    [dir] .ui_tabs.ui_tabs_box {
      border-color: #303030 !important;
      background-color: #303030 !important;
    }

    .ui_tabs_box .ui_tab_sel .ui_tab_count {
      color: ${theme.textColor} !important;
    }

    /* ---- On top line style ---- */

    [dir] .stl_active.over_fast #stl_bg {
      background-color: ${theme.onTopColor};
    }

    #stl_text {
      color: ${theme.onTopText};
      text-align: center;
    }

    [dir="ltr"] #stl_text {
      margin-left: 0;
    }

    [dir] #stl_text {
      padding: 0;
      background: none;
    }

    /* ---- Tape style ---- */

    [dir] .feed_new_posts:hover {
      background-color: ${theme.panelHover} !important;
    }

    [dir] .feed_new_posts {
      border-bottom: 1px solid ${theme.lineColor} !important;
    }

    .feed_new_posts {
      color: ${theme.textColor} !important;
    }

    [dir] .feed_new_posts > b {
      background-color: ${theme.accentColor} !important;
    }

    [dir] .deep_active .post_replies_header,
    [dir] .deep_active.wall_module .post_replies_header {
      border-top: 1px solid ${theme.lineColor} !important;
    }

    [dir] .wall_module .reply_box, [dir] .wall_module .reply_fakebox_wrap {
      background-color: ${theme.panelColor} !important;
    }

    [dir] .deep_active .replies .reply_fakebox,
    [dir] .deep_active .wl_replies_block_wrap .reply_fakebox,
    [dir] .deep_active.wall_module .replies .reply_fakebox,
    [dir] .deep_active.wall_module .wl_replies_block_wrap .reply_fakebox {
      background-color: ${theme.dialogColor} !important;
      border: 1px solid ${theme.backgroundColor} !important;
    }

    [dir] .wall_module .reply_form {
      background-color: ${theme.panelColor} !important;
    }

    [dir] .deep_active .replies .reply_box div.submit_post_field,
    [dir] .deep_active .replies .reply_box div.submit_post_field[contenteditable="true"],
    [dir] .deep_active .replies .wl_reply_form_wrap .reply_box div.submit_post_field,
    [dir] .deep_active .replies .wl_reply_form_wrap .reply_box div.submit_post_field[contenteditable="true"],
    [dir] .deep_active .wl_replies_block_wrap .reply_box div.submit_post_field,
    [dir] .deep_active .wl_replies_block_wrap .reply_box div.submit_post_field[contenteditable="true"],
    [dir] .deep_active .wl_replies_block_wrap .wl_reply_form_wrap .reply_box div.submit_post_field,
    [dir] .deep_active .wl_replies_block_wrap .wl_reply_form_wrap .reply_box div.submit_post_field[contenteditable="true"],
    [dir] .deep_active.wall_module .replies .reply_box div.submit_post_field,
    [dir] .deep_active.wall_module .replies .reply_box div.submit_post_field[contenteditable="true"],
    [dir] .deep_active.wall_module .replies .wl_reply_form_wrap .reply_box div.submit_post_field,
    [dir] .deep_active.wall_module .replies .wl_reply_form_wrap .reply_box div.submit_post_field[contenteditable="true"],
    [dir] .deep_active.wall_module .wl_replies_block_wrap .reply_box div.submit_post_field,
    [dir] .deep_active.wall_module .wl_replies_block_wrap .reply_box div.submit_post_field[contenteditable="true"],
    [dir] .deep_active.wall_module .wl_replies_block_wrap .wl_reply_form_wrap .reply_box div.submit_post_field,
    [dir] .deep_active.wall_module .wl_replies_block_wrap .wl_reply_form_wrap .reply_box div.submit_post_field[contenteditable="true"] {
      border-color: ${theme.backgroundColor} !important;
    }

    [dir] .deep_active .replies .reply_field_wrap .reply_field,
    [dir] .deep_active .replies .wl_reply_form_wrap .reply_field_wrap .reply_field,
    [dir] .deep_active .wl_replies_block_wrap .reply_field_wrap .reply_field,
    [dir] .deep_active .wl_replies_block_wrap .wl_reply_form_wrap .reply_field_wrap .reply_field,
    [dir] .deep_active.wall_module .replies .reply_field_wrap .reply_field,
    [dir] .deep_active.wall_module .replies .wl_reply_form_wrap .reply_field_wrap .reply_field,
    [dir] .deep_active.wall_module .wl_replies_block_wrap .reply_field_wrap .reply_field,
    [dir] .deep_active.wall_module .wl_replies_block_wrap .wl_reply_form_wrap .reply_field_wrap .reply_field {
      background-color: ${theme.dialogColor} !important;
      border: 1px solid ${theme.backgroundColor} !important;
    }

    [dir] .deep_active .replies .replies_wrap_deep,
    [dir] .deep_active .wl_replies_block_wrap .replies_wrap_deep,
    [dir] .deep_active.wall_module .replies .replies_wrap_deep,
    [dir] .deep_active.wall_module .wl_replies_block_wrap .replies_wrap_deep {
      border-top: 1px solid ${theme.lineColor} !important;
    }

    .deep_active .post_replies_header .post_replies_reorder,
    .deep_active.wall_module .post_replies_header .post_replies_reorder {
      color: ${theme.textColor} !important;
    }

    [dir] .deep_active .replies .reply .reply_wrap,
    [dir] .deep_active .wl_replies_block_wrap .reply .reply_wrap,
    [dir] .deep_active.wall_module .replies .reply .reply_wrap,
    [dir] .deep_active.wall_module .wl_replies_block_wrap .reply .reply_wrap {
      border-top: 1px solid ${theme.lineColor} !important;
    }

    [dir] .wall_module .replies_list {
      border-top: 1px solid ${theme.lineColor} !important;
    }

    [dir] .deep_active .replies .replies_wrap_deep .reply_media_preview,
    [dir] .deep_active .wl_replies_block_wrap .replies_wrap_deep .reply_media_preview,
    [dir] .deep_active.wall_module .replies .replies_wrap_deep .reply_media_preview,
    [dir] .deep_active.wall_module .wl_replies_block_wrap .replies_wrap_deep .reply_media_preview {
      border-bottom: 1px solid ${theme.lineColor} !important;
    }

    [dir] .wall_module .replies_side {
      border: 1px solid ${theme.popupColor} !important;
      background: ${
        theme.popupColor
      } url(/images/icons/hide_comments.png) no-repeat 50% 50% !important;
    }

    [dir] .wall_module .replies_side:hover {
      background-color: ${theme.popupHover} !important;
    }

    [dir] .deep_active .post_replies_header + .replies .replies_list,
    [dir] .deep_active.wall_module .post_replies_header + .replies .replies_list {
      border-top: none !important;
    }

    [dir] .deep_active .replies .reply:first-child .reply_wrap,
    [dir] .deep_active .wl_replies_block_wrap .reply:first-child .reply_wrap,
    [dir] .deep_active.wall_module .replies .reply:first-child .reply_wrap,
    [dir] .deep_active.wall_module .wl_replies_block_wrap .reply:first-child .reply_wrap {
      border-top: none !important;
    }

    [dir] .like_wrap.lite .like_cont {
      box-shadow: none !important;
    }

    [dir] .wall_module:not(.search_results) .post--with-likes:not(.post_copy):not(.post_btl):not(.post_wf):not(.post_fr_likes) .wall_text .media_link:last-child {
      background-color: ${theme.panelColor} !important;
    }

    [dir] .media_link__label {
      background-color: ${theme.popupColor} !important;
    }

    .media_link__title {
      color: ${theme.textColor} !important;
    }

    [dir] .ReplyBoxDonut {
      box-shadow: inset 0 1px 0 0 ${theme.popupColor} !important;
      background-color: ${theme.popupColor} !important;
    }

    .ui_gallery_wall_cards .wall_card__title_link {
      color: ${theme.textColor} !important;
    }

    [dir] .feed_groups_recomm__all {
      border-top: 1px solid ${theme.listSeparator} !important;
    }

    [dir] .ui_gallery_wall_cards.ui_gallery_groups_likes .wall_card {
      background: ${theme.popupColor} !important;
    }

    /* ---- Messages style ---- */

    [dir] .im-page_classic.im-page .im-page--header {
      border-top: 15px solid ${theme.backgroundColor} !important;
    }

    [dir] .im-page_classic.im-page .im-page--dialogs-search {
      box-shadow: 0 0 0 1px ${theme.backgroundColor} !important;
    }

    [dir] .im-page_classic.im-page .im-page--history_loading {
      box-shadow: 0 1px 0 0 #212121,0 0 0 1px #212121 !important;
    }

    [dir="ltr"] .im-page_classic.im-page .im-page--header {
      border-left: 1px solid ${theme.backgroundColor} !important;
      border-right: 1px solid ${theme.backgroundColor} !important;
    }

    .nim-dialog .nim-dialog--name .nim-dialog--name-w,
    .nim-dialog.nim-dialog_classic.nim-dialog_unread-out .nim-dialog--inner-text,
    .nim-dialog .nim-dialog--who,
    .im-page--redesigned-menu .ui_actions_menu_item {
      color: ${theme.textColor} !important;
    }

    [dir] .im-page_classic.im-page .im-page--dialogs {
      background-color: ${theme.messagesColor} !important;
    }

    [dir] .nim-dialog.nim-dialog_classic.nim-dialog_unread-out .nim-dialog--inner-text {
      background-color: ${theme.messagesActive} !important;
    }

    [dir] .im-page_classic.im-page .im-page--dcontent {
      background-color: ${theme.messagesColor} !important;
    }

    [dir] .nim-dialog:not(.nim-dialog_deleted):hover {
      background-color: ${theme.messagesHover} !important;
    }

    [dir] .nim-dialog:not(.nim-dialog_deleted).nim-dialog_unread.nim-dialog_classic {
      background-color: ${theme.messagesActive} !important;
    }

    [dir] .nim-dialog:not(.nim-dialog_deleted).nim-dialog:hover,
    [dir] .nim-dialog:not(.nim-dialog_deleted):hover + .nim-dialog,
    [dir] .nim-dialog:not(.nim-dialog_deleted).nim-dialog.nim-dialog_hovered,
    [dir] .nim-dialog:not(.nim-dialog_deleted).nim-dialog_hovered + .nim-dialog,
    [dir] .nim-dialog:not(.nim-dialog_deleted).nim-dialog.nim-dialog_classic.nim-dialog_unread,
    [dir] .nim-dialog:not(.nim-dialog_deleted).nim-dialog_unread.nim-dialog_classic + .nim-dialog,
    [dir] .nim-dialog:not(.nim-dialog_deleted).nim-dialog_hovered + .im-search-results-head,
    [dir] .nim-dialog:not(.nim-dialog_deleted).nim-dialog_unread.nim-dialog_classic + .im-search-results-head,
    [dir] .nim-dialog:not(.nim-dialog_deleted):hover + .im-search-results-head,
    [dir] .nim-dialog:not(.nim-dialog_deleted).nim-dialog_selected + .nim-dialog,
    [dir] .nim-dialog:not(.nim-dialog_deleted).nim-dialog_selected + .im-search-results-head {
      border-top: solid 1px ${theme.messagesLine} !important;
    }

    [dir] .nim-dialog:not(.nim-dialog_deleted).nim-dialog:hover,
    [dir] .nim-dialog:not(.nim-dialog_deleted):hover + .nim-dialog,
    [dir] .nim-dialog:not(.nim-dialog_deleted).nim-dialog_unread.nim-dialog_classic + .nim-dialog {
      border-top: solid 1px ${theme.messagesLine} !important;
    }

    [dir] .nim-dialog .nim-dialog--content {
      border-top: solid 1px ${theme.messagesLine} !important;
    }

    [dir] .im-page .im-page--dialogs-footer.ui_grey_block {
      background-color: ${theme.messagesBottom} !important;
    }

    [dir="ltr"] .im-page_classic.im-page .im-page--dialogs-footer {
      box-shadow: 1px 0 0 ${theme.backgroundColor}, -1px 0 0 ${
    theme.backgroundColor
  } !important;
    }

    [dir] .im-page .im-page--dialogs-footer {
      border-top: solid 1px ${theme.messagesBottom} !important;
    }

    .nim-dialog .nim-dialog--preview,
    .nim-dialog .nim-dialog--preview-attach {
      color: ${theme.textColor} !important;
    }

    [dir] .nim-dialog.nim-dialog_unread .nim-dialog--unread {
      background-color: ${theme.accentColor} !important;
    }

    [dir] .im-chat-input .im-chat-input--text {
      border: 0 !important;
    }

    [dir] .im-chat-input .im-chat-input--textarea .placeholder .ph_input {
      border: 0 !important;
    }

    [dir] .ui_rmenu_item_sel,
    [dir] .ui_rmenu_item:hover,
    [dir] .ui_rmenu_subitem:hover {
      background-color: ${theme.popupHover} !important;
      color: ${theme.textColor} !important;
    }

    .ui_rmenu_item,
    .ui_rmenu_subitem {
      color: ${theme.textColor} !important;
    }

    .im-page .im-search-results-head {
      color: ${theme.textColor} !important;
    }

    .im-right-menu .im-right-menu--count {
      color: ${theme.textColor} !important;
    }

    .im-page .im-page--clear-recent {
      color: ${theme.linkColor} !important;
    }

    .im-page--chat-header,
    .im-page--chat-input {
      background-color: ${theme.backgroundColor} !important;
    }

    [dir] .im-page_classic .im-page--chat-header {
      border: solid 1px ${theme.backgroundColor} !important;
      border-top-width: 15px !important;
    }

    [dir] .im-page_classic.im-page .im-page--chat-body-wrap-inner,
    [dir] .im-page .im-page--history-new-bar,
    [dir] .im-page .im-page--history-new-bar > span {
      background-color: ${theme.dialogColor} !important;
    }

    [dir] .im-page .im-page--history-new-bar::before,
    [dir] .im-page .im-page--history-new-bar::after {
      background-color: #424242 !important;
    }

    [dir] .im-mess.im-mess_unread + .im-mess::before,
    [dir] .im-mess.im-mess_selected + .im-mess::before {
      background-color: #303030 !important;
    }

    [dir] .im-page-pinned {
      border-bottom: 1px solid #424242 !important;
      background: #424242 !important;
    }

    .im-page-pinned--name {
      color: ${theme.linkColor} !important;
    }

    .im-replied--text {
      color: ${theme.textColor} !important;
    }

    [dir] .im-replied::before {
      background: #212121 !important;
    }

    .im-replied--author-link {
      color: ${theme.linkColor} !important;
    }

    [dir] .im-mess.im-mess_light {
      background: #505050 !important;
    }

    [dir="ltr"] .im_fwd_log_wrap, [dir="ltr"] .im_wall_log_wrap {
      border-left: 2px solid #212121 !important;
    }

    [dir] .thumbed_link__label {
      border: 1px solid #212121 !important;
    }

    .page_doc_row .page_doc_title {
      color: ${theme.linkColor} !important;
    }

    .thumbed_link__title {
      color: ${theme.linkColor} !important;
    }

    [dir] .im-chat-input.im-chat-input_classic {
      box-shadow: 0 1px 0 0 ${theme.messagesColor}, 0 0 0 1px ${
    theme.messagesColor
  } !important;
    }

    [dir] .im-page_classic.im-page .im-page--chat-body-abs {
      box-shadow: 0 1px 0 0 ${theme.messagesColor}, 0 0 0 1px ${
    theme.messagesColor
  } !important;
    }

    .im-page--title-main-inner {
      color: ${theme.textColor} !important;
    }

    [dir] .im-page--toolsw {
      border-bottom: 1px solid ${theme.messagesColor} !important;
      background: ${theme.messagesColor} !important;
    }

    [dir="ltr"] .im-page--back-btn:hover {
      background: url(data:image/svg+xml;charset=utf-8,%3Csvg%20height%3D%2216%22%20viewBox%3D%220%200%209%2016%22%20width%3D%229%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22m8%2015.9c-.2%200-.4-.1-.6-.3l-7-7c-.3-.3-.3-.9%200-1.2l7-7c.3-.3.9-.3%201.2%200s.3.9%200%201.2l-6.4%206.4%206.4%206.4c.3.3.3.9%200%201.2-.2.2-.4.3-.6.3z%22%20fill%3D%22%23828a99%22%20opacity%3D%22.7%22%2F%3E%3C%2Fsvg%3E) 15px 16px no-repeat,linear-gradient(to right,#424242 50%,#212121) !important;
    }

    [dir] .im-page_classic .im-page--chat-header-in {
      box-shadow: 0 0 0 1px ${theme.messagesColor} !important;
    }

    [dir] .im-chat-input {
      background-color: ${theme.messagesBottom} !important;
    }

    [dir] .im-chat-input .im-chat-input--txt-wrap {
      border: solid 1px ${theme.backgroundColor} !important;
      background-color: ${theme.backgroundColor} !important;
    }

    [dir] .im-page_classic.im-page .im-chat-history-resize {
      background-color: ${theme.backgroundColor} !important;
    }

    [dir] .im-page_classic.im-page .im-page--chat-input {
      border-bottom: solid 15px ${theme.backgroundColor} !important;
    }

    [dir="ltr"] .im-page_classic.im-page .im-page--chat-input {
      border-left: solid 1px ${theme.backgroundColor} !important;
      border-right: solid 2px ${theme.backgroundColor} !important;
    }

    .im-mess-stack .im-mess-stack--content .im-mess-stack--pname > a {
      color: ${theme.linkColor} !important;
    }

    [dir] .im-mess.im-mess_selected:not(.im-mess_is_editing),
    [dir] .im-mess.im-mess_selected:not(.im-mess_is_editing):hover,
    [dir] .im-mess.im-mess_unread:last-child::before,
    [dir] .im-mess.im-mess_selected:last-child::before {
      background-color: ${theme.dialogHoverOrActive} !important;
    }

    [dir="ltr"] .im-mess .im-mess--post {
      border-left: 2px solid ${theme.messagesBottom} !important;
    }

    [dir] .post_top_info_caption {
      background: ${theme.dialogColor} !important;
    }

    .post_top_info_caption {
      color: ${theme.textInactiveColor} !important;
    }

    [dir] .ms_items_more {
      background-color: ${theme.popupColor} !important;
      border: 1px solid ${theme.popupLine} !important;
    }

    [dir] .media_selector .ms_items_more .ms_item:hover {
      background-color: ${theme.popupHover} !important;
    }

    .media_selector .ms_items_more .ms_item {
      color: ${theme.textColor} !important;
    }

    [dir] .im-navigation--to-end .im-navigation__button {
      background: ${
        theme.popupLinkBottom
      } url(data:image/svg+xml;charset=utf-8,%3Csvg%20height%3D%227%22%20viewBox%3D%220%200%2014%207%22%20width%3D%2214%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M1.64.232c-.424-.354-1.055-.296-1.408.128s-.296%201.055.128%201.408l6%205c.371.309.91.309%201.28%200l6-5c.424-.354.482-.984.128-1.408s-.984-.482-1.408-.128l-5.36%204.467z%22%20fill%3D%22%239db4cc%22%2F%3E%3C%2Fsvg%3E) center 17px no-repeat !important;
    }

    [dir] .im-navigation__button {
      border: 1px solid ${theme.popupLinkBottom} !important;
    }

    [dir] .im-navigation--label-in {
      background-color: ${theme.accentColor} !important;
    }

    [dir] .im-mess.im-mess_unread:not(.im-mess_light),
    [dir] .im-mess.im-mess_unread:not(.im-mess_light) .post_top_info_caption {
      background-color: ${theme.dialogHoverOrActive} !important;
    }

    [dir] .emoji_tt_wrap {
      background-color: #303030 !important;
      border: 1px solid #121212 !important;
    }

    [dir] .emoji_tabs {
      background-color: #212121 !important;
    }

    [dir] .emoji_tab:hover {
      background-color: #424242 !important;
    }

    .emoji_shop:hover {
      background-color: #424242 !important;
    }

    [dir="ltr"] .emoji_tabs_r_sc,
    [dir="ltr"] .emoji_tabs_l_sc {
      background-image: none !important;
    }

    [dir] .emoji_sticker_item.over,
    [dir] .emoji_sticker_item:hover {
      background: #424242 !important;
    }

    [dir] .emoji_tabs_l_s, [dir] .emoji_tabs_r_s {
      background-color: #212121 !important;
    }

    [dir="ltr"] .ui_scroll_default_theme.ui_scroll_emoji_theme > .ui_scroll_overflow > .ui_scroll_shadow_top,
    [dir="ltr"] .ui_scroll_default_theme.ui_scroll_emoji_theme > .ui_scroll_overflow > .ui_scroll_shadow_bottom {
      background: none !important;
    }

    [dir] .emoji_cat_title {
      background: #303030 !important;
    }

    [dir] .emoji_tab_sel, [dir] .emoji_tab_sel:hover {
      background: #303030 !important;
    }

    [dir] .sticker_hints_tt {
      background-color: #303030 !important;
      border: 1px solid #121212 !important;
    }

    [dir="ltr"] .sticker_hints_arrow {
      border-left: 1px solid #424242 !important;
    }

    [dir] .sticker_hints_arrow {
      background: #424242 url(/images/icons/stickers_hints_arrow.png) no-repeat 50% 50% !important;
    }

    [dir] .sticker_hints_arrow:hover {
      background-color: #505050 !important;
    }

    [dir] .ui_scroll_default_theme > .ui_scroll_bar_container > .ui_scroll_bar_outer > .ui_scroll_bar_inner {
      background-color: #212121 !important;
    }

    [dir] .ui_scroll_no_transition_theme.ui_scroll_scrolled > .ui_scroll_bar_container > .ui_scroll_bar_outer > .ui_scroll_bar_inner {
      background-color: #212121 !important;
    }

    [dir] .PopupHeader {
      background: #303030 !important;
    }

    [dir] .BlockSearchInput.BlockSearchInput {
      border-bottom: 1px solid #424242 !important;
    }

    [dir] .ListItem--border::before {
      background: #424242 !important;
    }

    .Entity__title {
      color: ${theme.linkColor} !important;
    }

    [dir] .ListItem--can-be-hovered.ListItem--selectable:hover, [dir] .ListItem--active {
      border-color: #424242 !important;
      background: #303030 !important;
    }

    .im-fwd .im-fwd--title {
      color: ${theme.linkColor} !important;
    }

    .im-fwd.im-fwd_msg .im-fwd--messages {
      color: ${theme.textColor} !important;
    }

    [dir="ltr"] .im-fwd {
      border-left: solid 2px #121212 !important;
    }

    /* ---- Investments style ---- */

    [dir] #wk_box {
      background: ${theme.panelColor} !important;
    }

    [dir] .wk_history_tabs {
      background-color: #303030 !important;
    }

    [dir] #wk_history_wall {
      background-color: #424242 !important;
    }

    .page_doc_row .page_doc_title {
      color: ${theme.linkColor} !important;
    }

    .links-list__title {
      color: ${theme.linkColor} !important;
    }

    [dir] .links-list__item:hover {
      background-color: #505050 !important;
    }

    /* ---- Header style ---- */

    [dir] body.new_header_design #page_header_cont {
      background-color: ${theme.headerColor} !important;
      border-bottom: 1px solid ${theme.backgroundColor} !important;
    }

    [dir] body.new_header_design .top_audio_player:hover {
      background-color: ${theme.headerHover};
    }

    [dir] body.new_header_design .top_nav_link.active {
      background-color: ${theme.headerHover};
      border: ${theme.panelHover};
    }

    [dir] body.new_header_design .TopSearch__input {
      background-color: ${theme.popupColor} !important;
      color: ${theme.textColor};
    }

    [dir] .ts_cont_wrap {
      background-color: ${theme.popupColor};
    }

    .ts_contact_name {
      color: ${theme.textColor};
    }

    [dir="ltr"] .TopNavBtn__profileName {
      color: ${theme.textColor} !important;
    }

    [dir] body.new_header_design .ts_cont_wrap {
      border: 1px solid ${theme.popupLine} !important;
    }

    [dir] a.ts_contact.active,
    [dir] a.ts_search_link.active {
      background-color: ${theme.popupHover};
    }

    /* ---- Header profile style ---- */

    [dir] #top_profile_menu {
      background-color: ${theme.popupColor};
      border: ${theme.popupColor};
    }

    [dir] .top_profile_vkconnect_row:hover {
      background-color: ${theme.popupHover};
    }

    .top_profile_mrow {
      color: ${theme.textColor};
    }

    .top_profile_vkconnect_row {
      color: ${theme.textColor};
    }

    [dir] .top_profile_mrow:hover {
      background-color: ${theme.popupHover};
    }

    [dir] .top_profile_sep {
      border-top: 1px solid ${theme.popupHover} !important;
    }

    /* ---- Personal info style ---- */

    .page_name, h1.page_name {
      color: ${theme.textColor} !important;
    }

    [dir] .wide_column .page_top {
      border-bottom: 1px solid ${theme.lineColor} !important;
    }

    [dir] .my_current_info:hover, [dir] .no_current_info:hover {
      background-color: ${theme.popupColor} !important;
    }

    [dir] .profile_more_info_link:hover {
      background-color: ${theme.popupColor} !important;
    }

    [dir] #profile_groups_link:hover {
      background-color: ${theme.popupColor} !important;
    }

    [dir] .profile_info_block {
      border-top: 1px solid ${theme.lineColor} !important;
    }

    [dir] .profile_info_edit,
    [dir] .profile_info_header {
      background-color: ${theme.panelColor} !important;
    }

    .page_counter .count {
      color: ${theme.linkColor} !important;
    }

    .page_counter:hover .label {
      color: ${theme.linkColor} !important;
    }

    [dir] .counts_module {
      border-top: 1px solid ${theme.lineColor} !important;
    }

    /* ---- Avatar style ---- */

    [dir] .flat_button.secondary,
    [dir] .button_gray button {
      background-color: ${theme.buttonColor} !important;
      color: ${theme.textColor} !important;;
    }

    .page_actions_dd_label,
    .page_actions_header_inner {
      color: ${theme.linkColor} !important;
    }

    [dir] .page_actions_header {
      background-color: ${theme.popupColor} !important;
    }

    [dir] .page_actions_wrap {
      background-color: ${theme.popupColor} !important;
      border: 1px solid ${theme.popupLine} !important;
    }

    [dir] .page_actions_inner {
      border: 1px solid ${theme.popupLine} !important;
    }

    .page_actions_cont.narrow .page_actions_header_inner {
      color: ${theme.textColor} !important;
    }

    [dir] .page_actions_item:hover:not(.grey_hoverable) {
      background-color: ${theme.popupHover} !important;
    }

    .page_actions_item {
      color: ${theme.textColor} !important;
    }

    .profile_warning_row {
      color: ${theme.textColor} !important;
    }

    /* ---- Music playlist style ---- */

    [dir] .audio_pl_snippet2 {
      background-color: ${theme.playlistColor};
    }

    [dir] .audio_pl_snippet2 .audio_shuffle_all_button:hover,
    [dir] .audio_row:hover:not(.audio_row__current) .audio_row_content {
      background-color: ${theme.playlistHover};
    }

    [dir] .audio_row.audio_row__current .audio_row_content {
      background-color: ${theme.playlistHover};
    }

    [dir] .audio_pl_snippet2 .audio_pl_snippet__header {
      border-bottom: 1px solid ${theme.playlistLine};
    }

    .audio_pl_snippet2 .audio_pl_snippet__artist_link,
    .audio_pl_snippet2 .audio_shuffle_all_button,
    .audio_pl_snippet2 .audio_pl_snippet__more_btn {
      color: ${theme.textColor};
    }

    [dir] .audio_page_player .slider .slider_handler,
    [dir] .audio_inline_player .slider .slider_handler,
    [dir] .audio_page_player .slider .slider_amount,
    [dir] .audio_inline_player .slider .slider_amount {
      background-color: ${theme.playlistAccent};
    }

    .audio_pl_snippet2 .audio_pl_snippet__info_title,
    .audio_row .audio_row__performers a {
      color: ${theme.playlistAccent};
    }

    [dir] .audio_numeric .audio_row .audio_row__cover_icon {
      background-image: url(data:image/svg+xml;charset=utf-8,%3Csvg%20height%3D%2224%22%20viewBox%3D%225%205%2024%2024%22%20width%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%3E%3Ccircle%20cx%3D%2212%22%20cy%3D%2212%22%20r%3D%2212%22%2F%3E%3Cpath%20d%3D%22m13.8%2022.9c-.4.3-.8.1-.8-.5v-10.8c0-.6.4-.8.8-.4l8%205.4c.3.2.3.6%200%20.8z%22%20fill${colorToUri(
        theme.playlistAccent
      )}%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E) !important;
    }

    [dir] .audio_numeric .audio_row.audio_row__playing .audio_row__cover_icon {
      background-image: url(data:image/svg+xml;charset=utf-8,%3Csvg%20height%3D%2224%22%20viewBox%3D%225%205%2024%2024%22%20width%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%3E%3Ccircle%20cx%3D%2212%22%20cy%3D%2212%22%20r%3D%2212%22%2F%3E%3Cpath%20d%3D%22m13%2011.6c0-.3.3-.6.6-.6h1.8c.3%200%20.6.3.6.6v10.8c0%20.3-.3.6-.6.6h-1.8c-.3%200-.6-.3-.6-.6zm5%200c0-.3.3-.6.6-.6h1.8c.3%200%20.6.3.6.6v10.8c0%20.3-.3.6-.6.6h-1.8c-.3%200-.6-.3-.6-.6z%22%20fill${colorToUri(
        theme.playlistAccent
      )}%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E) !important;
    }

    [dir] .audio_pl_snippet2 .audio_pl_snippet__action_btn_listen::before {
      background-image: url(data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Ccircle%20cx%3D%2212%22%20cy%3D%2212%22%20r%3D%2212%22%20fill${colorToUri(
        theme.playlistAccent
      )}%2F%3E%3Cpath%20fill%3D%22%23FFF%22%20d%3D%22M9.846%2016.86c-.467.303-.846.097-.846-.45V7.588c0-.551.38-.752.846-.45l6.91%204.48c.324.21.327.549%200%20.761l-6.91%204.48z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E);
    }

    [dir] .audio_pl_snippet2 .audio_pl_snippet__action_btn_listen::before {
      background-image: url(data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Ccircle%20cx%3D%2212%22%20cy%3D%2212%22%20r%3D%2212%22%20fill${colorToUri(
        theme.playlistAccent
      )}%2F%3E%3Cpath%20fill%3D%22%23FFF%22%20d%3D%22M9.846%2016.86c-.467.303-.846.097-.846-.45V7.588c0-.551.38-.752.846-.45l6.91%204.48c.324.21.327.549%200%20.761l-6.91%204.48z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E) !important;
    }

    [dir] .audio_pl_snippet2.audio_pl__playing .audio_pl_snippet__action_btn_listen::before {
      background-image: url(data:image/svg+xml;charset=utf-8,%3Csvg%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20width%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Ccircle%20cx%3D%2212%22%20cy%3D%2212%22%20fill${colorToUri(
        theme.playlistAccent
      )}%20r%3D%2212%22%2F%3E%3Cpath%20d%3D%22m8%207.596c0-.33.277-.596.607-.596h1.786c.335%200%20.607.267.607.596v8.808a.605.605%200%200%201%20-.607.596h-1.786a.602.602%200%200%201%20-.607-.596zm5%200c0-.33.277-.596.607-.596h1.786c.335%200%20.607.267.607.596v8.808a.605.605%200%200%201%20-.607.596h-1.786a.602.602%200%200%201%20-.607-.596z%22%20fill%3D%22%23fff%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E) !important;
    }

    [dir] .audio_row .audio_row__play_btn {
      background-image: url(data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Ccircle%20cx%3D%2212%22%20cy%3D%2212%22%20r%3D%2212%22%20fill${colorToUri(
        theme.playlistAccent
      )}%2F%3E%3Cpath%20fill%3D%22%23FFF%22%20d%3D%22M9.846%2016.86c-.467.303-.846.097-.846-.45V7.588c0-.551.38-.752.846-.45l6.91%204.48c.324.21.327.549%200%20.761l-6.91%204.48z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E) !important;
    }

    [dir] .audio_row.audio_row__playing .audio_row__play_btn {
      background-image: url(data:image/svg+xml;charset=utf-8,%3Csvg%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20width%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Ccircle%20cx%3D%2212%22%20cy%3D%2212%22%20fill${colorToUri(
        theme.playlistAccent
      )}%20r%3D%2212%22%2F%3E%3Cpath%20d%3D%22m8%207.596c0-.33.277-.596.607-.596h1.786c.335%200%20.607.267.607.596v8.808a.605.605%200%200%201%20-.607.596h-1.786a.602.602%200%200%201%20-.607-.596zm5%200c0-.33.277-.596.607-.596h1.786c.335%200%20.607.267.607.596v8.808a.605.605%200%200%201%20-.607.596h-1.786a.602.602%200%200%201%20-.607-.596z%22%20fill%3D%22%23fff%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E) !important;
    }

    [dir] .audio_pl_snippet2 .audio_shuffle_all_button::before {
      background: url("data:image/svg+xml;charset=utf-8,%3Csvg%20height%3D%2224%22%20viewBox%3D%22627%200%2024%2024%22%20width%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22m16%207c-2.94%200-4.4%202.3-5.87%204.25-1.3%201.7-2.38%203.7-4.13%203.75h-3v2h3c2.93%200%204.24-2.6%205.7-4.53%201.3-1.74%202.46-3.47%204.3-3.47h1v-2zm-6.06%201.84c-.52-.46-1.38-1.1-2.04-1.38-.64-.3-1.4-.46-2.23-.46h-2.67v2h3c.44%200%20.8.08%201.14.22.45.2%201.14.7%201.58%201.1l1.23-1.48zm6.06%206.16h1v2h-1c-1.77%200-3.24-1.08-4.32-2.15l1.23-1.5c.8.83%201.98%201.65%203.1%201.65zm1%204v-6l4%203zm0-8v-6l4%203z%22%20fill${colorToUri(
        theme.playlistAccent
      )}fill-rule%3D%22evenodd%22%20transform%3D%22translate(627)%22%2F%3E%3C%2Fsvg%3E") center no-repeat !important;
    }

    [dir] .audio_pl_snippet2 .audio_pl_snippet__more_btn::before {
      background-image: url(data:image/svg+xml;charset=utf-8,%3Csvg%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20width%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22m0%200h24v24h-24z%22%20opacity%3D%22.15%22%2F%3E%3Cpath%20d%3D%22m5%2014c-1.1045695%200-2-.8954305-2-2s.8954305-2%202-2%202%20.8954305%202%202-.8954305%202-2%202zm7%200c-1.1045695%200-2-.8954305-2-2s.8954305-2%202-2%202%20.8954305%202%202-.8954305%202-2%202zm7%200c-1.1045695%200-2-.8954305-2-2s.8954305-2%202-2%202%20.8954305%202%202-.8954305%202-2%202z%22%20fill${colorToUri(
        theme.playlistAccent
      )}%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E);
    }

    /* ---- Sidebar style ---- */

    [dir] #side_bar ol li .left_row:hover {
      background-color: ${theme.panelColor} !important;
    }

    [dir] #side_bar .more_div {
      border-top: 1px solid ${theme.lineColor} !important;
    }

    [dir] #ads_left.ads_left_empty + .left_menu_nav_wrap {
      border-top: 1px solid ${theme.lineColor} !important;
    }

    [dir] body.new_header_design .left_count_wrap {
      background-color: ${theme.badgeColor} !important;
    }

    /* ---- All cards style ---- */

    [dir] .page_block {
      background-color: ${theme.panelColor};
      box-shadow: none;
    }

    [dir] .page_block .module:first-child,
    [dir] .page_block > :empty + .module {
      border-width: 0 !important;
    }

    [dir] .module {
      border: solid ${theme.lineColor} !important;
      border-width: 1px 0 0 !important;
    }

    .module_header .header_top {
      color: ${theme.textColor} !important;
    }

    /* ---- Slider (wall) ---- */

    [dir] .ui_tabs {
      border-bottom: 1px solid ${theme.lineColor} !important;
    }

    /* ---- Wall style ---- */

    [dir] .ui_search {
      border-bottom: 1px solid ${theme.lineColor} !important;
      background-color: ${theme.panelColor} !important;
    }

    .ui_tab_sel, .ui_tabs .ui_tab_sel, .ui_tabs_box .ui_tab_sel {
      color: ${theme.textColor} !important;
    }

    [dir="ltr"] .wall_module .copy_quote {
      border-left: 1px solid ${theme.lineColor} !important;
    }

    [dir] .like_cont {
      box-shadow: inset 0 1px ${theme.listSeparator} !important;
    }

    [dir] .ui_actions_menu {
      background-color: ${theme.popupColor} !important;
      border: 1px solid ${theme.popupLine} !important;
    }

    [dir] .ui_actions_menu_item:hover {
      background-color: ${theme.popupHover} !important;
    }

    [dir] .ui_actions_menu_item {
      color: ${theme.textColor};
    }

    /* ---- New post style ---- */

    [dir] input.text,
    [dir] input.search,
    [dir] input.big_text,
    [dir] input.dark,
    [dir] .fakeinput,
    [dir] div[contenteditable="true"],
    [dir] textarea {
      background-color: ${theme.panelColor};
      color: ${theme.textColor} !important;
    }

    [dir] div.submit_post_field,
    [dir] div.submit_post_field[contenteditable=true],
    [dir] div.submit_post_field~.placeholder .ph_input,
    [dir] div.submit_post_field[contenteditable=true]~.placeholder .ph_input {
      border: 0 !important;
    }

    [dir] .submit_post {
      background-color: ${theme.panelColor} !important;
      border-top: 1px solid ${theme.lineColor} !important;
    }

    [dir] #submit_post_box:not(.shown):not(.own_field) .submit_post {
      border: 0 !important;
    }

    [dir] .post_actions_btns {
      border-top: 1px solid ${theme.lineColor} !important;
    }

    [dir="ltr"] .submit_post_box.shown div.submit_post_field,
    [dir="ltr"] .submit_post_box.own_field div.submit_post_field {
      color: ${theme.textColor};
    }

    [dir] .eltt.eltt_fancy_actions {
      background-color: ${theme.popupColor};
    }

    [dir] .eltt .eltt_fancy_action:hover {
      background-color: ${theme.popupHover};
    }

    .eltt .eltt_fancy_action {
      color: ${theme.textColor};
    }

    /* ---- Popup link style ---- */

    [dir] .tt_default, [dir] .tt_default_right {
      border: 1px solid ${theme.popupLinkBorder} !important;
      background: ${theme.popupLink} !important;
    }

    [dir] .mention_tt_actions {
      background-color: ${theme.popupLinkBottom} !important;
      border-top: 1px solid ${theme.popupLinkBorder} !important;
    }

    .tt_w {
      color: ${theme.textColor} !important;
    }

    /* ---- Security modal style ---- */

    [dir] .box_title_wrap {
      background-color: #303030 !important;
    }

    [dir] .box_body {
      background-color: #424242 !important;
    }

    [dir] input.disabled, [dir] textarea.disabled {
      border-color: #303030 !important;
    }

    /* ---- Quick messages style ---- */

    [dir] .chat_onl_inner {
      background-color: #212121 !important;
    }

    /* ----  ---- */

    body.new_header_design #side_bar .left_label,
    body.new_header_design .top_nav_link.top_profile_link,
    body.new_header_design .top_nav_link:hover,
    body.new_header_design .top_nav_btn:hover {
      color: ${theme.textColor};
    }
  `);
})();
