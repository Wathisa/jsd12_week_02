SELECT ingredients.name
FROM ingredients
JOIN recipeitems
ON ingredients.ingredient_id = recipeitems.ingredient_id
JOIN menuitems
ON recipeitems.item_id = menuitems.item_id
WHERE menuitems.name = 'Bacon Cheeseburger';