import { NextPageContext, PreviewData, GetServerSideProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import * as next_document from 'next/document';
import { Head as Head$2, NextScript as NextScript$2, DocumentProps, DocumentContext, DocumentInitialProps } from 'next/document';
import * as react from 'react';

declare type ActionSource = "strict-dynamic" | "report-sample";
declare type BaseSource = "self" | "unsafe-eval" | "unsafe-hashes" | "unsafe-inline" | "none";
declare type CryptoSource = `${"nonce" | "sha256" | "sha384" | "sha512"}-${string}`;
declare type FrameSource = HostSource | SchemeSource | "self" | "none";
declare type HostNameScheme = `${string}.${string}` | "localhost";
declare type HostSource = `${HostProtocolSchemes}${HostNameScheme}${PortScheme}`;
declare type HostProtocolSchemes = `${string}://` | "";
declare type HttpDelineator = "/" | "?" | "#" | "\\";
declare type PortScheme = `:${number}` | "" | ":*";
declare type SchemeSource = "http:" | "https:" | "data:" | "mediastream:" | "blob:" | "filesystem:";
declare type Source = HostSource | SchemeSource | CryptoSource | BaseSource;
declare type Sources = Source[];
declare type UriPath = `${HttpDelineator}${string}` | `${HostSource}${HttpDelineator}${string}`;
interface CspDirectives {
    "child-src"?: Sources;
    "default-src"?: Array<Source | ActionSource>;
    "frame-src"?: Sources;
    "worker-src"?: Sources;
    "connect-src"?: Sources;
    "font-src"?: Sources;
    "img-src"?: Sources;
    "manifest-src"?: Sources;
    "media-src"?: Sources;
    "object-src"?: Sources;
    "prefetch-src"?: Sources;
    "script-src"?: Array<Source | ActionSource>;
    "script-src-elem"?: Sources;
    "script-src-attr"?: Sources;
    "style-src"?: Array<Source | ActionSource>;
    "style-src-elem"?: Sources;
    "style-src-attr"?: Sources;
    "base-uri"?: Array<Source | ActionSource>;
    sandbox?: boolean | Array<"allow-downloads-without-user-activation" | "allow-forms" | "allow-modals" | "allow-orientation-lock" | "allow-pointer-lock" | "allow-popups" | "allow-popups-to-escape-sandbox" | "allow-presentation" | "allow-same-origin" | "allow-scripts" | "allow-storage-access-by-user-activation" | "allow-top-navigation" | "allow-top-navigation-by-user-activation">;
    "form-action"?: Array<Source | ActionSource>;
    "frame-ancestors"?: Array<HostSource | SchemeSource | FrameSource>;
    "navigate-to"?: Array<Source | ActionSource>;
    "report-uri"?: UriPath[];
    "report-to"?: string[];
    "require-trusted-types-for"?: Array<"script">;
    "trusted-types"?: Array<"none" | "allow-duplicates" | "*" | string>;
    "upgrade-insecure-requests"?: boolean;
    /** @deprecated */
    "require-sri-for"?: Array<"script" | "style" | "script style">;
    /** @deprecated */
    "block-all-mixed-content"?: boolean;
    /** @deprecated */
    "plugin-types"?: Array<`${string}/${string}` | "none">;
    /** @deprecated */
    referrer?: Array<"no-referrer" | "no-referrer-when-downgrade" | "origin" | "origin-when-cross-origin" | "same-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url" | "none">;
}
declare type BooleanDirectives = "upgrade-insecure-requests" | "block-all-mixed-content";
declare type CspDirectivesLenient = Partial<Partial<Record<keyof CspDirectives, string | string[] | boolean>>>;
declare type CspFilter = {
    [K in Exclude<keyof CspDirectives, BooleanDirectives>]?: RegExp | CspDirectives[K];
};
declare type CspManifest = {
    scripts: {
        src?: string;
        hash: string;
    }[];
    styles: {
        elem: string[];
        attr: string[];
    };
};

declare const toCspContent: (csp: CspDirectives | CspDirectivesLenient) => string;
declare const fromCspContent: (content: string) => CspDirectives;
declare const extendCsp: (csp?: CspDirectives | CspDirectivesLenient, cspExtension?: CspDirectives | CspDirectivesLenient, mergedDirectiveValues?: "append" | "prepend" | "override") => CspDirectives;
declare const filterCsp: (directives: CspDirectives | CspDirectivesLenient, excludePatterns: CspFilter) => CspDirectives;
declare const cspDirectiveHas: (directives: CspDirectives | CspDirectivesLenient, directive: Exclude<keyof CspDirectives, BooleanDirectives>, patternOrValue: RegExp | string) => boolean;

declare const logCtxHeaders: (ctx: NextPageContext, excludeLongHeaders?: boolean) => void;

declare type CtxHeaders = Pick<NextPageContext, "req" | "res">;

declare const getCtxCsp: (ctx: CtxHeaders) => {
    directives: CspDirectives;
    reportOnly: boolean;
} | {
    directives?: undefined;
    reportOnly?: undefined;
};
declare const setCtxCsp: (ctx: CtxHeaders, directives: CspDirectives, reportOnly: boolean) => void;

declare const setNonceBits: (bits: number) => number;
declare const generateNonce: (bits?: number) => string;
declare const getCtxNonce: (ctx: CtxHeaders) => string;
declare const getCreateCtxNonceIdempotent: (ctx: CtxHeaders) => string;

declare function gsspWithNonce<P extends {
    [key: string]: any;
} = {
    [key: string]: any;
}, Q extends ParsedUrlQuery = ParsedUrlQuery, D extends PreviewData = PreviewData>(getServerSideProps: GetServerSideProps<P, Q, D>): GetServerSideProps<P & {
    nonce: string;
}, Q, D>;
declare function gipWithNonce<Props extends Record<string, any> = Record<string, any>>(getInitialProps: (ctx: NextPageContext) => Promise<Props>): (ctx: NextPageContext) => Promise<Props & {
    nonce: string;
}>;
/**
 * @alias gsspWithNonce
 */
declare const gsspWithNonceAppliedToCsp: typeof gsspWithNonce;
/**
 * @alias gipWithNonce
 */
declare const gipWithNonceAppliedToCsp: typeof gipWithNonce;

declare type ExcludeList = ("scripts" | "styles")[];
declare type TrustifyComponentProps = {
    children?: any;
};
declare type TrustifyComponents = {
    Head: (props: TrustifyComponentProps) => any;
    NextScript: (props: TrustifyComponentProps) => any;
};

declare const setHashAlgorithm: (algorithm: "sha256" | "sha384" | "sha512") => "sha256" | "sha384" | "sha512";
declare const hash: (text: string) => string;

declare type Nullable<T = null> = T | null;
declare type Primitive = string | number | boolean;
declare type IterableScript = [string, Primitive][];

declare let iterableScripts: IterableScript[];
declare const collectIterableScript: (...scripts: Nullable<IterableScript>[]) => void;
declare const collectScriptElement: (...scripts: Nullable<JSX.Element>[]) => void;
declare const pullManifestScripts: () => ({
    src: string;
    hash: string;
} | {
    hash: string;
    src?: undefined;
})[];
declare const collectStyleElem: (...hashes: string[]) => void;
declare const pullStyleElem: () => string[];
declare const collectStyleAttr: (...hashes: string[]) => void;
declare const pullStyleAttr: () => string[];
declare const pullManifest: () => CspManifest;

declare const sameLengthPaddedFlatZip: (a: any, b: any) => any[];
declare const deepMapExtractScripts: (children: any) => any[];
declare const deepMapStripIntegrity: (children: any) => any[];
declare const deepExtractStyleElemHashes: (children: any, exclude?: ExcludeList) => string[];

declare const deepEnsureScriptElementsInManifest: (children: any, component?: "Head") => void;

declare class Head$1 extends Head$2 {
    private proxyfiedScripts;
    getPreloadDynamicChunks(): JSX.Element[];
    getPreloadMainLinks(files: any): any;
    getBeforeInteractiveInlineScripts(): any;
    getPolyfillScripts(): any;
    getPreNextScripts(): any;
    getDynamicChunks(files: any): any;
    getScripts(files: any): any;
    render(): JSX.Element;
}

declare class NextScript$1 extends NextScript$2 {
    private proxyfiedScripts;
    getPolyfillScripts(): any;
    getPreNextScripts(): any;
    getDynamicChunks(files: any): any;
    getScripts(files: any): any;
}

declare const deepEnsureNonceInChildren: (nonce: string, children: any, exclude?: ("scripts" | "styles")[]) => void;
declare const deepMapWithNonce: (nonce: string, children: any, exclude?: ("scripts" | "styles")[]) => JSX.Element[];

declare class Head extends Head$2 {
    getPreNextScripts(): any;
    render(): JSX.Element;
}

declare class NextScript extends NextScript$2 {
    getPreNextScripts(): any;
}

/**
 * Provides replacement components for `<Head>` and `<NextScript>` from `next/document`.
 * They do all kinds of different stuff so strict CSPs work with Next.js.
 *
 * `getCspInitialProps` must be called in `getInitialProps` of your custom `_document.js` for them to work.
 *
 * @requires `getCspInitialProps`
 *
 * @example
 * export default class MyDocument extends Document {
 *   static async getInitialProps(ctx) {
 *     const initialProps = await getCspInitialProps({
 *       ctx,
 *       trustifyStyles: true,
 *     });
 *     return initialProps;
 *   ...
 *
 *   render() {
 *     const { Head, NextScript } = provideComponents(this.props)
 *     ...
 *   }
 */
declare const provideComponents: (props: DocumentProps) => TrustifyComponents;

declare type ProcessHtmlOptions = {
    styles?: boolean | {
        elements?: boolean;
        attributes?: boolean;
    };
};
declare type CspDocumentInitialPropsOptions = {
    /** the context of the document, same as passed to `Document.getInitialProps` */
    ctx: DocumentContext;
    /**
     * if you call `Document.getInitialProps` yourself and want to do more customizations
     * on initialProps before, do them and pass the result here  */
    passInitialProps?: DocumentInitialProps;
    /**
     * You need to set this to `true`, if you want strict inline styles and use the `strictInlineStyles` middleware.
     * If you do so, styles (tags and attributes) of prerendered HTML
     * will be visited and nonced/hashed for CSP.
     *
     * @default false
     *
     * @see https://github.com/nibtime/next-safe-middleware/issues/31
     */
    trustifyStyles?: boolean;
    /**
     * This needs to be `true` if you use a strict CSP with `strictDynamic` middleware.
     * This will ensure that all your scripts that need to load before your app
     * is interactive (including Next itself) get nonced/hashed and included in your CSP.
     *
     * @default true
     */
    trustifyScripts?: boolean;
    /**
     * you can pass raw css of style tags here to be hashed. This is necessary if a framework adds
     * style tags in an opaque way with a React component, like Mantine. In such cases you can pass
     * the raw css text of the underlying CSS-in-JS framework here.
     *
     * values can be a string with raw css text
     * or a function that pull a string with css text from `initialProps`
     * (if you want an enhanced <App> with nonce, you can't call Document.getInitialProps before);
     *
     * @see https://github.com/nibtime/next-safe-middleware/issues/34
     *
     * @example
     * const initialProps = await getCspInitialProps({
     *   ctx,
     *   trustifyStyles: true,
     *   hashStyleElements: [
     *     (initialProps) =>
     *       stylesServer
     *         .extractCriticalToChunks(initialProps.html)
     *         .styles.map((s) => s.css),
     *   ],
     * });
     * ...
     *
     * return initialProps
     */
    hashRawCss?: (string | ((initialProps: DocumentInitialProps) => string | string[]))[];
    /**
     * To control whether to trustify stuff in initialProps.html
     *
     * This can be potentially dangerous if you server-render dynamic user data from `getStaticProps` or `getServerSideProps`
     * in HTML. However if you turn it off, every inline style of every 3rd party lib (including even default Next.js 404) will
     * be blocked by CSP with the only alternative being `style-src unsafe-inline`.
     *
     * Can be turned completely on/off complete per directives with `trustify...` flags
     * and selectively for initialProps.html with granluar control via this config object
     * @default
     * {
     *   styles: {
     *     elements: true,
     *     attributes: true
     *   }
     * }
     */
    processHtmlOptions?: ProcessHtmlOptions;
    hashBasedByProxy?: boolean;
};

/**
 * A replacement for `Document.getInitialProps`to use in `getInitialProps` of your custom `_document.js` .
 * It sets up all different kinds of stuff so strict CSPs work with Next.js.
 *
 * Must be used together with components returned from `provideComponents` to be in effect.
 * @requires `provideComponents`
 *
 * @example
 * export default class MyDocument extends Document {
 *   static async getInitialProps(ctx) {
 *     const initialProps = await getCspInitialProps({
 *       ctx,
 *       trustifyStyles: true,
 *       enhanceAppWithNonce: true
 *     });
 *     return initialProps;
 * ...
 */
declare const getCspInitialProps: ({ ctx, passInitialProps, trustifyScripts, trustifyStyles, hashRawCss, processHtmlOptions, hashBasedByProxy, }: CspDocumentInitialPropsOptions) => Promise<next_document.DocumentInitialProps | {
    nonce: string;
    html: string;
    head?: JSX.Element[];
    styles?: JSX.Element | react.ReactFragment | react.ReactElement<any, string | react.JSXElementConstructor<any>>[];
}>;
declare type PromiseInnerType<T> = T extends Promise<infer U> ? U : never;
declare type CspInitialProps = PromiseInnerType<ReturnType<typeof getCspInitialProps>>;

export { CspDocumentInitialPropsOptions, CspInitialProps, Head$1 as HashHead, NextScript$1 as HashNextScript, Head as NonceHead, NextScript as NonceNextScript, ProcessHtmlOptions as ProcessInitialPropsHtmlOptions, collectIterableScript, collectScriptElement, collectStyleAttr, collectStyleElem, cspDirectiveHas, deepEnsureNonceInChildren, deepEnsureScriptElementsInManifest, deepExtractStyleElemHashes, deepMapExtractScripts, deepMapStripIntegrity, deepMapWithNonce, extendCsp, filterCsp, fromCspContent, generateNonce, getCreateCtxNonceIdempotent, getCspInitialProps, getCtxCsp, getCtxNonce, gipWithNonce, gipWithNonceAppliedToCsp, gsspWithNonce, gsspWithNonceAppliedToCsp, hash, iterableScripts, logCtxHeaders, provideComponents, pullManifest, pullManifestScripts, pullStyleAttr, pullStyleElem, sameLengthPaddedFlatZip, setCtxCsp, setHashAlgorithm, setNonceBits, toCspContent };
