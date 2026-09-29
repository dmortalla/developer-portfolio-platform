import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.describe("portfolio vertical slice", () => {
  test("navigates from the homepage to the Urban Mobility case study", async ({
    page,
  }) => {
    await page.goto("/");

    await expect(
      page.getByRole("heading", {
        name: "Engineering systems across the modern data and AI stack.",
      }),
    ).toBeVisible();

    await expect(
      page.getByRole("heading", {
        name: "Urban Mobility Data Lakehouse",
      }),
    ).toBeVisible();

    const urbanMobilityCard = page.getByRole("article").filter({
      has: page.getByRole("heading", {
        name: "Urban Mobility Data Lakehouse",
      }),
    });

    await urbanMobilityCard
      .getByRole("link", { name: "View case study" })
      .click();

    await expect(page).toHaveURL(/\/projects\/urban-mobility-data-lakehouse$/);

    await expect(
      page.getByRole("heading", {
        level: 1,
        name: "Urban Mobility Data Lakehouse",
      }),
    ).toBeVisible();

    await expect(
      page.getByRole("heading", {
        level: 2,
        name: "Architecture",
        exact: true,
      }),
    ).toBeVisible();

    await expect(
      page.getByRole("heading", {
        name: "Engineering Evidence",
      }),
    ).toBeVisible();

    await expect(
      page.getByRole("heading", {
        name: "What It Proves",
      }),
    ).toBeVisible();
  });

  test("navigates from additional engineering work to the Developer Portfolio Platform case study", async ({
    page,
  }) => {
    await page.goto("/");

    await expect(
      page.getByRole("heading", {
        name: "Production systems beyond the flagship progression.",
      }),
    ).toBeVisible();

    await expect(
      page.getByRole("heading", {
        name: "Developer Portfolio Platform",
      }),
    ).toBeVisible();

    const platformCard = page.getByRole("article").filter({
      has: page.getByRole("heading", {
        name: "Developer Portfolio Platform",
      }),
    });

    await platformCard.getByRole("link", { name: "View case study" }).click();

    await expect(page).toHaveURL(/\/projects\/developer-portfolio-platform$/);

    await expect(
      page.getByRole("heading", {
        level: 1,
        name: "Developer Portfolio Platform",
      }),
    ).toBeVisible();

    await expect(
      page.getByRole("heading", {
        level: 2,
        name: "Architecture",
        exact: true,
      }),
    ).toBeVisible();

    await expect(
      page.getByRole("heading", {
        name: "Engineering Evidence",
      }),
    ).toBeVisible();

    await expect(
      page.getByRole("heading", {
        name: "What It Proves",
      }),
    ).toBeVisible();
  });

  test("homepage has no automatically detectable accessibility violations", async ({
    page,
  }) => {
    await page.goto("/");

    const results = await new AxeBuilder({ page }).analyze();

    expect(results.violations).toEqual([]);
  });

  test("Urban Mobility case study has no automatically detectable accessibility violations", async ({
    page,
  }) => {
    await page.goto("/projects/urban-mobility-data-lakehouse");

    const results = await new AxeBuilder({ page }).analyze();

    expect(results.violations).toEqual([]);
  });

  test("Developer Portfolio Platform case study has no automatically detectable accessibility violations", async ({
    page,
  }) => {
    await page.goto("/projects/developer-portfolio-platform");

    const results = await new AxeBuilder({ page }).analyze();

    expect(results.violations).toEqual([]);
  });
});
