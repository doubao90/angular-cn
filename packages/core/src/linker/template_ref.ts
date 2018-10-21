/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {R3_TEMPLATE_REF_FACTORY} from '../ivy_switch/runtime/index';

import {ElementRef} from './element_ref';
import {EmbeddedViewRef} from './view_ref';


/**
 * Represents an embedded template that can be used to instantiate embedded views.
 * To instantiate embedded views based on a template, use the `ViewContainerRef`
 * method `createEmbeddedView()`.
 *
 * 表示一个内嵌模板，它可用于实例化内嵌的视图。
 * 要想根据模板实例化内嵌的视图，请使用 `ViewContainerRef` 的 `createEmbeddedView()` 方法。
 *
 * Access a `TemplateRef` instance by placing a directive on an `<ng-template>`
 * element (or directive prefixed with `*`). The `TemplateRef` for the embedded view
 * is injected into the constructor of the directive,
 * using the `TemplateRef` token.
 *
 * 通过把一个指令放在 `<ng-template>` 元素（或一个带 `*` 前缀的指令）上，可以访问 `TemplateRef` 的实例。
 * 内嵌视图的 `TemplateRef` 实例会以 `TemplateRef` 作为令牌，注入到该指令的构造函数中。
 *
 * You can also use a `Query` to find a `TemplateRef` associated with
 * a component or a directive.
 *
 * 你还可以使用 `Query` 来找出与某个组件或指令相关的 `TemplateRef`。
 *
 * @see `ViewContainerRef`
 * @see [Navigate the Component Tree with DI](guide/dependency-injection-navtree)
 *
 * [使用 DI 在组件树中导航](guide/dependency-injection-navtree)
 *
 */
export abstract class TemplateRef<C> {
  /**
   * The anchor element in the parent view for this embedded view.
   *
   * 内嵌视图在其所属视图中的位置。
   *
   * The data-binding and injection contexts of embedded views created from this `TemplateRef`
   * inherit from the contexts of this location.
   *
   * 对于从这个 `TemplateRef` 创建的内嵌视图，其数据绑定和依赖注入的上下文是从当前位置的上下文中继承而来的。
   *
   * Typically new embedded views are attached to the view container of this location, but in
   * advanced use-cases, the view can be attached to a different container while keeping the
   * data-binding and injection context from the original location.
   *
   * 通常，新的内嵌视图会被附加到当前位置的视图容器中，但是在一些高级用例中，该视图可能被附加到别的容器中，
   * 同时还保留原位置的数据绑定和依赖注入上下文。
   *
   */
  // TODO(i): rename to anchor or location
  abstract get elementRef(): ElementRef;

  /**
   * Creates a view object and attaches it to the view container of the parent view.
   * @param context The context for the new view, inherited from the anchor element.
   * @returns The new view object.
   */
  abstract createEmbeddedView(context: C): EmbeddedViewRef<C>;

  /** @internal */
  static __NG_ELEMENT_ID__:
      () => TemplateRef<any> = () => R3_TEMPLATE_REF_FACTORY(TemplateRef, ElementRef)
}
