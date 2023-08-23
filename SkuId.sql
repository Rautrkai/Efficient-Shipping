
DELIMITER //

CREATE TRIGGER generate_sku_id_for_item_details
BEFORE INSERT ON item_details
FOR EACH ROW
BEGIN
    DECLARE new_sku_id VARCHAR(255);
    DECLARE counter INT;

    -- Find the maximum counter for the current customer ID
    SELECT MAX(SUBSTRING_INDEX(sku_id, '-', -1)) INTO counter
    FROM item_details
    WHERE cust_id = NEW.cust_id;

    -- If no previous records, set counter to 1
    IF counter IS NULL THEN
        SET counter = 1;
    ELSE
        SET counter = counter + 1;
    END IF;

    -- Generate the new SKU ID
    SET new_sku_id = CONCAT('SKU-', NEW.cust_id, '-', LPAD(counter, 4, '0'));

    -- Assign the new SKU ID to the inserted row
    SET NEW.sku_id = new_sku_id;
END;
//
DELIMITER ;









