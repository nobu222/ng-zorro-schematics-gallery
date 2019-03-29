import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { AffixBasicComponent } from './affix-basic/affix-basic.component';
import { AffixOnChangeComponent } from './affix-on-change/affix-on-change.component';
import { AffixTargetComponent } from './affix-target/affix-target.component';
import { AlertBannerComponent } from './alert-banner/alert-banner.component';
import { AlertBasicComponent } from './alert-basic/alert-basic.component';
import { AlertClosableComponent } from './alert-closable/alert-closable.component';
import { AlertCloseTextComponent } from './alert-close-text/alert-close-text.component';
import { AlertDescriptionComponent } from './alert-description/alert-description.component';
import { AlertIconComponent } from './alert-icon/alert-icon.component';
import { AlertStyleComponent } from './alert-style/alert-style.component';
import { AnchorBasicComponent } from './anchor-basic/anchor-basic.component';
import { AnchorStaticComponent } from './anchor-static/anchor-static.component';
import { AutoCompleteBasicComponent } from './auto-complete-basic/auto-complete-basic.component';
import { AutoCompleteCertainCategoryComponent } from './auto-complete-certain-category/auto-complete-certain-category.component';
import { AutoCompleteCustomComponent } from './auto-complete-custom/auto-complete-custom.component';
import { AutoCompleteNonCaseSensitiveComponent } from './auto-complete-non-case-sensitive/auto-complete-non-case-sensitive.component';
import { AutoCompleteOptionsComponent } from './auto-complete-options/auto-complete-options.component';
import { AutoCompleteUncertainCategoryComponent } from './auto-complete-uncertain-category/auto-complete-uncertain-category.component';
import { AvatarBadgeComponent } from './avatar-badge/avatar-badge.component';
import { AvatarBasicComponent } from './avatar-basic/avatar-basic.component';
import { AvatarDynamicComponent } from './avatar-dynamic/avatar-dynamic.component';
import { AvatarTypeComponent } from './avatar-type/avatar-type.component';
import { BackTopBasicComponent } from './back-top-basic/back-top-basic.component';
import { BackTopCustomComponent } from './back-top-custom/back-top-custom.component';
import { BackTopTargetComponent } from './back-top-target/back-top-target.component';
import { BadgeBasicComponent } from './badge-basic/badge-basic.component';
import { BadgeChangeComponent } from './badge-change/badge-change.component';
import { BadgeDotComponent } from './badge-dot/badge-dot.component';
import { BadgeLinkComponent } from './badge-link/badge-link.component';
import { BadgeNoWrapperComponent } from './badge-no-wrapper/badge-no-wrapper.component';
import { BadgeOverflowComponent } from './badge-overflow/badge-overflow.component';
import { BadgeStatusComponent } from './badge-status/badge-status.component';
import { BreadcrumbAutoComponent } from './breadcrumb-auto/breadcrumb-auto.component';
import { BreadcrumbBasicComponent } from './breadcrumb-basic/breadcrumb-basic.component';
import { BreadcrumbRouterComponent } from './breadcrumb-router/breadcrumb-router.component';
import { BreadcrumbSeparatorComponent } from './breadcrumb-separator/breadcrumb-separator.component';
import { BreadcrumbWithIconComponent } from './breadcrumb-with-icon/breadcrumb-with-icon.component';
import { ButtonBasicComponent } from './button-basic/button-basic.component';
import { ButtonBlockComponent } from './button-block/button-block.component';
import { ButtonButtonGroupComponent } from './button-button-group/button-button-group.component';
import { ButtonDisabledComponent } from './button-disabled/button-disabled.component';
import { ButtonGhostComponent } from './button-ghost/button-ghost.component';
import { ButtonIconComponent } from './button-icon/button-icon.component';
import { ButtonLoadingComponent } from './button-loading/button-loading.component';
import { ButtonMultipleComponent } from './button-multiple/button-multiple.component';
import { ButtonSizeComponent } from './button-size/button-size.component';
import { CalendarBasicComponent } from './calendar-basic/calendar-basic.component';
import { CalendarCardComponent } from './calendar-card/calendar-card.component';
import { CalendarNoticeCalendarComponent } from './calendar-notice-calendar/calendar-notice-calendar.component';
import { CalendarSelectComponent } from './calendar-select/calendar-select.component';
import { CardBasicComponent } from './card-basic/card-basic.component';
import { CardBorderLessComponent } from './card-border-less/card-border-less.component';
import { CardFlexibleContentComponent } from './card-flexible-content/card-flexible-content.component';
import { CardGridCardComponent } from './card-grid-card/card-grid-card.component';
import { CardInColumnComponent } from './card-in-column/card-in-column.component';
import { CardInnerComponent } from './card-inner/card-inner.component';
import { CardLoadingComponent } from './card-loading/card-loading.component';
import { CardMetaComponent } from './card-meta/card-meta.component';
import { CardSimpleComponent } from './card-simple/card-simple.component';
import { CardTabsComponent } from './card-tabs/card-tabs.component';
import { CarouselAutoplayComponent } from './carousel-autoplay/carousel-autoplay.component';
import { CarouselBasicComponent } from './carousel-basic/carousel-basic.component';
import { CarouselFadeComponent } from './carousel-fade/carousel-fade.component';
import { CarouselVerticalComponent } from './carousel-vertical/carousel-vertical.component';
import { CascaderBasicComponent } from './cascader-basic/cascader-basic.component';
import { CascaderChangeOnFunctionComponent } from './cascader-change-on-function/cascader-change-on-function.component';
import { CascaderChangeOnSelectComponent } from './cascader-change-on-select/cascader-change-on-select.component';
import { CascaderCustomFieldNamesComponent } from './cascader-custom-field-names/cascader-custom-field-names.component';
import { CascaderCustomRenderComponent } from './cascader-custom-render/cascader-custom-render.component';
import { CascaderDefaultValueComponent } from './cascader-default-value/cascader-default-value.component';
import { CascaderDisabledComponent } from './cascader-disabled/cascader-disabled.component';
import { CascaderHoverComponent } from './cascader-hover/cascader-hover.component';
import { CascaderLazyComponent } from './cascader-lazy/cascader-lazy.component';
import { CascaderModalComponent } from './cascader-modal/cascader-modal.component';
import { CascaderReactiveFormComponent } from './cascader-reactive-form/cascader-reactive-form.component';
import { CascaderSearchComponent } from './cascader-search/cascader-search.component';
import { CascaderSizeComponent } from './cascader-size/cascader-size.component';
import { CascaderTriggerActionComponent } from './cascader-trigger-action/cascader-trigger-action.component';
import { CascaderTriggerComponent } from './cascader-trigger/cascader-trigger.component';
import { CheckboxBasicComponent } from './checkbox-basic/checkbox-basic.component';
import { CheckboxCheckAllComponent } from './checkbox-check-all/checkbox-check-all.component';
import { CheckboxControllerComponent } from './checkbox-controller/checkbox-controller.component';
import { CheckboxDisabledComponent } from './checkbox-disabled/checkbox-disabled.component';
import { CheckboxGroupComponent } from './checkbox-group/checkbox-group.component';
import { CheckboxLayoutComponent } from './checkbox-layout/checkbox-layout.component';
import { CollapseAccordionComponent } from './collapse-accordion/collapse-accordion.component';
import { CollapseBasicComponent } from './collapse-basic/collapse-basic.component';
import { CollapseBorderlessComponent } from './collapse-borderless/collapse-borderless.component';
import { CollapseCustomComponent } from './collapse-custom/collapse-custom.component';
import { CollapseExtraComponent } from './collapse-extra/collapse-extra.component';
import { CollapseMixComponent } from './collapse-mix/collapse-mix.component';
import { CollapseNoarrowComponent } from './collapse-noarrow/collapse-noarrow.component';
import { CommentBasicComponent } from './comment-basic/comment-basic.component';
import { CommentEditorComponent } from './comment-editor/comment-editor.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { CommentNestedComponent } from './comment-nested/comment-nested.component';
import { DatePickerBasicComponent } from './date-picker-basic/date-picker-basic.component';
import { DatePickerDateRenderComponent } from './date-picker-date-render/date-picker-date-render.component';
import { DatePickerDisabledDateComponent } from './date-picker-disabled-date/date-picker-disabled-date.component';
import { DatePickerDisabledComponent } from './date-picker-disabled/date-picker-disabled.component';
import { DatePickerExtraFooterComponent } from './date-picker-extra-footer/date-picker-extra-footer.component';
import { DatePickerFormatComponent } from './date-picker-format/date-picker-format.component';
import { DatePickerModeComponent } from './date-picker-mode/date-picker-mode.component';
import { DatePickerPresettedRangesComponent } from './date-picker-presetted-ranges/date-picker-presetted-ranges.component';
import { DatePickerSizeComponent } from './date-picker-size/date-picker-size.component';
import { DatePickerStartEndComponent } from './date-picker-start-end/date-picker-start-end.component';
import { DatePickerTimeComponent } from './date-picker-time/date-picker-time.component';
import { DividerHorizontalComponent } from './divider-horizontal/divider-horizontal.component';
import { DividerOrientationComponent } from './divider-orientation/divider-orientation.component';
import { DividerVerticalComponent } from './divider-vertical/divider-vertical.component';
import { DrawerBasicRightComponent } from './drawer-basic-right/drawer-basic-right.component';
import { DrawerFromDrawerComponent } from './drawer-from-drawer/drawer-from-drawer.component';
import { DrawerMultiLevelDrawerComponent } from './drawer-multi-level-drawer/drawer-multi-level-drawer.component';
import { DrawerPlacementComponent } from './drawer-placement/drawer-placement.component';
import { DrawerServiceComponent } from './drawer-service/drawer-service.component';
import { DrawerUserProfileComponent } from './drawer-user-profile/drawer-user-profile.component';
import { DropdownBasicComponent } from './dropdown-basic/dropdown-basic.component';
import { DropdownContextMenuComponent } from './dropdown-context-menu/dropdown-context-menu.component';
import { DropdownDropdownButtonComponent } from './dropdown-dropdown-button/dropdown-dropdown-button.component';
import { DropdownEventComponent } from './dropdown-event/dropdown-event.component';
import { DropdownItemComponent } from './dropdown-item/dropdown-item.component';
import { DropdownOverlayVisibleComponent } from './dropdown-overlay-visible/dropdown-overlay-visible.component';
import { DropdownPlacementComponent } from './dropdown-placement/dropdown-placement.component';
import { DropdownSubMenuComponent } from './dropdown-sub-menu/dropdown-sub-menu.component';
import { DropdownTriggerComponent } from './dropdown-trigger/dropdown-trigger.component';
import { EmptyBasicComponent } from './empty-basic/empty-basic.component';
import { EmptyConfigComponent } from './empty-config/empty-config.component';
import { EmptyCustomizeComponent } from './empty-customize/empty-customize.component';
import { FormAdvancedSearchComponent } from './form-advanced-search/form-advanced-search.component';
import { FormCoordinatedComponent } from './form-coordinated/form-coordinated.component';
import { FormDynamicFormItemComponent } from './form-dynamic-form-item/form-dynamic-form-item.component';
import { FormDynamicRuleComponent } from './form-dynamic-rule/form-dynamic-rule.component';
import { FormHorizontalLoginComponent } from './form-horizontal-login/form-horizontal-login.component';
import { FormLayoutComponent } from './form-layout/form-layout.component';
import { FormNormalLoginComponent } from './form-normal-login/form-normal-login.component';
import { FormRegisterComponent } from './form-register/form-register.component';
import { FormTimeRelatedControlsComponent } from './form-time-related-controls/form-time-related-controls.component';
import { FormValidateReactiveComponent } from './form-validate-reactive/form-validate-reactive.component';
import { FormValidateStaticComponent } from './form-validate-static/form-validate-static.component';
import { GridBasicComponent } from './grid-basic/grid-basic.component';
import { GridFlexAlignComponent } from './grid-flex-align/grid-flex-align.component';
import { GridFlexOrderComponent } from './grid-flex-order/grid-flex-order.component';
import { GridFlexComponent } from './grid-flex/grid-flex.component';
import { GridGutterComponent } from './grid-gutter/grid-gutter.component';
import { GridOffsetComponent } from './grid-offset/grid-offset.component';
import { GridPlaygroundComponent } from './grid-playground/grid-playground.component';
import { GridResponsiveMoreComponent } from './grid-responsive-more/grid-responsive-more.component';
import { GridResponsiveComponent } from './grid-responsive/grid-responsive.component';
import { GridSortComponent } from './grid-sort/grid-sort.component';
import { IconBasicComponent } from './icon-basic/icon-basic.component';
import { IconCustomComponent } from './icon-custom/icon-custom.component';
import { IconIconfontComponent } from './icon-iconfont/icon-iconfont.component';
import { IconNamespaceComponent } from './icon-namespace/icon-namespace.component';
import { IconTwotoneComponent } from './icon-twotone/icon-twotone.component';
import { InputNumberBasicComponent } from './input-number-basic/input-number-basic.component';
import { InputNumberDigitComponent } from './input-number-digit/input-number-digit.component';
import { InputNumberDisabledComponent } from './input-number-disabled/input-number-disabled.component';
import { InputNumberFormatterComponent } from './input-number-formatter/input-number-formatter.component';
import { InputNumberSizeComponent } from './input-number-size/input-number-size.component';
import { InputAddonComponent } from './input-addon/input-addon.component';
import { InputAutosizeTextareaComponent } from './input-autosize-textarea/input-autosize-textarea.component';
import { InputBasicComponent } from './input-basic/input-basic.component';
import { InputGroupComponent } from './input-group/input-group.component';
import { InputPasswordInputComponent } from './input-password-input/input-password-input.component';
import { InputPresuffixComponent } from './input-presuffix/input-presuffix.component';
import { InputSearchInputComponent } from './input-search-input/input-search-input.component';
import { InputSizeComponent } from './input-size/input-size.component';
import { InputTextareaComponent } from './input-textarea/input-textarea.component';
import { InputTooltipComponent } from './input-tooltip/input-tooltip.component';
import { LayoutBasicComponent } from './layout-basic/layout-basic.component';
import { LayoutCustomTriggerComponent } from './layout-custom-trigger/layout-custom-trigger.component';
import { LayoutFixedSiderComponent } from './layout-fixed-sider/layout-fixed-sider.component';
import { LayoutFixedComponent } from './layout-fixed/layout-fixed.component';
import { LayoutResponsiveComponent } from './layout-responsive/layout-responsive.component';
import { LayoutSideComponent } from './layout-side/layout-side.component';
import { LayoutTopSideComponent } from './layout-top-side/layout-top-side.component';
import { LayoutTopComponent } from './layout-top/layout-top.component';
import { ListBasicComponent } from './list-basic/list-basic.component';
import { ListGridComponent } from './list-grid/list-grid.component';
import { ListInfiniteLoadComponent } from './list-infinite-load/list-infinite-load.component';
import { ListLoadmoreComponent } from './list-loadmore/list-loadmore.component';
import { ListResposiveComponent } from './list-resposive/list-resposive.component';
import { ListSimpleComponent } from './list-simple/list-simple.component';
import { ListVerticalComponent } from './list-vertical/list-vertical.component';
import { MentionAsyncComponent } from './mention-async/mention-async.component';
import { MentionAvatarComponent } from './mention-avatar/mention-avatar.component';
import { MentionBasicComponent } from './mention-basic/mention-basic.component';
import { MentionControlledComponent } from './mention-controlled/mention-controlled.component';
import { MentionCustomTagComponent } from './mention-custom-tag/mention-custom-tag.component';
import { MentionMultilinesComponent } from './mention-multilines/mention-multilines.component';
import { MentionMultipleTriggerComponent } from './mention-multiple-trigger/mention-multiple-trigger.component';
import { MentionPlacementComponent } from './mention-placement/mention-placement.component';
import { MentionPreviewComponent } from './mention-preview/mention-preview.component';
import { MentionReadonlyComponent } from './mention-readonly/mention-readonly.component';
import { MenuHorizontalComponent } from './menu-horizontal/menu-horizontal.component';
import { MenuInlineCollapsedComponent } from './menu-inline-collapsed/menu-inline-collapsed.component';
import { MenuInlineComponent } from './menu-inline/menu-inline.component';
import { MenuRecursiveComponent } from './menu-recursive/menu-recursive.component';
import { MenuSiderCurrentComponent } from './menu-sider-current/menu-sider-current.component';
import { MenuSwitchModeComponent } from './menu-switch-mode/menu-switch-mode.component';
import { MenuThemeComponent } from './menu-theme/menu-theme.component';
import { MenuVerticalComponent } from './menu-vertical/menu-vertical.component';
import { MessageCloseComponent } from './message-close/message-close.component';
import { MessageDurationComponent } from './message-duration/message-duration.component';
import { MessageInfoComponent } from './message-info/message-info.component';
import { MessageLoadingComponent } from './message-loading/message-loading.component';
import { MessageOtherComponent } from './message-other/message-other.component';
import { ModalAsyncComponent } from './modal-async/modal-async.component';
import { ModalBasicComponent } from './modal-basic/modal-basic.component';
import { ModalConfirmPromiseComponent } from './modal-confirm-promise/modal-confirm-promise.component';
import { ModalConfirmComponent } from './modal-confirm/modal-confirm.component';
import { ModalFooterComponent } from './modal-footer/modal-footer.component';
import { ModalInfoComponent } from './modal-info/modal-info.component';
import { ModalLocaleComponent } from './modal-locale/modal-locale.component';
import { ModalManualComponent } from './modal-manual/modal-manual.component';
import { ModalPositionComponent } from './modal-position/modal-position.component';
import { ModalServiceComponent } from './modal-service/modal-service.component';
import { NotificationBasicComponent } from './notification-basic/notification-basic.component';
import { NotificationCustomIconComponent } from './notification-custom-icon/notification-custom-icon.component';
import { NotificationCustomStyleComponent } from './notification-custom-style/notification-custom-style.component';
import { NotificationDurationComponent } from './notification-duration/notification-duration.component';
import { NotificationPlacementComponent } from './notification-placement/notification-placement.component';
import { NotificationTemplateComponent } from './notification-template/notification-template.component';
import { NotificationUpdateComponent } from './notification-update/notification-update.component';
import { NotificationWithBtnComponent } from './notification-with-btn/notification-with-btn.component';
import { NotificationWithIconComponent } from './notification-with-icon/notification-with-icon.component';
import { PageHeaderActionsComponent } from './page-header-actions/page-header-actions.component';
import { PageHeaderBasicComponent } from './page-header-basic/page-header-basic.component';
import { PageHeaderBreadcrumbComponent } from './page-header-breadcrumb/page-header-breadcrumb.component';
import { PageHeaderContentComponent } from './page-header-content/page-header-content.component';
import { PaginationBasicComponent } from './pagination-basic/pagination-basic.component';
import { PaginationChangerComponent } from './pagination-changer/pagination-changer.component';
import { PaginationControlledComponent } from './pagination-controlled/pagination-controlled.component';
import { PaginationItemRenderComponent } from './pagination-item-render/pagination-item-render.component';
import { PaginationJumpComponent } from './pagination-jump/pagination-jump.component';
import { PaginationMiniComponent } from './pagination-mini/pagination-mini.component';
import { PaginationMoreComponent } from './pagination-more/pagination-more.component';
import { PaginationSimpleComponent } from './pagination-simple/pagination-simple.component';
import { PaginationTotalComponent } from './pagination-total/pagination-total.component';
import { PopconfirmBasicComponent } from './popconfirm-basic/popconfirm-basic.component';
import { PopconfirmCustomIconComponent } from './popconfirm-custom-icon/popconfirm-custom-icon.component';
import { PopconfirmDynamicTriggerComponent } from './popconfirm-dynamic-trigger/popconfirm-dynamic-trigger.component';
import { PopconfirmLocaleComponent } from './popconfirm-locale/popconfirm-locale.component';
import { PopconfirmPlacementComponent } from './popconfirm-placement/popconfirm-placement.component';
import { PopoverArrowPointAtCenterComponent } from './popover-arrow-point-at-center/popover-arrow-point-at-center.component';
import { PopoverBasicComponent } from './popover-basic/popover-basic.component';
import { PopoverControlComponent } from './popover-control/popover-control.component';
import { PopoverPlacementComponent } from './popover-placement/popover-placement.component';
import { PopoverTemplateComponent } from './popover-template/popover-template.component';
import { PopoverTriggerTypeComponent } from './popover-trigger-type/popover-trigger-type.component';
import { ProgressCircleDynamicComponent } from './progress-circle-dynamic/progress-circle-dynamic.component';
import { ProgressCircleMiniComponent } from './progress-circle-mini/progress-circle-mini.component';
import { ProgressCircleComponent } from './progress-circle/progress-circle.component';
import { ProgressDashboardComponent } from './progress-dashboard/progress-dashboard.component';
import { ProgressDynamicComponent } from './progress-dynamic/progress-dynamic.component';
import { ProgressFormatComponent } from './progress-format/progress-format.component';
import { ProgressLineMiniComponent } from './progress-line-mini/progress-line-mini.component';
import { ProgressLineComponent } from './progress-line/progress-line.component';
import { ProgressRoundComponent } from './progress-round/progress-round.component';
import { ProgressSegmentComponent } from './progress-segment/progress-segment.component';
import { RadioBasicComponent } from './radio-basic/radio-basic.component';
import { RadioDisableComponent } from './radio-disable/radio-disable.component';
import { RadioRadiobuttonComponent } from './radio-radiobutton/radio-radiobutton.component';
import { RadioRadiogroupMoreComponent } from './radio-radiogroup-more/radio-radiogroup-more.component';
import { RadioRadiogroupOptionsComponent } from './radio-radiogroup-options/radio-radiogroup-options.component';
import { RadioRadiogroupWithNameComponent } from './radio-radiogroup-with-name/radio-radiogroup-with-name.component';
import { RadioRadiogroupComponent } from './radio-radiogroup/radio-radiogroup.component';
import { RadioSizeComponent } from './radio-size/radio-size.component';
import { RadioSolidComponent } from './radio-solid/radio-solid.component';
import { RateBasicComponent } from './rate-basic/rate-basic.component';
import { RateCharacterComponent } from './rate-character/rate-character.component';
import { RateClearComponent } from './rate-clear/rate-clear.component';
import { RateDisabledComponent } from './rate-disabled/rate-disabled.component';
import { RateHalfComponent } from './rate-half/rate-half.component';
import { RateTextComponent } from './rate-text/rate-text.component';
import { SelectAutomaticTokenizationComponent } from './select-automatic-tokenization/select-automatic-tokenization.component';
import { SelectBasicComponent } from './select-basic/select-basic.component';
import { SelectCoordinateComponent } from './select-coordinate/select-coordinate.component';
import { SelectCustomContentComponent } from './select-custom-content/select-custom-content.component';
import { SelectCustomDropdownMenuComponent } from './select-custom-dropdown-menu/select-custom-dropdown-menu.component';
import { SelectHideSelectedComponent } from './select-hide-selected/select-hide-selected.component';
import { SelectLabelInValueComponent } from './select-label-in-value/select-label-in-value.component';
import { SelectMultipleComponent } from './select-multiple/select-multiple.component';
import { SelectOptgroupComponent } from './select-optgroup/select-optgroup.component';
import { SelectScrollLoadComponent } from './select-scroll-load/select-scroll-load.component';
import { SelectSearchBoxComponent } from './select-search-box/select-search-box.component';
import { SelectSearchComponent } from './select-search/select-search.component';
import { SelectSelectUsersComponent } from './select-select-users/select-select-users.component';
import { SelectSizeComponent } from './select-size/select-size.component';
import { SelectTagsComponent } from './select-tags/select-tags.component';
import { SkeletonActiveComponent } from './skeleton-active/skeleton-active.component';
import { SkeletonBasicComponent } from './skeleton-basic/skeleton-basic.component';
import { SkeletonChildrenComponent } from './skeleton-children/skeleton-children.component';
import { SkeletonComplexComponent } from './skeleton-complex/skeleton-complex.component';
import { SkeletonListComponent } from './skeleton-list/skeleton-list.component';
import { SliderBasicComponent } from './slider-basic/slider-basic.component';
import { SliderEventComponent } from './slider-event/slider-event.component';
import { SliderIconSliderComponent } from './slider-icon-slider/slider-icon-slider.component';
import { SliderInputNumberComponent } from './slider-input-number/slider-input-number.component';
import { SliderMarkComponent } from './slider-mark/slider-mark.component';
import { SliderTipFormatterComponent } from './slider-tip-formatter/slider-tip-formatter.component';
import { SliderTooltipComponent } from './slider-tooltip/slider-tooltip.component';
import { SliderVerticalComponent } from './slider-vertical/slider-vertical.component';
import { SpinBasicComponent } from './spin-basic/spin-basic.component';
import { SpinCustomIndicatorComponent } from './spin-custom-indicator/spin-custom-indicator.component';
import { SpinDelayAndDebounceComponent } from './spin-delay-and-debounce/spin-delay-and-debounce.component';
import { SpinInsideComponent } from './spin-inside/spin-inside.component';
import { SpinNestedComponent } from './spin-nested/spin-nested.component';
import { SpinSizeComponent } from './spin-size/spin-size.component';
import { SpinTipComponent } from './spin-tip/spin-tip.component';
import { StatisticBasicComponent } from './statistic-basic/statistic-basic.component';
import { StatisticCardComponent } from './statistic-card/statistic-card.component';
import { StatisticCountdownComponent } from './statistic-countdown/statistic-countdown.component';
import { StatisticUnitComponent } from './statistic-unit/statistic-unit.component';
import { StepsCustomizedProgressDotComponent } from './steps-customized-progress-dot/steps-customized-progress-dot.component';
import { StepsErrorComponent } from './steps-error/steps-error.component';
import { StepsIconComponent } from './steps-icon/steps-icon.component';
import { StepsProgressDotComponent } from './steps-progress-dot/steps-progress-dot.component';
import { StepsSimpleComponent } from './steps-simple/steps-simple.component';
import { StepsSmallSizeComponent } from './steps-small-size/steps-small-size.component';
import { StepsStartIndexComponent } from './steps-start-index/steps-start-index.component';
import { StepsStepNextComponent } from './steps-step-next/steps-step-next.component';
import { StepsVerticalSmallComponent } from './steps-vertical-small/steps-vertical-small.component';
import { StepsVerticalComponent } from './steps-vertical/steps-vertical.component';
import { SwitchBasicComponent } from './switch-basic/switch-basic.component';
import { SwitchControlComponent } from './switch-control/switch-control.component';
import { SwitchDisabledComponent } from './switch-disabled/switch-disabled.component';
import { SwitchLoadingComponent } from './switch-loading/switch-loading.component';
import { SwitchSizeComponent } from './switch-size/switch-size.component';
import { SwitchTextComponent } from './switch-text/switch-text.component';
import { TableBasicComponent } from './table-basic/table-basic.component';
import { TableBorderedComponent } from './table-bordered/table-bordered.component';
import { TableColspanRowspanComponent } from './table-colspan-rowspan/table-colspan-rowspan.component';
import { TableCustomFilterPanelComponent } from './table-custom-filter-panel/table-custom-filter-panel.component';
import { TableDefaultFilterComponent } from './table-default-filter/table-default-filter.component';
import { TableDragSortingComponent } from './table-drag-sorting/table-drag-sorting.component';
import { TableDynamicSettingsComponent } from './table-dynamic-settings/table-dynamic-settings.component';
import { TableEditCellComponent } from './table-edit-cell/table-edit-cell.component';
import { TableEditRowComponent } from './table-edit-row/table-edit-row.component';
import { TableExpandChildrenComponent } from './table-expand-children/table-expand-children.component';
import { TableExpandComponent } from './table-expand/table-expand.component';
import { TableFixedColumnsHeaderComponent } from './table-fixed-columns-header/table-fixed-columns-header.component';
import { TableFixedColumnsComponent } from './table-fixed-columns/table-fixed-columns.component';
import { TableFixedHeaderComponent } from './table-fixed-header/table-fixed-header.component';
import { TableGroupingColumnsComponent } from './table-grouping-columns/table-grouping-columns.component';
import { TableHeadComponent } from './table-head/table-head.component';
import { TableNestedTableComponent } from './table-nested-table/table-nested-table.component';
import { TableResetFilterComponent } from './table-reset-filter/table-reset-filter.component';
import { TableRowSelectionAndOperationComponent } from './table-row-selection-and-operation/table-row-selection-and-operation.component';
import { TableRowSelectionCustomComponent } from './table-row-selection-custom/table-row-selection-custom.component';
import { TableSizeComponent } from './table-size/table-size.component';
import { TableTemplateComponent } from './table-template/table-template.component';
import { TableVirtualComponent } from './table-virtual/table-virtual.component';
import { TabsBasicComponent } from './tabs-basic/tabs-basic.component';
import { TabsCardTopComponent } from './tabs-card-top/tabs-card-top.component';
import { TabsCardComponent } from './tabs-card/tabs-card.component';
import { TabsCustomAddTriggerComponent } from './tabs-custom-add-trigger/tabs-custom-add-trigger.component';
import { TabsDisabledComponent } from './tabs-disabled/tabs-disabled.component';
import { TabsEditableCardComponent } from './tabs-editable-card/tabs-editable-card.component';
import { TabsExtraComponent } from './tabs-extra/tabs-extra.component';
import { TabsIconComponent } from './tabs-icon/tabs-icon.component';
import { TabsPositionComponent } from './tabs-position/tabs-position.component';
import { TabsSizeComponent } from './tabs-size/tabs-size.component';
import { TabsSlideComponent } from './tabs-slide/tabs-slide.component';
import { TagBasicComponent } from './tag-basic/tag-basic.component';
import { TagCheckableComponent } from './tag-checkable/tag-checkable.component';
import { TagColorfulComponent } from './tag-colorful/tag-colorful.component';
import { TagControlComponent } from './tag-control/tag-control.component';
import { TagHotTagsComponent } from './tag-hot-tags/tag-hot-tags.component';
import { TimePickerAddonComponent } from './time-picker-addon/time-picker-addon.component';
import { TimePickerBasicComponent } from './time-picker-basic/time-picker-basic.component';
import { TimePickerDisabledPartComponent } from './time-picker-disabled-part/time-picker-disabled-part.component';
import { TimePickerDisabledComponent } from './time-picker-disabled/time-picker-disabled.component';
import { TimePickerHideColumnComponent } from './time-picker-hide-column/time-picker-hide-column.component';
import { TimePickerIntervalOptionsComponent } from './time-picker-interval-options/time-picker-interval-options.component';
import { TimePickerSizeComponent } from './time-picker-size/time-picker-size.component';
import { TimePickerValueComponent } from './time-picker-value/time-picker-value.component';
import { TimelineAlternateComponent } from './timeline-alternate/timeline-alternate.component';
import { TimelineBasicComponent } from './timeline-basic/timeline-basic.component';
import { TimelineColorComponent } from './timeline-color/timeline-color.component';
import { TimelineCustomComponent } from './timeline-custom/timeline-custom.component';
import { TimelinePendingComponent } from './timeline-pending/timeline-pending.component';
import { TimelineRightComponent } from './timeline-right/timeline-right.component';
import { TooltipArrowPointAtCenterComponent } from './tooltip-arrow-point-at-center/tooltip-arrow-point-at-center.component';
import { TooltipBasicComponent } from './tooltip-basic/tooltip-basic.component';
import { TooltipPlacementComponent } from './tooltip-placement/tooltip-placement.component';
import { TooltipTemplateComponent } from './tooltip-template/tooltip-template.component';
import { TransferAdvancedComponent } from './transfer-advanced/transfer-advanced.component';
import { TransferBasicComponent } from './transfer-basic/transfer-basic.component';
import { TransferCanMoveComponent } from './transfer-can-move/transfer-can-move.component';
import { TransferCustomItemComponent } from './transfer-custom-item/transfer-custom-item.component';
import { TransferSearchComponent } from './transfer-search/transfer-search.component';
import { TreeSelectAsyncComponent } from './tree-select-async/tree-select-async.component';
import { TreeSelectBasicComponent } from './tree-select-basic/tree-select-basic.component';
import { TreeSelectCheckableComponent } from './tree-select-checkable/tree-select-checkable.component';
import { TreeSelectMultipleComponent } from './tree-select-multiple/tree-select-multiple.component';
import { TreeBasicControlledComponent } from './tree-basic-controlled/tree-basic-controlled.component';
import { TreeBasicComponent } from './tree-basic/tree-basic.component';
import { TreeCustomizedIconComponent } from './tree-customized-icon/tree-customized-icon.component';
import { TreeDirectoryComponent } from './tree-directory/tree-directory.component';
import { TreeDraggableConfirmComponent } from './tree-draggable-confirm/tree-draggable-confirm.component';
import { TreeDraggableComponent } from './tree-draggable/tree-draggable.component';
import { TreeDynamicComponent } from './tree-dynamic/tree-dynamic.component';
import { TreeLineComponent } from './tree-line/tree-line.component';
import { TreeSearchComponent } from './tree-search/tree-search.component';
import { UploadAvatarComponent } from './upload-avatar/upload-avatar.component';
import { UploadBasicComponent } from './upload-basic/upload-basic.component';
import { UploadCustomRequestComponent } from './upload-custom-request/upload-custom-request.component';
import { UploadDirectoryComponent } from './upload-directory/upload-directory.component';
import { UploadDragComponent } from './upload-drag/upload-drag.component';
import { UploadFileListComponent } from './upload-file-list/upload-file-list.component';
import { UploadFilterComponent } from './upload-filter/upload-filter.component';
import { UploadManuallyComponent } from './upload-manually/upload-manually.component';
import { UploadPictureCardComponent } from './upload-picture-card/upload-picture-card.component';
import { UploadPictureStyleComponent } from './upload-picture-style/upload-picture-style.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { AllSchematicsComponent } from './all-schematics/all-schematics.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    AffixBasicComponent,
    AffixOnChangeComponent,
    AffixTargetComponent,
    AlertBannerComponent,
    AlertBasicComponent,
    AlertClosableComponent,
    AlertCloseTextComponent,
    AlertDescriptionComponent,
    AlertIconComponent,
    AlertStyleComponent,
    AnchorBasicComponent,
    AnchorStaticComponent,
    AutoCompleteBasicComponent,
    AutoCompleteCertainCategoryComponent,
    AutoCompleteCustomComponent,
    AutoCompleteNonCaseSensitiveComponent,
    AutoCompleteOptionsComponent,
    AutoCompleteUncertainCategoryComponent,
    AvatarBadgeComponent,
    AvatarBasicComponent,
    AvatarDynamicComponent,
    AvatarTypeComponent,
    BackTopBasicComponent,
    BackTopCustomComponent,
    BackTopTargetComponent,
    BadgeBasicComponent,
    BadgeChangeComponent,
    BadgeDotComponent,
    BadgeLinkComponent,
    BadgeNoWrapperComponent,
    BadgeOverflowComponent,
    BadgeStatusComponent,
    BreadcrumbAutoComponent,
    BreadcrumbBasicComponent,
    BreadcrumbRouterComponent,
    BreadcrumbSeparatorComponent,
    BreadcrumbWithIconComponent,
    ButtonBasicComponent,
    ButtonBlockComponent,
    ButtonButtonGroupComponent,
    ButtonDisabledComponent,
    ButtonGhostComponent,
    ButtonIconComponent,
    ButtonLoadingComponent,
    ButtonMultipleComponent,
    ButtonSizeComponent,
    CalendarBasicComponent,
    CalendarCardComponent,
    CalendarNoticeCalendarComponent,
    CalendarSelectComponent,
    CardBasicComponent,
    CardBorderLessComponent,
    CardFlexibleContentComponent,
    CardGridCardComponent,
    CardInColumnComponent,
    CardInnerComponent,
    CardLoadingComponent,
    CardMetaComponent,
    CardSimpleComponent,
    CardTabsComponent,
    CarouselAutoplayComponent,
    CarouselBasicComponent,
    CarouselFadeComponent,
    CarouselVerticalComponent,
    CascaderBasicComponent,
    CascaderChangeOnFunctionComponent,
    CascaderChangeOnSelectComponent,
    CascaderCustomFieldNamesComponent,
    CascaderCustomRenderComponent,
    CascaderDefaultValueComponent,
    CascaderDisabledComponent,
    CascaderHoverComponent,
    CascaderLazyComponent,
    CascaderModalComponent,
    CascaderReactiveFormComponent,
    CascaderSearchComponent,
    CascaderSizeComponent,
    CascaderTriggerActionComponent,
    CascaderTriggerComponent,
    CheckboxBasicComponent,
    CheckboxCheckAllComponent,
    CheckboxControllerComponent,
    CheckboxDisabledComponent,
    CheckboxGroupComponent,
    CheckboxLayoutComponent,
    CollapseAccordionComponent,
    CollapseBasicComponent,
    CollapseBorderlessComponent,
    CollapseCustomComponent,
    CollapseExtraComponent,
    CollapseMixComponent,
    CollapseNoarrowComponent,
    CommentBasicComponent,
    CommentEditorComponent,
    CommentListComponent,
    CommentNestedComponent,
    DatePickerBasicComponent,
    DatePickerDateRenderComponent,
    DatePickerDisabledDateComponent,
    DatePickerDisabledComponent,
    DatePickerExtraFooterComponent,
    DatePickerFormatComponent,
    DatePickerModeComponent,
    DatePickerPresettedRangesComponent,
    DatePickerSizeComponent,
    DatePickerStartEndComponent,
    DatePickerTimeComponent,
    DividerHorizontalComponent,
    DividerOrientationComponent,
    DividerVerticalComponent,
    DrawerBasicRightComponent,
    DrawerFromDrawerComponent,
    DrawerMultiLevelDrawerComponent,
    DrawerPlacementComponent,
    DrawerServiceComponent,
    DrawerUserProfileComponent,
    DropdownBasicComponent,
    DropdownContextMenuComponent,
    DropdownDropdownButtonComponent,
    DropdownEventComponent,
    DropdownItemComponent,
    DropdownOverlayVisibleComponent,
    DropdownPlacementComponent,
    DropdownSubMenuComponent,
    DropdownTriggerComponent,
    EmptyBasicComponent,
    EmptyConfigComponent,
    EmptyCustomizeComponent,
    FormAdvancedSearchComponent,
    FormCoordinatedComponent,
    FormDynamicFormItemComponent,
    FormDynamicRuleComponent,
    FormHorizontalLoginComponent,
    FormLayoutComponent,
    FormNormalLoginComponent,
    FormRegisterComponent,
    FormTimeRelatedControlsComponent,
    FormValidateReactiveComponent,
    FormValidateStaticComponent,
    GridBasicComponent,
    GridFlexAlignComponent,
    GridFlexOrderComponent,
    GridFlexComponent,
    GridGutterComponent,
    GridOffsetComponent,
    GridPlaygroundComponent,
    GridResponsiveMoreComponent,
    GridResponsiveComponent,
    GridSortComponent,
    IconBasicComponent,
    IconCustomComponent,
    IconIconfontComponent,
    IconNamespaceComponent,
    IconTwotoneComponent,
    InputNumberBasicComponent,
    InputNumberDigitComponent,
    InputNumberDisabledComponent,
    InputNumberFormatterComponent,
    InputNumberSizeComponent,
    InputAddonComponent,
    InputAutosizeTextareaComponent,
    InputBasicComponent,
    InputGroupComponent,
    InputPasswordInputComponent,
    InputPresuffixComponent,
    InputSearchInputComponent,
    InputSizeComponent,
    InputTextareaComponent,
    InputTooltipComponent,
    LayoutBasicComponent,
    LayoutCustomTriggerComponent,
    LayoutFixedSiderComponent,
    LayoutFixedComponent,
    LayoutResponsiveComponent,
    LayoutSideComponent,
    LayoutTopSideComponent,
    LayoutTopComponent,
    ListBasicComponent,
    ListGridComponent,
    ListInfiniteLoadComponent,
    ListLoadmoreComponent,
    ListResposiveComponent,
    ListSimpleComponent,
    ListVerticalComponent,
    MentionAsyncComponent,
    MentionAvatarComponent,
    MentionBasicComponent,
    MentionControlledComponent,
    MentionCustomTagComponent,
    MentionMultilinesComponent,
    MentionMultipleTriggerComponent,
    MentionPlacementComponent,
    MentionPreviewComponent,
    MentionReadonlyComponent,
    MenuHorizontalComponent,
    MenuInlineCollapsedComponent,
    MenuInlineComponent,
    MenuRecursiveComponent,
    MenuSiderCurrentComponent,
    MenuSwitchModeComponent,
    MenuThemeComponent,
    MenuVerticalComponent,
    MessageCloseComponent,
    MessageDurationComponent,
    MessageInfoComponent,
    MessageLoadingComponent,
    MessageOtherComponent,
    ModalAsyncComponent,
    ModalBasicComponent,
    ModalConfirmPromiseComponent,
    ModalConfirmComponent,
    ModalFooterComponent,
    ModalInfoComponent,
    ModalLocaleComponent,
    ModalManualComponent,
    ModalPositionComponent,
    ModalServiceComponent,
    NotificationBasicComponent,
    NotificationCustomIconComponent,
    NotificationCustomStyleComponent,
    NotificationDurationComponent,
    NotificationPlacementComponent,
    NotificationTemplateComponent,
    NotificationUpdateComponent,
    NotificationWithBtnComponent,
    NotificationWithIconComponent,
    PageHeaderActionsComponent,
    PageHeaderBasicComponent,
    PageHeaderBreadcrumbComponent,
    PageHeaderContentComponent,
    PaginationBasicComponent,
    PaginationChangerComponent,
    PaginationControlledComponent,
    PaginationItemRenderComponent,
    PaginationJumpComponent,
    PaginationMiniComponent,
    PaginationMoreComponent,
    PaginationSimpleComponent,
    PaginationTotalComponent,
    PopconfirmBasicComponent,
    PopconfirmCustomIconComponent,
    PopconfirmDynamicTriggerComponent,
    PopconfirmLocaleComponent,
    PopconfirmPlacementComponent,
    PopoverArrowPointAtCenterComponent,
    PopoverBasicComponent,
    PopoverControlComponent,
    PopoverPlacementComponent,
    PopoverTemplateComponent,
    PopoverTriggerTypeComponent,
    ProgressCircleDynamicComponent,
    ProgressCircleMiniComponent,
    ProgressCircleComponent,
    ProgressDashboardComponent,
    ProgressDynamicComponent,
    ProgressFormatComponent,
    ProgressLineMiniComponent,
    ProgressLineComponent,
    ProgressRoundComponent,
    ProgressSegmentComponent,
    RadioBasicComponent,
    RadioDisableComponent,
    RadioRadiobuttonComponent,
    RadioRadiogroupMoreComponent,
    RadioRadiogroupOptionsComponent,
    RadioRadiogroupWithNameComponent,
    RadioRadiogroupComponent,
    RadioSizeComponent,
    RadioSolidComponent,
    RateBasicComponent,
    RateCharacterComponent,
    RateClearComponent,
    RateDisabledComponent,
    RateHalfComponent,
    RateTextComponent,
    SelectAutomaticTokenizationComponent,
    SelectBasicComponent,
    SelectCoordinateComponent,
    SelectCustomContentComponent,
    SelectCustomDropdownMenuComponent,
    SelectHideSelectedComponent,
    SelectLabelInValueComponent,
    SelectMultipleComponent,
    SelectOptgroupComponent,
    SelectScrollLoadComponent,
    SelectSearchBoxComponent,
    SelectSearchComponent,
    SelectSelectUsersComponent,
    SelectSizeComponent,
    SelectTagsComponent,
    SkeletonActiveComponent,
    SkeletonBasicComponent,
    SkeletonChildrenComponent,
    SkeletonComplexComponent,
    SkeletonListComponent,
    SliderBasicComponent,
    SliderEventComponent,
    SliderIconSliderComponent,
    SliderInputNumberComponent,
    SliderMarkComponent,
    SliderTipFormatterComponent,
    SliderTooltipComponent,
    SliderVerticalComponent,
    SpinBasicComponent,
    SpinCustomIndicatorComponent,
    SpinDelayAndDebounceComponent,
    SpinInsideComponent,
    SpinNestedComponent,
    SpinSizeComponent,
    SpinTipComponent,
    StatisticBasicComponent,
    StatisticCardComponent,
    StatisticCountdownComponent,
    StatisticUnitComponent,
    StepsCustomizedProgressDotComponent,
    StepsErrorComponent,
    StepsIconComponent,
    StepsProgressDotComponent,
    StepsSimpleComponent,
    StepsSmallSizeComponent,
    StepsStartIndexComponent,
    StepsStepNextComponent,
    StepsVerticalSmallComponent,
    StepsVerticalComponent,
    SwitchBasicComponent,
    SwitchControlComponent,
    SwitchDisabledComponent,
    SwitchLoadingComponent,
    SwitchSizeComponent,
    SwitchTextComponent,
    TableBasicComponent,
    TableBorderedComponent,
    TableColspanRowspanComponent,
    TableCustomFilterPanelComponent,
    TableDefaultFilterComponent,
    TableDragSortingComponent,
    TableDynamicSettingsComponent,
    TableEditCellComponent,
    TableEditRowComponent,
    TableExpandChildrenComponent,
    TableExpandComponent,
    TableFixedColumnsHeaderComponent,
    TableFixedColumnsComponent,
    TableFixedHeaderComponent,
    TableGroupingColumnsComponent,
    TableHeadComponent,
    TableNestedTableComponent,
    TableResetFilterComponent,
    TableRowSelectionAndOperationComponent,
    TableRowSelectionCustomComponent,
    TableSizeComponent,
    TableTemplateComponent,
    TableVirtualComponent,
    TabsBasicComponent,
    TabsCardTopComponent,
    TabsCardComponent,
    TabsCustomAddTriggerComponent,
    TabsDisabledComponent,
    TabsEditableCardComponent,
    TabsExtraComponent,
    TabsIconComponent,
    TabsPositionComponent,
    TabsSizeComponent,
    TabsSlideComponent,
    TagBasicComponent,
    TagCheckableComponent,
    TagColorfulComponent,
    TagControlComponent,
    TagHotTagsComponent,
    TimePickerAddonComponent,
    TimePickerBasicComponent,
    TimePickerDisabledPartComponent,
    TimePickerDisabledComponent,
    TimePickerHideColumnComponent,
    TimePickerIntervalOptionsComponent,
    TimePickerSizeComponent,
    TimePickerValueComponent,
    TimelineAlternateComponent,
    TimelineBasicComponent,
    TimelineColorComponent,
    TimelineCustomComponent,
    TimelinePendingComponent,
    TimelineRightComponent,
    TooltipArrowPointAtCenterComponent,
    TooltipBasicComponent,
    TooltipPlacementComponent,
    TooltipTemplateComponent,
    TransferAdvancedComponent,
    TransferBasicComponent,
    TransferCanMoveComponent,
    TransferCustomItemComponent,
    TransferSearchComponent,
    TreeSelectAsyncComponent,
    TreeSelectBasicComponent,
    TreeSelectCheckableComponent,
    TreeSelectMultipleComponent,
    TreeBasicControlledComponent,
    TreeBasicComponent,
    TreeCustomizedIconComponent,
    TreeDirectoryComponent,
    TreeDraggableConfirmComponent,
    TreeDraggableComponent,
    TreeDynamicComponent,
    TreeLineComponent,
    TreeSearchComponent,
    UploadAvatarComponent,
    UploadBasicComponent,
    UploadCustomRequestComponent,
    UploadDirectoryComponent,
    UploadDragComponent,
    UploadFileListComponent,
    UploadFilterComponent,
    UploadManuallyComponent,
    UploadPictureCardComponent,
    UploadPictureStyleComponent,
    AllSchematicsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
