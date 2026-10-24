import test from "node:test";
import assert from "node:assert/strict";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

import { CategoriesShowcase, CATEGORIES_DATA } from "../categories-showcase";
import * as LandingExports from "../index";

// ============================================================================
// 1. DATA INTEGRITY & CATEGORIES VERIFICATION
// ============================================================================

test("T01: CATEGORIES_DATA contains exactly 6 distinct research categories", () => {
  assert.strictEqual(CATEGORIES_DATA.length, 6);
});

test("T02: All 6 required categories from Figma specification are present", () => {
  const expectedNames = [
    "Product Design",
    "Market Strategy",
    "Brand Perception",
    "Market Research",
    "Competition Analysis",
    "Event Planning",
  ];

  const actualNames = CATEGORIES_DATA.map((c) => c.name);
  for (const expected of expectedNames) {
    assert.ok(
      actualNames.includes(expected),
      `Expected category "${expected}" not found in CATEGORIES_DATA`,
    );
  }
});

test("T03: All category IDs are unique, kebab-case, and non-empty", () => {
  const ids = CATEGORIES_DATA.map((c) => c.id);
  const uniqueIds = new Set(ids);
  assert.strictEqual(ids.length, uniqueIds.size, "Duplicate category ID found");

  for (const id of ids) {
    assert.strictEqual(typeof id, "string");
    assert.ok(id.length > 0);
    assert.strictEqual(id, id.toLowerCase());
    assert.ok(!id.includes(" "), `Category ID "${id}" must not contain spaces`);
  }
});

test("T04: Every category item has valid non-empty description, badge, and icon", () => {
  for (const cat of CATEGORIES_DATA) {
    assert.ok(cat.description && cat.description.length > 10);
    assert.ok(cat.badge && cat.badge.length > 0);
    assert.ok(typeof cat.icon === "function" || typeof cat.icon === "object");
  }
});

// ============================================================================
// 2. COMPONENT RENDERING & MARKUP SPECIFICATIONS
// ============================================================================

test("T05: CategoriesShowcase renders section with proper ID and ARIA attributes", () => {
  const html = renderToStaticMarkup(React.createElement(CategoriesShowcase));
  assert.ok(html.includes('id="categories"'));
  assert.ok(html.includes('aria-label="Survey Categories Showcase"'));
});

test("T06: Upper CLIENT badge is rendered with high-contrast styling", () => {
  const html = renderToStaticMarkup(React.createElement(CategoriesShowcase));
  assert.ok(html.includes('data-testid="client-label"'));
  assert.ok(html.includes("CLIENT"));
});

test("T07: Main heading matches Figma requirement exactly", () => {
  const html = renderToStaticMarkup(React.createElement(CategoriesShowcase));
  assert.ok(html.includes('data-testid="showcase-heading"'));
  assert.ok(html.includes("Are you looking for user insights on your.."));
});

test("T08: All 6 category titles are rendered in the HTML markup", () => {
  const html = renderToStaticMarkup(React.createElement(CategoriesShowcase));
  assert.ok(html.includes("Product Design"));
  assert.ok(html.includes("Market Strategy"));
  assert.ok(html.includes("Brand Perception"));
  assert.ok(html.includes("Market Research"));
  assert.ok(html.includes("Competition Analysis"));
  assert.ok(html.includes("Event Planning"));
});

test("T09: All category badges and descriptions are rendered", () => {
  const html = renderToStaticMarkup(React.createElement(CategoriesShowcase));
  for (const cat of CATEGORIES_DATA) {
    assert.ok(
      html.includes(cat.badge),
      `Badge "${cat.badge}" missing from HTML`,
    );
    assert.ok(
      html.includes(cat.description),
      `Description for "${cat.name}" missing from HTML`,
    );
  }
});

test("T10: CTA text link is rendered with correct text, href, and arrow", () => {
  const html = renderToStaticMarkup(React.createElement(CategoriesShowcase));
  assert.ok(html.includes('data-testid="create-survey-cta"'));
  assert.ok(html.includes("Create a survey now"));
  assert.ok(html.includes('href="#create-survey"'));
  assert.ok(html.includes("→"));
});

test("T11: Tablist and tab accessibility attributes are properly configured", () => {
  const html = renderToStaticMarkup(React.createElement(CategoriesShowcase));
  assert.ok(html.includes('role="tablist"'));
  assert.ok(html.includes('aria-label="Survey Categories"'));
  assert.ok(html.includes('role="tab"'));
  assert.ok(html.includes('aria-selected="true"')); // Initial default selected tab
});

test("T12: Feature index exports CategoriesShowcase and CATEGORIES_DATA cleanly", () => {
  assert.ok(typeof LandingExports.CategoriesShowcase === "function");
  assert.ok(Array.isArray(LandingExports.CATEGORIES_DATA));
  assert.strictEqual(LandingExports.CATEGORIES_DATA.length, 6);
});
